import { SxProps, Typography } from "@mui/material";

export interface TypographyProps {
  sx?: SxProps;
  children?: string | number;
  variant?: "h1" | "h2" | "body1" | "body2";
}

export const TypographyComponent = ({
  sx,
  children,
  variant,
}: TypographyProps) => {
  return (
    <Typography sx={sx} variant={variant}>
      {children}
    </Typography>
  );
};
