export const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (
  state = CATEGORIES_INITIAL_STATE,
  action = {}
) => {
  const { type, playload } = action;

  switch (type) {
    case "SET_CATEGORIEES_MAP":
      return { ...state, categoriesMap: playload };
    default:
      return state;
  }
};
