import { Box, styled } from "@mui/material";

export const ExternalWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  maxHeight: "100dvh",
  paddingInline: "20px",
  overflow: "hidden",
});

export const InternalWrapper = styled(Box)({
  display: "flex",
  gap: "40px",
  width: "100%",
  flexGrow: 1,
  height: "calc(100dvh - 84px)",
  overflow: "hidden",
});

export const MapWrapper = styled(Box)({
  width: "50%",
  height: "100%",
  alignSelf: "flex-end",

  "& .mapboxgl-popup-content": {
    width: "340px",
  },

  "& .mapboxgl-popup-close-button": {
    width: "25px",
    height: "25px",
  },
});
