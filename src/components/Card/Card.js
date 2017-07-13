import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NameToColor from '../../utils/NameToColor';
import './card.scss';


class Card extends Component {
  constructor(props) {
    super(props);
    // if state is complex
    //this.state = {foo:false}
  }


  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data:{}
  }

  eventHandler = (e) => {

  }

  render () {
    //const { } = this.state;
    const { data } = this.props;

    return (
      <div className="card">
        <div className="card-name">
          <span className="card-name-text">{data.name}</span>
          <a className="card-name-pivitollink" href={data.url} target="_blank"/>
        </div>
        <div className="card-labels">
          {data.labels.map((label, ind)=>(
            <span key={ind} className="card-labels-item">{label.name}</span>
          ))}
        </div>
        <div className="card-owners">
          {data.owners.map((owner, ind)=>(
            <span
              key={ind}
              style={{background:`#${NameToColor(owner.name)}`}}
              className="card-owners-item">{owner.name.split(' ')[0]}</span>
          ))}
        </div>
      </div>
    );
  }
}


export default Card;
