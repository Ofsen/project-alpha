import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

export const Event = props => {
  const {title, leadText, dateStart, dateEnd, coverUrl, tags} = props;
  return (
    <ViewContainer>
      <HeaderContainer>
        <CoverImage source={{uri: coverUrl, height: 200}} />
      </HeaderContainer>
      <ContentContainer>
        <Title>{title}</Title>
        <LeadingText>{leadText}</LeadingText>
        <DateContainer>
          <Date>
            Du {moment(dateStart).format('DD-MM-YYYY')} au{' '}
            {moment(dateEnd).format('DD-MM-YYYY')}
          </Date>
        </DateContainer>
      </ContentContainer>
    </ViewContainer>
  );
};

const ViewContainer = styled.View`
  background-color: white;
  width: 100%;
  margin-bottom: 16px;
`;

const HeaderContainer = styled.View`
  width: 100%;
  height: 200px;
`;

const CoverImage = styled.Image`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ContentContainer = styled.View`
  gap: 8px;
  width: 100%;
  padding: 16px;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({theme}) => theme.primary};
`;

const LeadingText = styled.Text`
  font-size: 16px;
  color: ${({theme}) => theme.color};
`;

const DateContainer = styled.View`
  justify-content: flex-end;
  align-items: flex-end;
`;

const Date = styled.Text`
  font-size: 14px;
  color: ${({theme}) => theme.color};
`;
