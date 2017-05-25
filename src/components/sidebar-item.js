import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import '../styles/sidebar-item.css';

const SideBarItem = ({ name, isActive, onSwitchCategory }) => (
  <Button
    bsStyle="default"
    id="sidebar-item"
    active={isActive}
    block
    onClick={() => onSwitchCategory(name)}
  >
    {name}
  </Button>
);

SideBarItem.propTypes = {
  name: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onSwitchCategory: PropTypes.func.isRequired,
};

export default SideBarItem;
