import React from 'react';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

const IconBtn = styled.button`
  cursor: pointer;
  background: white;
  color: ${(props) => (props.themeColor ? props.themeColor : 'black')};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 5px;
`;

const IconButton = ({ editBtn, delBtn, onClick, title }) => {
  library.add(faEdit, faTrash);
  return (
    <Wrapper>
      <IconBtn
        onClick={onClick}
        title={title}
        themeColor={editBtn ? 'blue' : 'red'}
      >
        {editBtn ? (
          <FontAwesomeIcon icon='edit' />
        ) : (
          <FontAwesomeIcon icon='trash' />
        )}
      </IconBtn>
    </Wrapper>
  );
};
export default IconButton;
