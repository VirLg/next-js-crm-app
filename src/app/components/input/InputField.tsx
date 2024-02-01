import React from 'react';

export interface InputLabelProps {
  label?: string;
  id?: string;
}

const InputField = ({ label, id, ...rest }: InputLabelProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className={`mb-2 text-base color-gray-900`}>
          {label}
        </label>
      )}
    </div>
  );
};
export default InputField;
