import { Box, IconButton, styled } from "@mui/material";

export const FilterBarWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  height: "82px",
  justifyContent: "space-around",
  borderBottom: "1px solid #e0e0e0",
  overflow: "scroll",
  gap: "10px",
});

export const StyledIconButton = styled(IconButton)({
  border: "1px solid #ccc",
  borderRadius: "4px",
  padding: "8px",
  minWidth: "120px",
  fontSize: "12px",
  textAlign: "center",
  height: "100%",
});

export const SliderWrapper = styled(Box)({
  marginTop: "20px",
  paddingTop: "10px",
  paddingBottom: "5px",
  paddingInline: "30px",
});
