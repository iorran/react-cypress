import React from 'react';
import styled from 'styled-components';

const CustomInput = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 3px;
    border: none;
    background-color: #3f3c3c;
    color: #fff;
`;

export interface InputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ onChange }: InputProps) => {
  return <CustomInput onChange={onChange} />
};

export default Input;