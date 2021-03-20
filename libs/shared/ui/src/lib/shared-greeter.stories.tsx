import { text } from '@storybook/addon-knobs';
import React from 'react';
import { SharedGreeter, SharedGreeterProps } from './shared-greeter';

export default {
  component: SharedGreeter,
  title: 'SharedGreeter',
};

export const primary = () => {
  const props: SharedGreeterProps = {
    name: text('name', ''),
  };

  return <SharedGreeter name={props.name} />;
};
