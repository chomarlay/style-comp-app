import React, { useState } from 'react';
import './App.css';
import Button from './Styled-Components/Button';
import IconButton from './Styled-Components/IconButton';
import Title from './Styled-Components/Title';
import Subtitle from './Styled-Components/Subtitle';
import Wrapper from './Styled-Components/Wrapper';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons';

function App() {
  // library.add(faCheckSquare, faCoffee);
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
      <Title>No Plan B</Title>
      <Subtitle>{txt}</Subtitle>
      <Button onClick={click1}>No Plan B</Button>
      <IconButton editBtn onClick={click1} title='Edit'></IconButton>
      <IconButton deleteBtn onClick={click1} title='Delete'></IconButton>
    </Wrapper>
  );
}

export default App;
