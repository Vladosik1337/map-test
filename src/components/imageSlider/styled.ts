import { Box, styled } from "@mui/material";

export const SliderWrapper = styled(Box)({
  maxWidth: "380px",
  width: "100%",
  height: "280px",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s",
  ":hover": {
    transform: "scale(0.9)",
  },
});

export const SlideWrapper = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "8px",
  overflow: "hidden",
});
