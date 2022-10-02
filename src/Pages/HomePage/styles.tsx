import {
  styled,
  Grid,
  stepConnectorClasses,
  StepConnector,
} from "@mui/material";
export const HomePageWrapper = styled(Grid)`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 1.25rem 0.725rem;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .stepperContainer {
    margin: 2rem 0rem;
    width: 60%;
  }
`;

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 12,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(90deg, rgba(120,74,244,1) 10%, rgba(120,74,244,1) 48%, rgba(234,234,240,1) 48%, rgba(234,234,240,1) 67%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        "linear-gradient(90deg, rgba(120,74,244,1) 10%, rgba(120,74,244,1) 48%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderRadius: 1,
  },
}));
