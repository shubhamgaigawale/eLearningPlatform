import React from "react";
import MuiButton from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

export type ButtonVariant = "text" | "contained" | "outlined" | undefined;
export type ButtonFontSize = "small" | "large" | "medium" | undefined;
export type ButtonFontWeight = "normal" | "medium" | "bold";

export interface ButtonProps {
  disabled: boolean;
  variant: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
  size?: ButtonFontSize;
}

const Button = (props: ButtonProps) => {
  return (
    <MuiButton
      variant={props.variant || "contained"}
      disabled={props.disabled}
      style={props.style}
      onClick={props.onClick}
      endIcon={<SendIcon />}
      size={props.size || "medium"}
    >
      <div className="dpc-button__text">{props.children}</div>
    </MuiButton>
  );
};

export default Button;
