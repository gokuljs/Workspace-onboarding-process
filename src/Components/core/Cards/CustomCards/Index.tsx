import React from "react";
import { CustomCArdWrapper } from "./styles";
import { CustomCardProps } from "./types";

function CustomCard({
  selected = false,
  handleClick,
  avatar,
  header,
  subtext,
}: CustomCardProps) {
  return (
    <CustomCArdWrapper item onClick={handleClick} selected={selected}>
      {avatar}
      {header && <h1 className="header">{header}</h1>}
      {subtext && <p className="subtext">{subtext}</p>}
    </CustomCArdWrapper>
  );
}

export default CustomCard;
