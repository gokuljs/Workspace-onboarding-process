import React from "react";
import { HeaderLayoutWrapper } from "./styles";
import { HeaderProps } from "./types";

function Header({ heading, subtext }: HeaderProps) {
  return (
    <HeaderLayoutWrapper container xs={12}>
      <h1 className="header">{heading}</h1>
      <p className="subtext">{subtext}</p>
    </HeaderLayoutWrapper>
  );
}

export default Header;
