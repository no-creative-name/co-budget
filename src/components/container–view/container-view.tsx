import React, { FC } from "react";
import { ScrollView, ScrollViewProps } from "react-native";
import style from './container-view.module.css';

export const ContainerView: FC<ScrollViewProps> = ({ style: originalStyle, children, ...props }) => {
    return <ScrollView contentContainerStyle={{
      ...style.containerView,
      ...originalStyle as any,
    }} {...props}>{children}</ScrollView>;
}