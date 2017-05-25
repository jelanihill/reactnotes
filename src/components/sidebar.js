import React, { Component } from 'react';
import { Col, Button, Modal, Form, FormGroup, FormControl } from 'react-bootstrap';
import PropTypes from 'prop-types';

import SideBarItem from './sidebar-item';
import '../styles/sidebar.css';

class SideBar extends Component {

  constructor(props) {
    super(props);

    this.state = { showModal: false, value: '' };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ showModal: true });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { categoryList, onAddNewCategory, selectedCategory, onSwitchCategory } = this.props;

    return (
      <Col id="sidebar" xs={3} md={2} lgOffset={500} mdOffset={500}>
        {categoryList.map(category => (
          <SideBarItem
            name={category.name}
            isActive={selectedCategory === category.name}
            onSwitchCategory={onSwitchCategory}
          />
        ))}
        <Button
          id="create-category-button"
          bsStyle="primary"
          onClick={this.openModal}
        >
          Create List
        </Button>

        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Create New List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
            <Button
              bsStyle="primary"
              onClick={() => {
                const textVal = this.state.value;
                this.setState({ showModal: false, value: '' });
                return onAddNewCategory(textVal);
              }}
            >
              Save
            </Button>
          </Modal.Body>
        </Modal>
      </Col>
    );
  }
}

SideBar.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.object).isRequired,
  onAddNewCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSwitchCategory: PropTypes.func.isRequired,
};

export default SideBar;
