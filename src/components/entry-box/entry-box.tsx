import { FC, ReactNode } from "react";
import { View } from "react-native";
import style from './entry-box.module.css';

export const EntryBox: FC<{
  children: ReactNode;
}> = ({
  children
}) => {
  return <View style={style.entryBox}>{children}</View>;
}