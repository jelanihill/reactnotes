import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import '../styles/sidebar-item.css';

const SideBarItem = ({ name }) => (
  <Button bsStyle="default" block>{name}</Button>
);

SideBarItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SideBarItem;
