import React, { useState } from "react";
import { HomePageWrapper } from "./styles";
import { Grid } from "@mui/material";
import { EdenIntegrationSteps } from "./types";
import Header from "../../Components/layout/HeaderLayout";
import Welcome from "./Steps/Welcome";
import eden from "../../assets/images/eden.png";
import Setup from "./Steps/Setup";
import Planning from "./Steps/Planning";
import CtaButton from "../../Components/core/ctaButton";

function HomePage() {
  const [edenIntegrationStep, setEdenIntegrationStep] =
    useState<EdenIntegrationSteps>(EdenIntegrationSteps.WELCOME);

  const handleEdenIntegrationHeader = () => {
    switch (true) {
      case edenIntegrationStep === EdenIntegrationSteps.WELCOME:
        return {
          header: "Welcome! First things first",
          subtext: "you can always change them Later",
        };
      case edenIntegrationStep === EdenIntegrationSteps.SETUP:
        return {
          header: "Let's set up a home for all your work",
          subtext: "you can always create another workspace later",
        };
      case edenIntegrationStep === EdenIntegrationSteps.PLANNING:
        return {
          header: "How are you planning to use Eden",
          subtext: "We'll streamline your setup experience accordingly",
        };

      case edenIntegrationStep === EdenIntegrationSteps.COMPLETED:
        return {
          header: "Congratulations, Eren!",
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
      case edenIntegrationStep === EdenIntegrationSteps.WELCOME:
        return <Welcome setEdenIntegrationStep={setEdenIntegrationStep} />;
      case edenIntegrationStep === EdenIntegrationSteps.SETUP:
        return <Setup setEdenIntegrationStep={setEdenIntegrationStep} />;
      case edenIntegrationStep === EdenIntegrationSteps.PLANNING:
        return <Planning setEdenIntegrationStep={setEdenIntegrationStep} />;
      case edenIntegrationStep === EdenIntegrationSteps.COMPLETED:
        return <CtaButton btnText="Launch Eden" />;
      default:
        return <></>;
    }
  };
  console.log({ edenIntegrationStep }, "ssss");
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
      <Grid item xs={12}></Grid>
      <Grid container xs={12}>
        <Header
          heading={handleEdenIntegrationHeader()?.header}
          subtext={handleEdenIntegrationHeader()?.subtext}
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
    </HomePageWrapper>
  );
}

export default HomePage;
