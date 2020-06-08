import React from 'react';
import Input from './Input';
import Label from './Label';
import FieldWrapper from './FieldWrapper';

const TextField = ({ id, name, label, placeholder, value, onChange }) => {
  return (
    <FieldWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type='text'
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        width='15%'
      />
    </FieldWrapper>
  );
};

export default TextField;
