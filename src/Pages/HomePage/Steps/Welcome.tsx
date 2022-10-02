import React, { Dispatch } from "react";
import {
  CustomInput,
  GridAlignMent,
  InputContainer,
  InPutArea,
  CustomForm,
} from "./styles";
import CtaButton from "../../../Components/core/Buttons/CTAButton";
import { EdenIntegrationSteps } from "../types";
import { useForm } from "react-hook-form";

function Welcome({
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
    setEdenIntegrationStep(EdenIntegrationSteps.SETUP);
  };

  return (
    <InPutArea container xs={12}>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <GridAlignMent container justifyContent="flex-start" minHeight="10rem">
          <InputContainer>
            <p className="label">full name</p>
            <CustomInput placeholder="steve jobs" {...register("fullName")} />
          </InputContainer>
          <InputContainer>
            <p className="label">display name</p>
            <CustomInput placeholder="steve" {...register("displayName")} />
          </InputContainer>
        </GridAlignMent>
        <GridAlignMent container justifyContent="center" py={5}>
          <CtaButton type="submit" btnText="create workSpace" />
        </GridAlignMent>
      </CustomForm>
    </InPutArea>
  );
}

export default Welcome;
