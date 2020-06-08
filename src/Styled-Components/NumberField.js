import React from 'react';
import Input from './Input';
import Label from './Label';
import FieldWrapper from './FieldWrapper';
import styled from 'styled-components';
const InputNumber = styled(Input)`
  width: 5%;
`;
const NumberField = ({
  id,
  name,
  label,
  placeholder,
  value,
  min,
  max,
  onChange,
}) => {
  return (
    <FieldWrapper>
      <Label htmlFor={id}>{label}</Label>
      <InputNumber
        type='number'
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
      />
    </FieldWrapper>
  );
};

export default NumberField;
