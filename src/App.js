import React, { useState } from 'react';
import './App.css';
import Button from './Styled-Components/Button';
import IconButton from './Styled-Components/IconButton';
import Title from './Styled-Components/Title';
import Subtitle from './Styled-Components/Subtitle';
import Wrapper from './Styled-Components/Wrapper';
import TextField from './Styled-Components/TextField';
import EmailField from './Styled-Components/EmailField';
import NumberField from './Styled-Components/NumberField';
import DateField from './Styled-Components/DateField';
import FormContainer from './Styled-Components/FormContainer';

function App() {
  const [txt, setTxt] = useState(' B E A R ');
  const [toggleFlg, setToggleFlg] = useState(1);
  const [details, setDetails] = useState({
    name: '',
    email: '',
    warranty: 0,
    purchaseDate: null,
  });

  const click1 = () => {
    if (toggleFlg) {
      setTxt('Believe Effort Action Result');
      setToggleFlg(0);
    } else {
      setTxt(' B E A R ');
      setToggleFlg(1);
    }
  };

  const onChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  return (
    <Wrapper>
      <Title>No Plan B</Title>
      <Subtitle>{txt}</Subtitle>
      <Button onClick={click1}>No Plan B</Button>
      <IconButton editBtn onClick={click1} title='Edit'></IconButton>
      <IconButton deleteBtn onClick={click1} title='Delete'></IconButton>

      <Subtitle>
        {details.name} - {details.email} - {details.warranty} -{' '}
        {details.purchaseDate}
      </Subtitle>
      <FormContainer>
        <TextField
          id='name'
          name='name'
          label='Name'
          onChange={onChange}
          value={details.name}
          placeholder='No PlanB'
        />
        <EmailField
          id='email'
          name='email'
          label='Email'
          value={details.email}
          onChange={onChange}
          placeholder='eg. noplanB@noPlanB.com'
        />
        <NumberField
          id='warranty'
          name='warranty'
          label='Warranty'
          value={details.warranty}
          min='0'
          max='24'
          onChange={onChange}
        />
        <DateField
          id='purchaseDate'
          name='purchaseDate'
          label='Purchase Date'
          value={details.purchaseDate}
          onChange={onChange}
        />
      </FormContainer>
    </Wrapper>
  );
}

export default App;
