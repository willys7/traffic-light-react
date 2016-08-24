import expect from 'expect';
import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import Immutable from 'immutable';

// Javascript the good parts

const Traffic = ({state}) => (
  <div>
    <div class = "traffic-light">
      <div class = {{state === 0 ? "red-light":"red light off"}}></div>
      <div class = {{state === 1 ? "yellow-light":"yellow light off"}}></div>
      <div class = {{state === 2 ? "green-light":"green light off"}}></div>
    </div>
    <button onClick= { () => store.dispatch({ type: 'CHANGELIGHT'})}></button>
  </div>
);

// Reducer
const counterState = (state = 0, action) => {
  if(action.type === 'CHANGELIGHT') {  
    switch(state){
      case 0:
        return 2;
      case 1:
        return 0;
      case 2:
        return 1;
      default;
        return state;
    }
}


const store = createStore(counterState);



//render
const render = () => {
  ReactDOM.render(
    <Traffic state={ store.getState() } />,
    document.getElementById('root')
  )
}

store.subscribe(render);
render();