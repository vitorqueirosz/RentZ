import React, { useCallback, useRef, useState } from 'react';
import { TextInputProps } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
  icon?: string;
  isPassword?: boolean;
  name?: string;
  value: any;
}

const Input: React.FC<InputProps> = ({ icon, isPassword, value, ...rest }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const inputElementRef = useRef<any>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!value);
  }, [value]);

  return (
    <Container isFocused={isFocused} isFilled={isFilled}>
      <Icon
        name={icon}
        size={20}
        color={isFocused || isFilled ? '#FFC700' : '#848484'}
      />
      <TextInput
        isFocused={isFocused}
        isFilled={isFilled}
        ref={inputElementRef}
        placeholderTextColor="#848484"
        {...rest}
        secureTextEntry={!!(isPassword && !showPassword)}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        keyboardAppearance="dark"
        value={value}
      />

      {isPassword &&
        (showPassword ? (
          <Feather
            name="eye"
            size={20}
            color={isFocused || isFilled ? '#FFC700' : '#848484'}
            onPress={() => setShowPassword(!showPassword)}
            className="iconEnd"
          />
        ) : (
          <Feather
            name="eye-off"
            size={20}
            color={isFocused || isFilled ? '#FFC700' : '#848484'}
            onPress={() => setShowPassword(!showPassword)}
            className="iconEnd"
          />
        ))}
    </Container>
  );
};

export default Input;
