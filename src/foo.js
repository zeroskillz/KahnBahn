import React, {Component, PropTypes} from 'react';


class Foo extends Component {
  constructor(props) {
    super(props);
    // if state is complex

  }

  // if state is simple
  state = {
    foo:'bar'
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
      <div>Foo</div>
    );
  }
}


export default Foo;
