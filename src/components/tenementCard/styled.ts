import { Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

export const CardWrapper = styled(Box)({
  width: "100%",
  maxWidth: "380px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const DescriptionWrapper = styled(Box)({
  padding: "8px",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  overflow: "hidden",
});

export const VerifiedLine = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "12px",
});

export const VerifiedTitle = styled(Box)({
  display: "flex",
  gap: "5px",
  alignItems: "center",
  color: "#5A0CFF",
  fontWeight: "500",
});

export const VerifiedPlaceholder = styled(Box)({
  display: "block",
  height: "17px",
});

export const GrayText = styled(Typography)({
  fontSize: "12px",
  color: "#636363",
});

export const DescriptionText = styled(Typography)({
  fontSize: "15px",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  resize: "horizontal",
  overflow: "hidden",
  maxWidth: "380px",
  fontWeight: "600",
});

export const DescriptionLine = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  fontSize: "12px",
});

export const DescriptionLineItem = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "5px",
});
