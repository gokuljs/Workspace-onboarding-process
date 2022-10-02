import React, { useState } from "react";
import { ColorlibConnector, HomePageWrapper, StepIcon } from "./styles";
import { Grid } from "@mui/material";
import { IntegrationStepsProps } from "./types";
import Header from "../../Components/layout/HeaderLayout";
import Welcome from "./Steps/Welcome";
import eden from "../../assets/images/eden.png";
import Setup from "./Steps/Setup";
import Planning from "./Steps/Planning";
import CtaButton from "../../Components/core/Buttons/CTAButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import CustomSnakeBar from "../../Components/core/SnackBar";

function HomePage() {
  const [integrationStep, setIntegrationStep] = useState<IntegrationStepsProps>(
    IntegrationStepsProps.WELCOME
  );
  const [formData, setFormData] = useState<any>({});
  const [open, setOpen] = useState(false);

  const steps = ["welcome", "setup", "planning", "completed"];

  const integrationHeaderInfo = () => {
    switch (true) {
      case integrationStep === IntegrationStepsProps.WELCOME:
        return {
          header: "Welcome! First things first",
          subtext: "you can always change them Later",
        };
      case integrationStep === IntegrationStepsProps.SETUP:
        return {
          header: "Let's set up a home for all your work",
          subtext: "you can always create another workspace later",
        };
      case integrationStep === IntegrationStepsProps.PLANNING:
        return {
          header: "How are you planning to use Eden",
          subtext: "We'll streamline your setup experience accordingly",
        };

      case integrationStep === IntegrationStepsProps.COMPLETED:
        return {
          header: `Congratulations, ${formData?.displayName ?? " "}!`,
          subtext: "You have completed onboarding,you can start using Eden",
        };
      default:
        return {
          header: "",
          subtext: "",
        };
    }
  };
  const handleIntegrationSteps = () => {
    switch (true) {
      case integrationStep === IntegrationStepsProps.WELCOME:
        return (
          <Welcome
            setIntegrationStep={setIntegrationStep}
            setFormData={setFormData}
            formData={formData}
          />
        );
      case integrationStep === IntegrationStepsProps.SETUP:
        return (
          <Setup
            setIntegrationStep={setIntegrationStep}
            setFormData={setFormData}
            formData={formData}
          />
        );
      case integrationStep === IntegrationStepsProps.PLANNING:
        return (
          <Planning
            setIntegrationStep={setIntegrationStep}
            setFormData={setFormData}
            formData={formData}
          />
        );
      case integrationStep === IntegrationStepsProps.COMPLETED:
        return (
          <CtaButton btnText="Launch Eden" handleClick={() => setOpen(true)} />
        );
      default:
        return <></>;
    }
  };
  return (
    <HomePageWrapper container xs={12}>
      <Grid
        item
        xs={12}
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <img className="eden-logo" src={eden} alt="edn"></img>
      </Grid>
      <Grid
        container
        xs={12}
        display="flex"
        justifyContent="center"
        alignContent="center"
      >
        <Box className="stepperContainer">
          <Stepper
            activeStep={integrationStep + 1}
            alternativeLabel
            connector={<ColorlibConnector />}
          >
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  icon={
                    <StepIcon
                      completed={index <= integrationStep ? true : false}
                    >
                      <p>{index + 1}</p>
                    </StepIcon>
                  }
                />
              </Step>
            ))}
          </Stepper>
        </Box>
      </Grid>
      {integrationStep === IntegrationStepsProps.COMPLETED && (
        <Grid
          container
          xs={12}
          display="flex"
          justifyContent="center"
          alignContent="center"
        >
          <CheckCircleIcon className="celebration-icon" />
        </Grid>
      )}
      <Grid container xs={12}>
        <Header
          heading={integrationHeaderInfo()?.header}
          subtext={integrationHeaderInfo()?.subtext}
        />
      </Grid>
      <Grid
        container
        xs={12}
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignContent="center"
      >
        {handleIntegrationSteps()}
      </Grid>
      <CustomSnakeBar
        message="onBoarding setup successful 🚀"
        open={open}
        setOpen={setOpen}
        type="success"
      />
    </HomePageWrapper>
  );
}

export default HomePage;
