import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './delete-button';

const Task = ({ content, id, onDeleteTask }) => (
  <div className="task">
    {content}
    <DeleteButton onDeleteItem={onDeleteTask} id={id} />
  </div>
);

Task.propTypes = {
  content: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default Task;
