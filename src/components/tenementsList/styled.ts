import { Box, styled } from "@mui/material";

export const TenementsListWrapper = styled(Box)({
  width: "50%",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "32px",
  maxHeight: "calc(100dvh - 84px)",
  height: "100%",
  overflowY: "scroll",
});
