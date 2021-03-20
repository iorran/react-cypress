import React from 'react';
import styled from 'styled-components';

const ListStyled = styled.div` 
    width: 100%;
    padding: 8px;
    color: #FFF;
`; 

const ListItemStyled = styled.div` 
    padding: 8px;
    margin: 8px;
    background-color: #3f3c3c;
`; 

export interface ListProps {
  todos: string[]
}

export const List = ({ todos }: ListProps) => {
  return (
    <ListStyled data-testid="todo-list">
        {todos.map(todo => 
            <ListItemStyled 
                key={todo} 
                data-testid="todo-item">
                    {todo}
            </ListItemStyled>
        )}
    </ListStyled>
  )
};

export default List;