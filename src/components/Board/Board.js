import React from 'react';
import NameToColor from '../../utils/NameToColor';
import './board.scss';

const Board = (props) => (
  <div className="board">
    <div className="board-header">
      <div className="board-header-title">
        {props.data.name}
      </div>
      <div className="board-header-team">
        {props.team.map((t,i)=>(
           <span
            onClick={e => props.onFilter(e, t.name, t)}
            key={i}
            style={{background:`#${NameToColor(t.name)}`}}
            className={`board-header-team-member${t.name === props.activeMember ? ' is-active' : ''}`}>
              {t.name.split(' ')[0]}
          </span>
        ))}
      </div>
    </div>
    <div className="board-content">
      <div className="board-content-sidebar">
        :)
      </div>
      {props.children}
    </div>
  </div>
);

export default Board;
