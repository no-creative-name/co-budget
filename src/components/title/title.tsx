import { FC } from "react";
import { Text, TextProps } from "react-native";
import style from './title.module.css';

type TitleProps = TextProps & {
  level: 1 | 2;
};

export const Title: FC<TitleProps> = ({children, level, ...props}) => {
  return <Text style={{
    ...style.title,
    ...(level === 1 ? style['size-1'] : style['size-2'])
  }} {...props}>{children}</Text>
}