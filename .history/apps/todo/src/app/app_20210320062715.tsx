import React from 'react';

import { SharedGreeter } from '@mynxworkspace/shared/ui';

import styled from 'styled-components'; 
 
const GreeterSection = styled.div`
`;

export function App() {
  return (
    <>
      <header data-cy="header"> 
        <GreeterSection><SharedGreeter name="Iorran" /></GreeterSection>
      </header>
      <main>
           
      </main>
    </>
  );
}

export default App;
