import React, { Dispatch } from "react";
import CtaButton from "../../../Components/core/ctaButton";
import { EdenIntegrationSteps } from "../types";
import {
  CustomInput,
  GridAlignMent,
  InputContainer,
  InPutArea,
  UrlCustomInput,
} from "./styles";
import { Grid } from "@mui/material";

function Setup({
  setEdenIntegrationStep,
}: {
  setEdenIntegrationStep: Dispatch<EdenIntegrationSteps>;
}) {
  return (
    <InPutArea lg={12} container>
      <GridAlignMent container justifyContent="flex-start" minHeight="10rem">
        <InputContainer>
          <p className="label">Workspace Name</p>
          <CustomInput placeholder="Eden" />
        </InputContainer>
        <InputContainer>
          <p className="label">
            Workspace Url <span className="optional">(optional)</span>
          </p>
          <UrlCustomInput>
            <Grid container className="urlExample">
              www.eden.com/
            </Grid>
            <CustomInput placeholder="Example" />
          </UrlCustomInput>
        </InputContainer>
      </GridAlignMent>
      <GridAlignMent container justifyContent="center">
        <CtaButton
          btnText="create workSpace"
          handleClick={() =>
            setEdenIntegrationStep(EdenIntegrationSteps.PLANNING)
          }
        />
      </GridAlignMent>
    </InPutArea>
  );
}

export default Setup;
