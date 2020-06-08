import React from 'react';
import Input from './Input';
import Label from './Label';
import FieldWrapper from './FieldWrapper';

const EmailField = ({ id, name, label, placeholder, value, onChange }) => {
  return (
    <FieldWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type='email'
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </FieldWrapper>
  );
};

export default EmailField;
