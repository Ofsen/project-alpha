import React from 'react';
import styled from 'styled-components';

const Touchable = styled.TouchableOpacity`
  width: 100%;
  padding: 14px 20px;
  background-color: #0e4faf;
`;

const Label = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-align: center;
`;

export const Button = props => {
  const {label, pressHandler} = props;

  return (
    <Touchable onPress={pressHandler}>
      <Label>{label}</Label>
    </Touchable>
  );
};
