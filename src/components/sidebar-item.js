import React from 'react';
import PropTypes from 'prop-types';

const SideBarItem = ({ name }) => (
  <div>{name}</div>
);

SideBarItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SideBarItem;
