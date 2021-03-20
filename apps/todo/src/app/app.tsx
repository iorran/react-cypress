import React from 'react';

import { SharedGreeter, Input, List } from '@mynxworkspace/shared/ui';

export function App() {
  return (
    <>
      <header> 
        <SharedGreeter personName="Iorran" />
      </header>
      <main>
        <Input onChange={() => {console.log(1)}} />
        <List todos={['Todo 1']} />
      </main>
    </>
  );
}

export default App;
