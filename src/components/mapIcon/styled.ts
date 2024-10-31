import { Box, Typography, styled } from "@mui/material";

export const HoverBox = styled(Box)({
  background: "white",
  zIndex: 10,
  position: "absolute",
  left: 20,
  borderRadius: "50%",
  paddingBlock: "10px",
  paddingInline: "12px",
  display: "flex",
  alignItems: "center",
  fontSize: "12px",
  cursor: "pointer",
  transition: "border-radius 0.3s ease, gap 0.3s ease",

  "&:hover": {
    borderRadius: "8px",
    gap: "5px",

    ".hover-text": {
      maxWidth: "150px",
      visibility: "visible",
      transition: "max-width 0.3s ease",
    },
  },
});

export const HoverText = styled(Typography)({
  maxWidth: 0,
  visibility: "hidden",
  overflow: "hidden",
  whiteSpace: "nowrap",
  transition: "max-width 0.5s ease",
});
