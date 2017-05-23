import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Editor from './components/editor';
import NoteList from './components/note-list';
import './styles/app.css';

const list = [
  { title: 'Note #1', content: 'This is the content of the first sticky note' },
  { title: 'Note #2', content: 'This is the content of the second sticky note' },
];

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { list };
  }

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col xs={12} md={8}>
              <Editor />
            </Col>
            <Col xs={6} md={4}>
              <NoteList noteList={this.state.list} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
