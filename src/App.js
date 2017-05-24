import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import Header from './components/header';
import SideBar from './components/sidebar';
import TaskViewer from './components/task-viewer';
import './styles/app.css';

const taskList = [
  { id: 1, key: 1, content: 'This is the content of the first sticky task' },
  { id: 2, key: 2, content: 'This is the content of the second sticky task' },
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { taskList, textValue: '' };

    this.addNewTask = this.addNewTask.bind(this);
    this.onDeleteTask = this.onDeleteTask.bind(this);
  }

  onDeleteTask(id) {
    const newList = this.state.taskList.filter(task => task.id !== id);
    console.log(newList);
    this.setState({ taskList: newList });
  }

  addNewTask(newVal) {
    const newId = this.state.taskList[this.state.taskList.length - 1].id + 1;
    const newTask = { id: newId, key: newId, content: newVal };
    this.setState({ taskList: this.state.taskList.concat([newTask]) });
  }

  render() {
    return (
      <div>
        <Header />
        <Grid fluid>
          <Row id="row">
            <SideBar />
            <TaskViewer
              taskList={this.state.taskList}
              addNewTask={this.addNewTask}
              onDeleteTask={this.onDeleteTask}
            />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
