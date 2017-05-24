import React from 'react';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

import TaskAdder from './task-adder';
import TaskList from './task-list';
import '../styles/task-viewer.css';

const TaskViewer = props => (
  <Col id="taskviewer"xs={15} md={10}>
    <TaskAdder addNewTask={props.addNewTask} />
    <TaskList taskList={props.taskList} onDeleteTask={props.onDeleteTask} />
  </Col>
);

TaskViewer.PropTypes = {
  taskList: PropTypes.array,
};

export default TaskViewer;
