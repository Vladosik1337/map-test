import { FormControl, MenuItem, Select, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

interface FilterSelectProps {
  name: string;
  label: string;
  control: any;
  options: { label: string; value: string }[];
}

export const FilterSelect = ({ name, label, control, options }: FilterSelectProps) => (
  <FormControl variant="standard" sx={{ minWidth: 120 }}>
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          displayEmpty
          variant="outlined"
          size="small"
          sx={{
            fontSize: "12px",
          }}
        >
          <MenuItem value="">
            <Typography
              sx={{
                fontSize: "12px",
              }}
            >
              {label}
            </Typography>
          </MenuItem>
          {options.map((option) => (
            <MenuItem
              key={option.value}
              value={option.value}
              sx={{
                fontSize: "12px",
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Select>
      )}
    />
  </FormControl>
);
