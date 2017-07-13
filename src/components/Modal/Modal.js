import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Modal extends Component {
  constructor(props) {
    super(props);
    // if state is complex

  }

  // if state is simple
  state = {
    Modal:'bar'
  }

  static displayName = 'Template';

  static propTypes = {
    mod:        PropTypes.string, // class appended to all elements (not children)
    className:  PropTypes.string, // class appended to parent element
  }

  static defaultProps = {
    mod:null,
    className:null
  }

  eventHandler = (e) => {

  }

  render () {
    //const { } = this.state;
    //const { } = this.props;

    return (
      <div>Modal</div>
    );
  }
}


export default Modal;
