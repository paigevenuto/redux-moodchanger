const INITIAL_STATE = { mood: `┐(´д｀)┌` };

function moodReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "peace":
      return { ...state, mood: `(^-^)v` };

    case "evil":
      return { ...state, mood: `（｀ー´）` };

    case "depressed":
      return { ...state, mood: `(._.)` };

    case "laugh":
      return { ...state, mood: `(≧▽≦)` };

    default:
      return state;
  }
}

const store = Redux.createStore(moodReducer);

const currentMood = document.getElementById("mood");
const moodButtons = document.getElementById("mood-buttons");

for (button of moodButtons.children) {
  button.addEventListener("click", (evt) => {
    const target = evt.target;
    store.dispatch({ type: target.textContent });
    currentMood.textContent = store.getState().mood;
  });
}
