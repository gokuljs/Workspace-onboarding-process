import React, { Dispatch } from "react";
import CtaButton from "../../../Components/core/Buttons/CTAButton";
import { IntegrationStepsProps } from "../types";
import {
  CustomInput,
  GridAlignMent,
  InputContainer,
  InPutArea,
  UrlCustomInput,
  CustomForm,
  ErrorText,
} from "./styles";
import { Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

function Setup({
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
    setIntegrationStep(IntegrationStepsProps.PLANNING);
  };

  return (
    <InPutArea lg={12} container>
      <CustomForm onSubmit={handleSubmit(onSubmit)}>
        <GridAlignMent container justifyContent="flex-start" minHeight="10rem">
          <InputContainer>
            <p className="label">Workspace Name</p>
            <CustomInput
              placeholder="Eden"
              {...register("workSpaceUrl", {
                required: "please Enter your workSpace Url",
              })}
            />
          </InputContainer>
          <ErrorMessage
            errors={errors}
            name="workSpaceUrl"
            render={({ message }) => <ErrorText>{message}</ErrorText>}
          />
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
        <GridAlignMent container justifyContent="center" py={5}>
          <CtaButton type="submit" btnText="create workSpace" />
        </GridAlignMent>
      </CustomForm>
    </InPutArea>
  );
}

export default Setup;
