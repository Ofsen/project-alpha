import React from 'react';
import styled from 'styled-components';

export const UserLayout = props => {
  const {children, title} = props;
  return (
    <Container>
      <TextHeader>{title}</TextHeader>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

const TextHeader = styled.Text`
  font-size: 32px;
  font-weight: 900;
  color: ${({theme}) => theme.color};
`;

const ContentContainer = styled.View`
  flex: 1;
  margin-top: 16px;
  gap: 16px;
`;
