import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const data = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_LIST:
      const newState = {...state};
      const newMap = new Map();
      if(state[action.data.sectionName]) {
        state[action.data.sectionName].forEach( (v, k) => newMap.set(k, v));
      }
      if(action.data.list) {
        action.data.list.forEach( item => newMap.set(item.id, item));
      }

      newState[action.data.sectionName] = newMap;

      return newState;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  data,
  routing
});

export default rootReducer;
