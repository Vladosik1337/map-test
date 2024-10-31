import MapboxDraw from "@mapbox/mapbox-gl-draw";
import area from "@turf/area";
import mapboxgl, { Map } from "mapbox-gl";

import { useEffect, useRef, useState } from "react";

import { Polygon, Position } from "geojson";
import "../../style/mapStyle.css";

export const useMap = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const markerLayerIds = useRef<string[]>([]);

  const [map, setMap] = useState<Map | null>(null);
  const [coordinates, setCoordinates] = useState<Position[]>([]);

  const drawRef = useRef<MapboxDraw | null>(null);

  useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoibHlzdGlvIiwiYSI6ImNtMjA3cmFoejBnMngycXM4anNuNXFmaTQifQ.y-WiEerYZrFOm8Xd8a7GwQ";

    const mapInstance = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLDivElement,
      style: "mapbox://styles/lystio/cm1erwga302jt01pjh0nxh47n",
      center: [16.3355, 48.2092],
      zoom: 12,
      pitch: 60,
      bearing: 20,
    });

    mapInstance.dragRotate.enable();
    mapInstance.touchZoomRotate.enableRotation();

    mapInstance.on("style.load", () => {
      setMap(mapInstance);
      addEraserLayer(mapInstance);
    });

    const draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        trash: true,
      },
      defaultMode: "simple_select",
    });

    drawRef.current = draw;

    mapInstance.addControl(draw);

    mapInstance.on("draw.create", updateArea);
    mapInstance.on("draw.delete", updateArea);
    mapInstance.on("draw.update", updateArea);

    return () => {
      mapInstance.remove();
    };
  }, []);

  const handleActivateDrawMode = () => {
    if (drawRef.current && map) {
      drawRef.current.changeMode("draw_polygon");
    }
  };

  const handleCancelDrawMode = () => {
    if (drawRef.current && map) {
      drawRef.current.changeMode("simple_select");
      setCoordinates([]);
    }
  };

  const updateArea = (e: any) => {
    if (!drawRef.current) return;

    const data = drawRef.current.getAll();
    if (data && data.features.length > 0) {
      const polygons = data.features;

      let polygonArea = 0;

      for (const polygon of polygons) {
        polygonArea += area(polygon);
      }

      const geometry = data.features[0]?.geometry as Polygon;

      const polygonCoordinates = geometry.coordinates[0];
      if (polygonCoordinates) {
        setCoordinates(polygonCoordinates);
      }
    } else {
      setCoordinates([]);
    }
  };

  const addEraserLayer = (mapInstance: Map) => {
    mapInstance.addSource("eraser", {
      type: "geojson",
      data: {
        type: "FeatureCollection",
        features: [],
      },
    });

    mapInstance.addLayer({
      id: "eraser-fill",
      type: "fill",
      source: "eraser",
      paint: {
        "fill-color": "#088",
        "fill-opacity": 0.5,
      },
    });
  };

  const clearMarkers = () => {
    if (!map) return;

    markerLayerIds.current.forEach((layerId) => {
      if (map.getLayer(layerId)) {
        map.removeLayer(layerId);
      }
      if (map.getSource(layerId)) {
        map.removeSource(layerId);
      }
    });

    markerLayerIds.current = [];
  };

  const addMarkers = (tenements: Tenement[]) => {
    if (!map) return;

    clearMarkers();

    const bounds = new mapboxgl.LngLatBounds();

    tenements.forEach((el) => {
      const coordinates = el.location ?? el.locationReal;

      if (!coordinates || coordinates.length < 2 || !coordinates[0] || !coordinates[1]) {
        console.warn(`Invalid coordinates for tenement ${el.id}`);
        return;
      }

      bounds.extend(coordinates);

      const markerImage = createCustomMarkerCanvas(`€ ${el.rent}`);
      const imageName = `custom-marker-${el.id}`;
      const markerSourceId = `marker-source-${el.id}`;
      const markerLayerId = `marker-${el.id}`;

      if (!map.hasImage(imageName)) {
        map.loadImage(markerImage, (error, image: any) => {
          if (error) {
            console.error("Error loading image for marker:", error);
            return;
          }
          map.addImage(imageName, image);
        });
      }

      if (map.getSource(markerSourceId)) {
        map.removeSource(markerSourceId);
      }

      map.addSource(markerSourceId, {
        type: "geojson",
        data: {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates,
          },
          properties: {
            ...el,
          },
        },
      });

      if (map.getLayer(markerLayerId)) {
        map.removeLayer(markerLayerId);
      }

      map.addLayer({
        id: markerLayerId,
        type: "symbol",
        source: markerSourceId,
        layout: {
          "icon-image": imageName,
          "icon-size": 1,
          "icon-allow-overlap": true,
        },
      });

      markerLayerIds.current.push(markerLayerId);

      let currentPopup: mapboxgl.Popup | null = null;

      map.on("mouseenter", markerLayerId, () => {
        if (currentPopup) {
          currentPopup.remove();
        }

        const newPopup = displayPopup(el, coordinates);
        newPopup.addTo(map);
        currentPopup = newPopup;
      });

      map.on("mouseleave", markerLayerId, () => {
        if (currentPopup) {
          currentPopup.remove();
          currentPopup = null;
        }
      });
    });

    if (!bounds.isEmpty() && !coordinates.length) {
      map.fitBounds(bounds, { zoom: 13, pitch: 80, bearing: 20 });
    }
  };

  const createCustomMarkerCanvas = (text: string) => {
    const canvas = document.createElement("canvas");
    const width = 80;
    const height = 30;
    canvas.width = width;
    canvas.height = height + 10;

    const context = canvas.getContext("2d");
    if (context) {
      context.fillStyle = "rgba(255, 255, 255, 0.9)";
      context.beginPath();
      context.moveTo(10, 0);
      context.lineTo(width - 10, 0);
      context.quadraticCurveTo(width, 0, width, 10);
      context.lineTo(width, height - 10);
      context.quadraticCurveTo(width, height, width - 10, height);
      context.lineTo(10, height);
      context.quadraticCurveTo(0, height, 0, height - 10);
      context.lineTo(0, 10);
      context.quadraticCurveTo(0, 0, 10, 0);
      context.fill();

      context.beginPath();
      context.moveTo(width / 2 - 5, height);
      context.lineTo(width / 2 + 5, height);
      context.lineTo(width / 2, height + 10);
      context.closePath();
      context.fill();

      context.fillStyle = "black";
      context.font = "bold 16px Arial";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(text, width / 2, height / 2);
    }

    return canvas.toDataURL();
  };

  const displayPopup = (tenement: Tenement, coordinates: [number, number]) => {
    const mediaArray =
      typeof tenement.media === "string" ? JSON.parse(tenement.media) : tenement.media;

    const image =
      mediaArray && mediaArray.length > 0 && mediaArray[0]?.cdnUrl
        ? mediaArray[0].cdnUrl
        : "/no_image_image.png";

    const newPopup = new mapboxgl.Popup({ offset: 35 }).setLngLat(coordinates).setHTML(`
        <div style="padding: 10px; background: white">
          <div>
            <img src="${image}" style="width: 100%; height: auto; border-radius: 8px;" />
          </div>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <h3 style="margin: 10px 0 5px; font-size: 18px;">€ ${tenement.rent}</h3>
            <p style="margin: 0; font-size: 14px; color: grey;">${tenement.address}, ${tenement.city}</p>
            <div style="display: flex; justify-content: space-between; font-size: 14px; color: grey;">
              <div style="display: flex; gap: 5px; flex: 1">
                <img src="/cube.svg" />
                <span>${tenement.size} m²</span>
              </div>
              <div style="display: flex; gap: 5px; flex: 1">
                <img src="/bed.svg" />
                <span>${tenement.roomsBed} beds</span>
              </div>
              <div style="display: flex; gap: 5px; flex: 1">
                <img src="/bath.svg" />
                <span>${tenement.roomsBath} bath</span>
              </div>
            </div>
          </div>
        </div>
      `);

    return newPopup;
  };

  return {
    mapContainerRef,
    map,
    coordinates,
    addMarkers,
    handleActivateDrawMode,
    handleCancelDrawMode,
  };
};
