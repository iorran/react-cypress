import { array } from '@storybook/addon-knobs';
import React from 'react';
import { List, ListProps } from './list';

export default {
  component: List,
  title: 'List'
};

export const primary = () => {
  const ListProps: ListProps = {
    todos: array('Todo', [])
  };

  return <List todos={ListProps.todos} />;
};