import React, { Component } from 'react';
import './silo.scss';

import PropTypes from 'prop-types';
import Card from '../Card/Card.js'



class Silo extends Component {
  /*
  constructor(props) {
    super(props);
    // if state is complex

  }

  // if state is simple
  state = {
    Silo:'bar'
  }
  */

  static displayName = 'Silo';

  static propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
  }

  static defaultProps = {
    title:'',
    data:[]
  }

  render () {
    const { title, data } = this.props;
    let size = 0;
    data.map(d => size += (d.estimate ? d.estimate : 0))
    return (
      <div className="silo">
        <div className="silo-title">
          <span className="silo-title-text">
            {title}
          </span>
          <span className="silo-title-numbers">
            {data.length}/{size}
          </span>
        </div>
        <div className="silo-content">
          {data.map((item, ind)=>(
            <Card key={ind} data={item}/>
          ))}
        </div>
      </div>
    );
  }
}


export default Silo;
