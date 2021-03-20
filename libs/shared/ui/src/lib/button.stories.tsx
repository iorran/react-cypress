import { text } from '@storybook/addon-knobs';
import React from 'react';
import { Button, ButtonProps } from './button';

export default {
  component: Button,
  title: 'Button'
};

export const primary = () => {
  const ButtonProps: ButtonProps = {
    onClick: () => {
      console.log(1)
    },
    children: text('Title', 'Save')
  };

  return <Button onClick={ButtonProps.onClick}>{ButtonProps.children}</Button>;
};