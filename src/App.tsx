import * as React from 'react';
import './styles.css';
import { Action } from 'redux';

// State
export interface State {
  counter: number;
}
const initialState: State = {
  counter: 0,
};

// Reducer
export const reducer = (state: State = initialState, action: Action): State => {
  return state;
};

// Component
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>0</h2>
      <button>+1</button>
    </div>
  );
}
