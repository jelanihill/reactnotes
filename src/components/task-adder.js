import React, { Component } from 'react';
import { Button, Form, FormGroup, FormControl } from 'react-bootstrap';

import '../styles/task-adder.css';

class TaskAdder extends Component {

  constructor(props) {
    super(props);

    this.state = { value: '' };
  }

  render() {
    const { addNewTask } = this.props;

    return (
      <div>
        <Button
          bsStyle="primary"
          onClick={() => {
            const textVal = this.state.value;
            this.setState({ value: '' });
            return addNewTask(textVal);
          }}
        >
          Add New Task
        </Button>
        <Form>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Enter text"
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default TaskAdder;
