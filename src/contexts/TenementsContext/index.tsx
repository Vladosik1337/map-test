import { useMapMarkersMutations, useTenementsListMutations } from "@/api/mutations";
import { Dispatch, SetStateAction, createContext, useContext, useEffect, useState } from "react";

interface TenementsContextProps {
  filters: any;
  setFilters: (filters: any) => void;
  tenements: Tenement[];
  markers: Tenement[];
  fetchTenements: () => void;
  activateDrawMode: boolean;
  setActivateDrawMode: Dispatch<SetStateAction<boolean>>;
  setMarkers: Dispatch<SetStateAction<Tenement[]>>;
}

export const TenementsContext = createContext<TenementsContextProps | undefined>(undefined);

export const TenementsProvider = ({ children }: { children: React.ReactNode }) => {
  const { getTenementsListMutate } = useTenementsListMutations();
  const { getMapMarkersMutate } = useMapMarkersMutations();

  const [filters, setFilters] = useState({
    rent: [0, 9999999] as [number, number],
  });

  const [tenements, setTenements] = useState<Tenement[]>([]);
  const [markers, setMarkers] = useState<Tenement[]>([]);

  const [activateDrawMode, setActivateDrawMode] = useState(false);

  const fetchTenements = () => {
    const data = {
      filter: filters,
    };

    getTenementsListMutate(data, {
      onSuccess: (response) => {
        const fetchedTenements = response.data.res as Tenement[];
        setTenements(fetchedTenements);
      },
      onError: (error) => {
        console.error("Error fetching tenements:", error);
      },
    });

    getMapMarkersMutate(data, {
      onSuccess: (response) => {
        const fetchedMarkers = response.data.res as any[];

        const validMarkers = fetchedMarkers.filter((marker) => {
          const coordinates = marker.location ?? marker.locationReal;
          return (
            coordinates &&
            coordinates.length === 2 &&
            coordinates[0] !== undefined &&
            coordinates[1] !== undefined
          );
        });

        setMarkers(validMarkers);
      },
      onError: (error) => {
        console.error("Error fetching map markers:", error);
      },
    });
  };

  useEffect(() => {
    fetchTenements();
  }, [filters]);

  return (
    <TenementsContext.Provider
      value={{
        filters,
        tenements,
        markers,
        activateDrawMode,
        setActivateDrawMode,
        fetchTenements,
        setFilters,
        setMarkers,
      }}
    >
      {children}
    </TenementsContext.Provider>
  );
};

export const useTenementsContext = () => {
  const context = useContext(TenementsContext);
  if (!context) {
    throw new Error("useTenementsContext must be used within a TenementsProvider");
  }
  return context;
};
