import React from 'react';
import styled from 'styled-components';

export const Character = props => {
  const {name} = props;
  return (
    <ViewContainer>
      <TextHeader>{name}</TextHeader>
    </ViewContainer>
  );
};

const ViewContainer = styled.View`
  width: 100%;
  padding: 16px 24px;
`;

const TextHeader = styled.Text`
  font-size: 16px;
  font-weight: 900;
`;
