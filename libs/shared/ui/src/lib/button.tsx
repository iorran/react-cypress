import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

const CustomButton = styled.button`
    height: 50px;
    width: 150px;
    border-radius: 3px;
    border: none;
    background-color: #3f3c3c;
    color: #fff;
`;

export type ButtonProps = InputHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, onClick }: ButtonProps) => {
  return <CustomButton onClick={onClick}>{children}</CustomButton>
};

export default Button;