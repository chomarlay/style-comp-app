import React, { useState } from 'react';
import './App.css';
import Button from './Styled-Components/Button';
import Heading1 from './Styled-Components/Heading1';
import Wrapper from './Styled-Components/Wrapper';

function App() {
  const [txt, setTxt] = useState(' B E A R ');
  const [toggleFlg, setToggleFlg] = useState(1);
  const click1 = () => {
    if (toggleFlg) {
      setTxt('Believe Effort Action Result');
      setToggleFlg(0);
    } else {
      setTxt(' B E A R ');
      setToggleFlg(1);
    }
  };
  return (
    <Wrapper>
      <Heading1>Styled Components - {txt}</Heading1>
      <Button onClick={click1}>No Plan B</Button>
    </Wrapper>
  );
}

export default App;
