import React from 'react';
import { Button } from 'react-bootstrap';

const Task = ({ content, id, onDeleteTask }) => (
  <div>
    <div>{content}</div>
    <Button
      bsStyle="danger"
      onClick={() => onDeleteTask(id)}
    >Delete</Button>
  </div>
);

export default Task;
