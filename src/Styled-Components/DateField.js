import React from 'react';
import Input from './Input';
import Label from './Label';
import FieldWrapper from './FieldWrapper';
import styled from 'styled-components';
const InputDate = styled(Input)`
  width: 10%;
`;
const DateField = ({
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
      <InputDate
        type='date'
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FieldWrapper>
  );
};

export default DateField;
