const initialState = {
  darkMode: false,
};

export const darkModeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_DARK_MODE":
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    default:
      return state;
  }
};

export const toggleDarkMode = () => {
  return {
    type: "TOGGLE_DARK_MODE",
  };
};
