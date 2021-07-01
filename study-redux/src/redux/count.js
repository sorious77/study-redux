/*

    <button id="add">Add</button>
    <span></span>
    <button id="minus">minus</button>

*/

import { createStore } from "redux";

const add = document.querySelector("#add");
const minus = document.querySelector("#minus");
const number = document.querySelector("span");

const ADD = "ADD";
const MINUS = "MINUS";

number.innerText = 0;

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};

const countStore = createStore(countModifier);

countStore.subscribe(() => {
  number.innerText = countStore.getState();
});

add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));
