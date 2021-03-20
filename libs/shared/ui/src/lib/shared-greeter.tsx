import React from 'react';
import styled from 'styled-components';

const Container = styled.div` 
    width: 100%; 
    color: #FFF;
`; 

export interface SharedGreeterProps {
  personName: string;
}

export const SharedGreeter = (props: SharedGreeterProps) => {
  return (
    <Container>
      <h1 data-testid="greeting">Hi there, {props.personName}! How's your day?</h1>
    </Container>
  );
};

export default SharedGreeter;