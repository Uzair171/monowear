import { CATEGORIES_ACTION_TYPE } from "./categories.types";

export const CATEGORIES_INTIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

export const categoriesReducer = (
  state = CATEGORIES_INTIAL_STATE,
  action = {}
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true, error: null };
    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILURE:
      return { ...state, isLoading: false, error: payload };

    case CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categories: payload, isLoading: false, error: null };
    default:
      return state;
  }
};
