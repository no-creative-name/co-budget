import React, { FC } from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import style from './entry-box.module.css';

type EntryBoxProps = TouchableOpacityProps;

export const EntryBox: FC<EntryBoxProps> = ({
  children,
  ...props
}) => {
  return <TouchableOpacity style={style.entryBox} {...props}>{children}</TouchableOpacity>;
}