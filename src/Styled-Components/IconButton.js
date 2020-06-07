import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Button from './Button';

const IconButton = ({ editBtn, delBtn, onClick, title }) => {
  library.add(faEdit, faTrash);
  return (
    <Button
      onClick={onClick}
      title={title}
      themeColor={editBtn ? 'blue' : 'red'}
    >
      {editBtn ? (
        <FontAwesomeIcon icon='edit' />
      ) : (
        <FontAwesomeIcon icon='trash' />
      )}
    </Button>
  );
};
export default IconButton;
