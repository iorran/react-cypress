import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const CustomInput = styled.input`
    width: 100%;
    height: 50px;
    border-radius: 3px;
    border: none;
    background-color: #3f3c3c;
    color: #fff;
`;

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: InputProps) => {
  return <CustomInput {...props} />
};

export default Input;