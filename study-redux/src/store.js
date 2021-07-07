import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    del: (state, action) => state.filter((toDo) => toDo.id !== action.payload),
  },
});

const store = configureStore({ reducer: toDos.reducer });

export default store;
export const { add, del } = toDos.actions;

/*
const addToDo = createAction("ADD");
const delToDo = createAction("DEL");

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state];
    case delToDo.type:
      return state.filter((toDo) => toDo.id !== action.payload);
    default:
      return [];
  }
};

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [delToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});
*/
