import React from "react";
import { CtaButtonWrapper } from "./styles";
import { CtaButtonProps } from "./types";

function CtaButton({ btnText, handleClick }: CtaButtonProps) {
  return (
    <CtaButtonWrapper variant="contained" onClick={handleClick}>
      {btnText?.toLowerCase()}
    </CtaButtonWrapper>
  );
}

export default CtaButton;
