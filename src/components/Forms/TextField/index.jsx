import React from 'react';
import styled, {useTheme} from 'styled-components';

const FieldContainer = styled.View`
  gap: 4px;
`;

const Input = styled.TextInput`
  border: 2px solid ${({theme}) => theme.color};
  color: ${({theme}) => theme.color};
  padding: 8px 16px;
`;

const Text = styled.Text`
  color: ${({theme}) => theme.color};
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
  const theme = useTheme();

  return (
    <FieldContainer>
      <Text>{label}</Text>
      <Input
        placeholderTextColor={'#999'}
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
