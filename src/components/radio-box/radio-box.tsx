import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { THEME } from "../../../theme";
import inputStyle from '../input/input.module.css';
import radioBoxStyle from './radio-box.module.css';

type RadioBoxProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (selectedOption: string) => void;
}

export const RadioBox: React.FC<RadioBoxProps> = ({ label, value, options, onChange }) => {
  const handleOptionPress = (option: string) => {
    onChange(option);
  };

  return (
    <View style={inputStyle.container}>
      <Text style={inputStyle.label}>{label}</Text>
      <View style={radioBoxStyle.radioBoxWrapper}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              radioBoxStyle.radioOption,
              { backgroundColor: option === value ? THEME.colors.primary : THEME.colors.white},
            ]}
            onPress={() => handleOptionPress(option)}
          >
            <Text style={[
              radioBoxStyle.radioOptionText,
              { color: option === value ? THEME.colors.white : THEME.colors.primary},
            ]}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
