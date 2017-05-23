import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Header from './components/header';
import SideBar from './components/sidebar';
import TaskViewer from './components/task-viewer';
import './styles/app.css';

const list = [
  { content: 'This is the content of the first sticky task' },
  { content: 'This is the content of the second sticky task' },
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { list };
  }

  render() {
    return (
      <div>
        <Header />
        <Grid fluid>
          <Row id="row">
            <SideBar />
            <TaskViewer />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
