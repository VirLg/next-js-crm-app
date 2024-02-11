'use client';
import React from 'react';

export interface ButtonProps {
  disabled?: false;
}

const Button = ({ disabled, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className={`py-2.5 px-5 bg-gray-900 text-zinc-50 text-content font-medium rounded
   ${!disabled ? 'hover:bg-gray-700 active:bg-gray-950 ' : 'text-zinc-400'}`}
    >
      Button
    </button>
  );
};

export default Button;

export const About = () => {
  return <div>About</div>;
};
