import { InputProps, SxProps, TextField, TextFieldProps } from "@mui/material";

export interface InputFieldProps {
  sx?: SxProps;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  placeholder?: string;
  inputProps?: InputProps;
}
export const InputField = ({
  sx,
  onChange,
  value,
  placeholder,
  inputProps,
}: InputFieldProps) => {
  return (
    <TextField
      sx={sx}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      InputProps={inputProps}
    />
  );
};
