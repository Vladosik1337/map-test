import { useTenementsContext } from "@/contexts";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface UseFilterBarResult {
  control: any;
  handleSubmit: any;
  resetValues: () => void;
  onSubmit: (data: any) => void;
  watchedRent: number[];
  anchorEl: HTMLElement | null;
  open: boolean;
  handleOpenSlider: (event: React.MouseEvent<HTMLElement>) => void;
  handleCloseSlider: () => void;
}

export const useFilterBar = (): UseFilterBarResult => {
  const { setFilters } = useTenementsContext();

  const { control, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      propertyType: "",
      beds: "",
      baths: "",
      livingRooms: "",
      pets: "",
      deposit: "",
      rent: "300 - 4000",
    },
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpenSlider = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSlider = () => {
    setAnchorEl(null);
  };

  const watchedRent = watch("rent") ? watch("rent").split("-").map(Number) : [300, 1000];

  const resetValues = () => {
    reset();
    setFilters({
      rent: [0, 9999999] as [number, number],
    });
  };

  const onSubmit = (data: any) => {
    const processedData = {
      rent: data.rent ? data.rent.split("-").map(Number) : [0, 9999999],
      roomsBed: data.beds ? data.beds.split("-").map(Number) : [0, 99],
      roomsBath: data.baths ? data.baths.split("-").map(Number) : [0, 99],
    };

    setFilters((prevFilters: any) => ({
      ...prevFilters,
      ...processedData,
    }));
  };

  return {
    control,
    handleSubmit,
    resetValues,
    onSubmit,
    watchedRent,
    anchorEl,
    open,
    handleOpenSlider,
    handleCloseSlider,
  };
};
