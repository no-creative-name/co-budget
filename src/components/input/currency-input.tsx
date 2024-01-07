import { forwardRef, useRef } from "react";
import { Text, TouchableOpacity } from "react-native";
import NativeCurrencyInput, { CurrencyInputProps as NativeCurrencyInputProps } from "react-native-currency-input";
import style from './input.module.css';

type CurrencyInputProps = NativeCurrencyInputProps & {
  label: string;
  unit: '€' | '%';
}

export const CurrencyInput = forwardRef<NativeCurrencyInput, CurrencyInputProps>(({ label, unit, ...props }, parentRef) => {
  const localRef = useRef<NativeCurrencyInput>(null);

  return <TouchableOpacity style={style.container} onPress={() => {
    localRef.current?.focus();
  }}>
    <Text style={style.label}>{label}</Text>
    <NativeCurrencyInput ref={(ref) => {
      localRef.current = ref;
      if (parentRef) {
        if (typeof parentRef === 'function') {
          parentRef(ref);
        } else {
          parentRef.current = ref;
        }
      }

    }} style={style.input} {...props} />
    <Text>{unit}</Text>
  </TouchableOpacity>
})