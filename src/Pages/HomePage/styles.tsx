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
    @media screen and (max-width: 600px) {
      width: 100%;
    }
  }
  .celebration-icon {
    font-size: 5rem;
    color: rgba(120, 74, 244, 1);
  }
`;

export const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 17,
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

export const StepIcon = styled("div")(
  ({ completed }: { completed: boolean }) => ({
    width: "2.5rem",
    height: "2.5rem",
    display: "flex",
    background: completed ? "#784af4" : "rgba(234,234,240,1) ",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "24px",
    color: completed ? "rgba(234,234,240,1) " : "black",
    fontFamily: "Inter sans-serif",
  })
);
