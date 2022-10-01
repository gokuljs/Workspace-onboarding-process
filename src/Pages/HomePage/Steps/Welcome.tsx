import React, { Dispatch } from "react";
import {
  CustomInput,
  GridAlignMent,
  InputContainer,
  InPutArea,
} from "./styles";
import CtaButton from "../../../Components/core/ctaButton";
import { EdenIntegrationSteps } from "../types";

function Welcome({
  setEdenIntegrationStep,
}: {
  setEdenIntegrationStep: Dispatch<EdenIntegrationSteps>;
}) {
  return (
    <InPutArea xs={12} container>
      <GridAlignMent container justifyContent="flex-start" minHeight="10rem">
        <InputContainer>
          <p className="label">full name</p>
          <CustomInput placeholder="steve jobs" />
        </InputContainer>
        <InputContainer>
          <p className="label">display name</p>
          <CustomInput placeholder="steve" />
        </InputContainer>
      </GridAlignMent>
      <GridAlignMent container justifyContent="center">
        <CtaButton
          btnText="create workSpace"
          handleClick={() => setEdenIntegrationStep(EdenIntegrationSteps.SETUP)}
        />
      </GridAlignMent>
    </InPutArea>
  );
}

export default Welcome;
