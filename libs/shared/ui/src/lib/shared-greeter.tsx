import React from 'react';

export interface SharedGreeterProps {
  personName: string;
}

export const SharedGreeter = (props: SharedGreeterProps) => {
  return (
    <div>
      <h1 data-cy="greeting">Hi there, {props.personName}! How's your day?</h1>
    </div>
  );
};

export default SharedGreeter;