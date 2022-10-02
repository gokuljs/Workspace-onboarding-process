import React, { Dispatch } from "react";
import CtaButton from "../../../Components/core/Buttons/CTAButton";
import { EdenIntegrationSteps } from "../types";
import {
  CustomInput,
  GridAlignMent,
  InputContainer,
  InPutArea,
  UrlCustomInput,
  CustomForm,
} from "./styles";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";

function Setup({
  setEdenIntegrationStep,
  setEdenFormData,
  edenFormData,
}: {
  setEdenIntegrationStep: Dispatch<EdenIntegrationSteps>;
  setEdenFormData: Dispatch<any>;
  edenFormData: any;
}) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    setEdenFormData({ ...edenFormData, ...data });
    setEdenIntegrationStep(EdenIntegrationSteps.PLANNING);
  };

  return (
    <InPutArea lg={12} container>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <GridAlignMent container justifyContent="flex-start" minHeight="10rem">
          <InputContainer>
            <p className="label">Workspace Name</p>
            <CustomInput placeholder="Eden" {...register("workSpaceUrl")} />
          </InputContainer>
          <InputContainer>
            <p className="label">
              Workspace Url <span className="optional">(optional)</span>
            </p>
            <UrlCustomInput>
              <Grid container className="urlExample">
                www.eden.com/
              </Grid>
              <CustomInput placeholder="Example" {...register("url")} />
            </UrlCustomInput>
          </InputContainer>
        </GridAlignMent>
        <GridAlignMent container justifyContent="center">
          <CtaButton type="submit" btnText="create workSpace" />
        </GridAlignMent>
      </CustomForm>
    </InPutArea>
  );
}

export default Setup;
