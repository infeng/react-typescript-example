import * as filters from '../constants/filters';

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

function makeSimpleActionCreator(type, ...argsNames) {
    return (...args) => {
        let action = { type };
        argsNames.forEach((arg, index) => {
            action[argsNames[index]] = args[index];
        });
        return action;
    };
}

export function addTodo(text:string) {
  return (dispatch, getState) => {
    dispatch(makeSimpleActionCreator(ADD_TODO, 'text')(text));
  };
}

export function completeTodo(index:number) {
  return (dispatch, getState) => {
    dispatch(makeSimpleActionCreator(COMPLETE_TODO, 'index')(index));
  };  
}

export function setVisibilityFilter(filter:string) {
  return (dispatch, getState) => {
    dispatch(makeSimpleActionCreator(SET_VISIBILITY_FILTER, 'filter')(filter));
  };
}