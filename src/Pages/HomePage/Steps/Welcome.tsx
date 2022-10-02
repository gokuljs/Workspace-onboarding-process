import React, { Dispatch } from "react";
import {
  CustomInput,
  GridAlignMent,
  InputContainer,
  InPutArea,
  CustomForm,
  ErrorText,
} from "./styles";
import CtaButton from "../../../Components/core/Buttons/CTAButton";
import { IntegrationStepsProps } from "../types";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function Welcome({
  setIntegrationStep,
  setFormData,
  formData,
}: {
  setIntegrationStep: Dispatch<IntegrationStepsProps>;
  setFormData: Dispatch<any>;
  formData: any;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => {
    setFormData({ ...formData, ...data });
    setIntegrationStep(IntegrationStepsProps.SETUP);
  };
  // console.log({ formState }, "ssss");

  return (
    <InPutArea container xs={12}>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <GridAlignMent container justifyContent="flex-start" minHeight="10rem">
          <InputContainer>
            <p className="label">full name</p>
            <CustomInput
              placeholder="steve jobs"
              {...register("fullName", {
                required: "Please enter you fullName",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="fullName"
              render={({ message }) => <ErrorText>{message}</ErrorText>}
            />
          </InputContainer>
          <InputContainer>
            <p className="label">display name</p>
            <CustomInput
              placeholder="steve"
              {...register("displayName", {
                required: "Please enter you display name",
              })}
            />
            <ErrorMessage
              errors={errors}
              name="displayName"
              render={({ message }) => <ErrorText>{message}</ErrorText>}
            />
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
