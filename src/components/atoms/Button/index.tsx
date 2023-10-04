import { Button, ButtonProps as MuiButtonProps, SxProps } from "@mui/material";

export interface ButtonProps extends MuiButtonProps {
  sx?: SxProps;
  variant?: "contained" | "outlined";
  children?: string;
  onClick?: () => void;
}
export const ButtonComponent = ({ sx, variant, children }: ButtonProps) => {
  return <Button sx={sx} variant={variant} children={children} />;
};
