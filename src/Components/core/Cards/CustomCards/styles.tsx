import { styled, Grid } from "@mui/material";
export const CustomCArdWrapper = styled(Grid)(
  ({ selected }: { selected?: boolean }) => ({
    display: "flex ",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    border: selected ? "1px solid #6c2be2" : "1px solid #cacfd6",
    width: " 9rem",
    minHeight: "8rem",
    marginRight: "1rem",
    padding: "0.5rem",
    borderRadius: "8px",
    transition: "all 0.1s ease-in-out",
    ".header": {
      fontSize: "1rem",
      fontFamily: "Inter,sans-serif ",
    },
    ".subtext": {
      fontSize: "0.8rem",
      color: "#98A2B3",
      wordBreak: "keep-all",
      fontFamily: "Inter,sans-serif ",
    },
    ".avatar": {
      color: selected ? "#6c2be2" : "default",
    },
    ":hover": {
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
  })
);
