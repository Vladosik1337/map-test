import { FILTERS } from "@/constants/filters";
import { useFilterBar } from "@/hooks/useFilterBar";
import { Box, Button, Popover, Slider } from "@mui/material";
import { Controller } from "react-hook-form";
import { FilterSelect } from "../filterSelect";
import { FilterBarWrapper, SliderWrapper, StyledIconButton } from "./styled";

export const FilterBar = () => {
  const {
    control,
    handleSubmit,
    resetValues,
    onSubmit,
    watchedRent,
    anchorEl,
    open,
    handleOpenSlider,
    handleCloseSlider,
  } = useFilterBar();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FilterBarWrapper>
        {FILTERS.map((filter) => (
          <FilterSelect
            key={filter.name}
            name={filter.name}
            label={filter.label}
            control={control}
            options={filter.options}
          />
        ))}

        <Controller
          name="rent"
          control={control}
          render={({ field }) => (
            <Box>
              <StyledIconButton onClick={handleOpenSlider}>
                {`${watchedRent[0]} - ${watchedRent[1]} €`}
              </StyledIconButton>

              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleCloseSlider}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                sx={{
                  transform: "translateX(-40px)",
                }}
              >
                <SliderWrapper>
                  <Slider
                    size="small"
                    value={watchedRent}
                    onChange={(_, value) => {
                      const [min, max] = value as number[];
                      field.onChange(`${min}-${max}`);
                    }}
                    valueLabelDisplay="on"
                    min={300}
                    max={10000}
                    step={100}
                    sx={{ width: 150 }}
                  />
                </SliderWrapper>
              </Popover>
            </Box>
          )}
        />

        <Button type="submit" variant="contained" color="primary">
          Apply
        </Button>
        <Button onClick={resetValues} variant="outlined" color="secondary">
          Reset
        </Button>
      </FilterBarWrapper>
    </form>
  );
};
