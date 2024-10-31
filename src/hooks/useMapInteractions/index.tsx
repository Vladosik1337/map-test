import { useTenementsContext } from "@/contexts";
import { useIcons, useMap } from "@/hooks";
import * as turf from "@turf/turf";
import { booleanPointInPolygon, polygon } from "@turf/turf";
import { Position } from "geojson";
import { useEffect, useState } from "react";

export const useMapInteractions = () => {
  const { tenements, markers, activateDrawMode, setFilters, setMarkers } = useTenementsContext();
  const {
    mapContainerRef,
    map,
    coordinates,
    addMarkers,
    handleActivateDrawMode,
    handleCancelDrawMode,
  } = useMap();
  const ICONS = useIcons();

  const [visibleTenements, setVisibleTenements] = useState<Tenement[]>([]);

  const updateVisibleTenements = () => {
    if (!map) return;
    if (coordinates.length) return;

    const bounds = map.getBounds();

    const visibleTenements = tenements.filter((tenement) => {
      const coordinates = tenement.location ?? tenement.locationReal;

      const [lng, lat] = coordinates;

      return bounds?.contains([lng, lat]);
    });

    setVisibleTenements(visibleTenements);
  };

  const filterTenementsByPolygon = (tenements: Tenement[], polygonCoordinates: Position[]) => {
    const poly = polygon([polygonCoordinates]);

    return tenements.filter((tenement) => {
      const coordinates = tenement.location ?? tenement.locationReal;
      if (coordinates && coordinates.length === 2) {
        const point = turf.point(coordinates);
        return booleanPointInPolygon(point, poly);
      }
      return false;
    });
  };

  useEffect(() => {
    if (activateDrawMode) {
      handleActivateDrawMode();
    } else {
      handleCancelDrawMode();
    }
  }, [activateDrawMode]);

  useEffect(() => {
    if (coordinates.length) {
      setFilters((prev: any) => ({
        ...prev,
        location: coordinates,
      }));

      const filteredTenements = filterTenementsByPolygon(tenements, coordinates);
      setVisibleTenements(filteredTenements);
      return;
    }

    setFilters({
      rent: [0, 9999999] as [number, number],
    });
  }, [coordinates]);

  useEffect(() => {
    if (map && markers.length > 0) {
      addMarkers(markers);
    }
  }, [map, markers]);

  useEffect(() => {
    if (!map || !tenements || !markers) return;

    map.on("moveend", updateVisibleTenements);

    return () => {
      map.off("moveend", updateVisibleTenements);
    };
  }, [map, tenements, markers]);

  return {
    mapContainerRef,
    ICONS,
    visibleTenements,
    map,
  };
};
