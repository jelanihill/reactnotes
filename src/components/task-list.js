import React from 'react';

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

export default TaskList;
