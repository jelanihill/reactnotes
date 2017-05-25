import React from 'react';
import { Button } from 'react-bootstrap';

import '../styles/delete-button.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

const DeleteButton = ({ onDeleteItem, id }) => (
  <Button bsStyle="danger" id="right" onClick={() => onDeleteItem(id)}>
    <i className="fa fa-trash" aria-hidden="true" />
  </Button>
);

export default DeleteButton;
