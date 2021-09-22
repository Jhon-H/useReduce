import { types } from '../types/types';

export const initialState = 0;

export const init = value => {
  return parseInt(value)
}

export const counterReducer = (state, actions) => {
  switch (actions.type) {
    case types.increment:
      return state + 1
    
    case types.decrement:
      return state - 1

    case types.reset:
      return initialState

    default:
      return state
  }
}