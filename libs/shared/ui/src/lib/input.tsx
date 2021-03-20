import React from 'react';
import styled from 'styled-components';

const CustomInput = styled.input`
    border-radius: 10px;
    border-color: red;
`;

export interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ onChange }: InputProps) => {
  return <CustomInput data-cy="input" onChange={onChange} />
};

export default Input;