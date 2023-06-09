import { addCounter, decrCounter } from "../action/actions";
import { createReducer } from "@reduxjs/toolkit";
const defState = {
  counter: 0,
};
const state = defState;

export const rootReducer = createReducer(state, {
  [addCounter]: (state, action) => {
    // return { ...state, counter: state.counter + action.payload };
    // return { counter: state.counter + action.payload };
    state.counter += 1;
  },
  [decrCounter]: (state, action) => {
    // return { ...state, counter: state.counter + action.payload };
    // return { counter: state.counter + action.payload };
    state.counter -= 1;
  },
});

// export default rootReducer;
