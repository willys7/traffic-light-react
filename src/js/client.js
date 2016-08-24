import Immutable from 'immutable';
import expect from "expect";
import { createStore } from "redux"
import React from 'react';
import ReactDOM from 'react-dom';
import "../sass/styles.scss";
// Javascript the good parts

const Traffic = ({state}) => (
  <div>
    <div class = "traffic-light">
      <div class={(state === 2 ? "red light": "red light off")}></div>
      <div class={(state === 1 ? "yellow light": "yellow light off")}></div>
      <div class={(state === 0 ? "green light": "green light off")}></div>
    </div>
    <button onClick= { () => store.dispatch({ type:'CHANGE_LIGHT'})}>CHANGE_LIGHT</button>
  </div>
);

// Reducer
const statusState = (state = 0, action) => {
  if(action.type === 'CHANGE_LIGHT') {  
    switch(state){
      case 0:
        return 1;
      case 1:
        return 2;
      case 2:
        return 0;
      default:
        return state;
    }
  }
  return state;
}


const store = createStore(statusState);

const render = () => {
  ReactDOM.render(
    <Traffic state={ store.getState() } />,
    document.getElementById('root')
  )
}

store.subscribe(render);
render();