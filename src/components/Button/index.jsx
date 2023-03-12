import React from 'react';
import styled from 'styled-components';

const Touchable = styled.Pressable`
  width: 100%;
  padding: 14px 20px;
  background-color: ${props => props.theme[props.variant]};
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const Button = props => {
  const {label, pressHandler, variant = 'primary'} = props;

  return (
    <Touchable onPress={pressHandler} variant={variant}>
      <Label>{label}</Label>
    </Touchable>
  );
};
