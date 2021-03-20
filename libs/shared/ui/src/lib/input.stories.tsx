import React from 'react';
import { Input, InputProps } from './input';

export default {
  component: Input,
  title: 'Input'
};

export const primary = () => {
  const InputProps: InputProps = {
    onChange: () => {
      console.log(1)
    },
    value: ''
  };

  return <Input onChange={InputProps.onChange} value={InputProps.value} />;
};