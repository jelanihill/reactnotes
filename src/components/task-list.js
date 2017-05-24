import React from 'react';
import PropTypes from 'prop-types';

import Task from './task';
import '../styles/task-list.css';

const TaskList = ({ taskList, onDeleteTask }) => (
  <ul>
    {taskList.map(task => (
      <Task
        key={task.key}
        id={task.id}
        content={task.content}
        onDeleteTask={onDeleteTask}
      />
    ))}
  </ul>
);

TaskList.propTypes = {
  taskList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;
