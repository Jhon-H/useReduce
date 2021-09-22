import React, { useReducer } from 'react'
import { counterReducer, initialState, init } from '../reducers/counterReducer';
import { types } from '../types/types';


const Counter = () => {
  const [counter, dispatch] = useReducer(counterReducer, initialState, init)

  return (
    <div className="container mt-3">
      <h1>Counter: {counter} </h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: types.increment })}
        children="+1"
      />

      <button
        className="btn btn-secondary"
        onClick={() => dispatch({ type: types.reset })}
        children="reset"
      />

      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: types.decrement })}
        children="-1"
      />
    </div>
  )
}

export default Counter;
