import React from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import '../styles/editor.css';

const Editor = () => (
  <div className="editor">
    <form>
      <FormGroup>
        <ControlLabel>Create a Note</ControlLabel>
        <FormControl componentClass="textarea" className="editorarea" />
      </FormGroup>
      <Button bsStyle="primary">Create</Button>
    </form>
  </div>
);

export default Editor;
