import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components';

const FieldContainer = styled.View`
  gap: 4px;
`;

const Input = styled.TextInput`
  border: 2px solid #353535;
  color: black;
  padding: 8px 16px;
`;

const TextField = props => {
  const {
    label,
    placeholder,
    value,
    type,
    change,
    keyboardType,
    disabled = false,
  } = props;

  return (
    <FieldContainer>
      <Text>{label}</Text>
      <Input
        placeholder={placeholder}
        value={value}
        onChangeText={change}
        keyboardType={keyboardType}
        secureTextEntry={type === 'password'}
        readOnly={disabled}
      />
    </FieldContainer>
  );
};

export default TextField;
