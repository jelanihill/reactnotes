import React from 'react';
import PropTypes from 'prop-types';
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

Task.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default Task;
