import React from 'react';

import styled from 'styled-components'; 
 
const GreeterSection = styled.div`
`;

export function App() {
  return (
    <>
      <header data-cy="header"> 
        <GreeterSection><SharedGreeter /></GreeterSection>
      </header>
      <main>
           
      </main>
    </>
  );
}

export default App;
