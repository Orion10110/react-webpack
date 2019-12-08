import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default function Button ({children}) {
  return <button className="sn-btn" type="button">{children}</button>;
}

Button.propTypes = {
  children: PropTypes.string
};

Button.defaultProps = {
  children: null
};
