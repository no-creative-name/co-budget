import React, { FC } from "react";
import { SafeAreaView, ScrollView, ScrollViewProps } from "react-native";
import style from './container-view.module.css';

export const ContainerView: FC<ScrollViewProps & {
  type?: 'safe-area' | 'scroll-view';
}> = ({ style: originalStyle, type, children, ...props }) => {
  switch (type) {
    case 'safe-area':
      return <SafeAreaView style={{
        ...style.containerView,
        ...originalStyle as any,
      }} {...props}>{children}</SafeAreaView>;

    case 'scroll-view':
      return <ScrollView contentContainerStyle={{
        ...style.containerView,
        ...originalStyle as any,
      }} {...props}>{children}</ScrollView>;

    default:
      return <SafeAreaView style={{
        ...style.containerView,
        ...originalStyle as any,
      }} {...props}>{children}</SafeAreaView>;
    }
  }