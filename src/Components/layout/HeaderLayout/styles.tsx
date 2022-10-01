import { styled, Grid } from "@mui/material";
export const HeaderLayoutWrapper = styled(Grid)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  padding: 0;
  .header {
    font-size: 2rem;
    margin: 0.5rem;
    font-family: sans-serif;
    text-align: center;
  }
  .subtext {
    font-size: 1.2rem;
    margin: 0.5rem;
    color: grey;
    font-family: sans-serif;
    text-align: center;
  }
`;
