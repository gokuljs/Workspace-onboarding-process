import { Dispatch } from "react";

export type SnackBarProps = {
  message?: string;
  type: "success" | "error" | "warning" | "info";
  open: boolean;
  setOpen: Dispatch<boolean>;
};
