import { createSlice } from "@reduxjs/toolkit";
const defState = {
  counter: 0,
};
const counterSlice = createSlice({
  // Имя слайса
  name: "counter",
  // Начальное состояние редюсера слайса
  initialState: defState,
  // Объект редюсеров
  reducers: {
    addCounter(state, action) {
      console.log("add");
      state.counter += 1;
    },
    decrCounter(state, action) {
      state.counter -= 1;
    },
  },
});

// Генераторы экшенов
export const { addCounter, decrCounter } = counterSlice.actions;
// Редюсер слайса
export const counterReducer = counterSlice.reducer;
