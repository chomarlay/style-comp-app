import React, { useState } from 'react';
import './App.css';
import Button from './Styled-Components/Button';
import Heading1 from './Styled-Components/Heading1';
import Wrapper from './Styled-Components/Wrapper';

function App() {
  const [txt, setTxt] = useState(' B E A R ');
  const click1 = () => {
    setTxt('no matter what');
  };
  return (
    <Wrapper>
      <Heading1>Styled Components Testing Ground {txt}</Heading1>
      <Button onClick={click1}>No Plan B</Button>
    </Wrapper>
  );
}

export default App;
