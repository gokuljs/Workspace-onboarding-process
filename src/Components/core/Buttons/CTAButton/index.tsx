import React from "react";
import { CtaButtonWrapper } from "./styles";
import { CtaButtonProps } from "./types";

function CtaButton({
  btnText,
  handleClick = () => {},
  type = "button",
}: CtaButtonProps) {
  return (
    <CtaButtonWrapper type={type} variant="contained" onClick={handleClick}>
      {btnText?.toLowerCase()}
    </CtaButtonWrapper>
  );
}

export default CtaButton;
