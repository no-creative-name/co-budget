import { forwardRef, useRef } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity } from "react-native";
import style from './input.module.css';

type InputProps = TextInputProps & {
  label: string;
}

export const Input = forwardRef<TextInput, InputProps>(({ label, ...props }, parentRef) => {
  const localRef = useRef<TextInput>(null);

  return <TouchableOpacity style={style.container} onPress={() => {
    localRef.current?.focus();
  }}>
    <Text style={style.label}>{label}</Text>
    <TextInput ref={(ref) => {
      localRef.current = ref;
      if (parentRef) {
        if (typeof parentRef === 'function') {
          parentRef(ref);
        } else {
          parentRef.current = ref;
        }
      }

    }} style={style.input} {...props} />
  </TouchableOpacity>
})