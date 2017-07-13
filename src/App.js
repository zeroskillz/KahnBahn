import React from 'react';
import PropTypes from 'prop-types';

import DataProvider from './DataProvider';

import Board from './components/Board/Board.js';
import Silo from './components/Silo/Silo.js'

import Foo from './Foo';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data:props.data,
      filterName:null,
    }

  }

  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data:DataProvider
  }

  _clone = function(item){
    return JSON.parse(JSON.stringify(item));
  }

  _filter = (event, name, obj) => {
    const fName = this.state.filterName;
    const filterName = name === fName ? null : name;
    this.setState({filterName});
  }


  render () {

    const { filterName } = this.state;
    const data = this._clone(this.props.data);
    const stories = !filterName ? data.stories : data.stories.filter(story => {
      let ret = false;
      story.owners.map( o => {
        if(o.name === filterName){ret = true;}
      })
      return ret;
    });

    const { team, project } = data;


    return (
      <Board data={project} team={team} activeMember={filterName} onFilter={this._filter}>
        <Silo title="Unstarted" data={stories.filter( story => story.current_state === "unstarted")} />
        <Silo title="Started" data={stories.filter( story => story.current_state === "started")} />
        <Silo title="Testing" data={stories.filter( story => story.current_state === "finished")} />
        <Silo title="Delivered" data={stories.filter( story => story.current_state === "delivered")} />
        <Silo title="Done" data={stories.filter( story => story.current_state === "accepted")} />
      </Board>
    );
  }
}


/*
unstarted  current_state: "unstarted",
started current_state: "started",
testing current_state: "finished",
delivered current_state: "delivered",
done  current_state: "accepted",
*/
