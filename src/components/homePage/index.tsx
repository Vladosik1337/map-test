import { useMapInteractions } from "@/hooks";
import "mapbox-gl/dist/mapbox-gl.css";
import { FilterBar } from "../filterBar";
import { MapIcon } from "../mapIcon";
import { TenementsList } from "../tenementsList";
import { ExternalWrapper, InternalWrapper, MapWrapper } from "./styled";

export const HomePage = () => {
  const { mapContainerRef, ICONS, visibleTenements, map } =
    useMapInteractions();

  return (
    <ExternalWrapper>
      <FilterBar />

      <InternalWrapper>
        <MapWrapper id="map-container" ref={mapContainerRef}>
          {map &&
            ICONS.map((icon) => (
              <MapIcon
                key={icon.id}
                title={icon.title}
                iconPath={icon.iconPath}
                iconAlt={icon.title}
                position={icon.position}
                onClick={icon.onClick}
              />
            ))}
        </MapWrapper>

        <TenementsList tenements={visibleTenements} />
      </InternalWrapper>
    </ExternalWrapper>
  );
};
