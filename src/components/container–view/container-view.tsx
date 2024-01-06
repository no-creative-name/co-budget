import React, { FC } from "react";
import { ScrollView, ViewProps } from "react-native";
import style from './container-view.module.css';

export const ContainerView: FC<ViewProps> = ({ children }) => {
    return <ScrollView contentContainerStyle={style.containerView}>{children}</ScrollView>;
}