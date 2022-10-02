import { styled, Button } from "@mui/material";
export const CtaButtonWrapper = styled(Button)`
  background: green;
  padding: 0.725rem 1rem;
  background-color: #6c2be2;
  color: #fff;
  width: 40%;
  text-transform: capitalize;
  font-size: 1rem;
  transition: 0.3s all ease-in-out;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  :hover {
    color: #6c2be2;
    background-color: #fff;
    border: 1px solid #6c2be2;
  }
`;
