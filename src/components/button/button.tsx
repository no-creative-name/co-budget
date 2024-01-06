import { FC } from "react";
import { Button as NativeButton, ButtonProps as NativeButtonProps } from "react-native";
import { THEME } from "../../../theme";

type ButtonProps = NativeButtonProps & {
  variant: 'primary' | 'secondary';
};
  

export const Button: FC<ButtonProps> = ({ variant, ...props }) => {
  return <NativeButton color={variant === 'primary' ? THEME.colors.primary : THEME.colors.secondary} {...props}/>;
};