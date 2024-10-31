import * as turf from "@turf/turf";
import { Position } from "geojson";

import { booleanPointInPolygon, polygon } from "@turf/turf";
import { useEffect, useState } from "react";

export const usePolygonFilter = (tenements: Tenement[], coordinates: Position[]) => {
  const [filteredTenements, setFilteredTenements] = useState<Tenement[]>([]);

  useEffect(() => {
    if (coordinates.length === 0) {
      setFilteredTenements(tenements);
      return;
    }

    const poly = polygon([coordinates]);

    const filtered = tenements.filter((tenement) => {
      const tenementCoordinates = tenement.location ?? tenement.locationReal;
      if (tenementCoordinates && tenementCoordinates.length === 2) {
        const point = turf.point(tenementCoordinates);
        return booleanPointInPolygon(point, poly);
      }
      return false;
    });

    setFilteredTenements(filtered);
  }, [tenements, coordinates]);

  return { filteredTenements };
};
