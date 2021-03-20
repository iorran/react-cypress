import React from 'react';

import styled from 'styled-components'; 
 
const GreeterMessage = styled.h1`

`;

export function App() {
  return (
    <>
      <header className="flex"> 
        <GreeterMessage>Welcome to todo!</GreeterMessage>
      </header>
      <main>
           
      </main>
    </>
  );
}

export default App;
