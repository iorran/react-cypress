import React, { useState } from 'react';
import styled from 'styled-components';

import { SharedGreeter, Input, List, Button } from '@mynxworkspace/shared/ui';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #000;  
    padding: 8px;
`;

const Message = styled.div`
  color: #FFF;
`;

export function App() {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<string[]>([]);
  const [message, setMessage] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
    setMessage('');
  }

  const handleOnClick = () => {
    if(todo.length === 0) {
      setMessage('You can not add an empty todo')
    } else {
      setTodos((todos) => [...todos, todo]);
    }
  }

  return (
    <Container> 
      <SharedGreeter personName="Mate" /> 
      <Input 
        value={todo}
        onChange={handleOnChange} 
      />
      <Message>{message}</Message>
      {todos.length && <List todos={todos} />}
      <Button onClick={handleOnClick}>Save</Button>
    </Container>
  );
}

export default App;
