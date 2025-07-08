import { getCategoriesAndDocuments } from "../../utils/firebase.utils";
import { createAction } from "../../utils/reducer/reducerUtils";
import { CATEGORIES_ACTION_TYPE } from "./categories.types";

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_START);

export const fetchCategoriesSuccess = (categories) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_SUCCESS, categories);

export const fetchCategoriesFailure = (error) =>
  createAction(CATEGORIES_ACTION_TYPE.FETCH_CATEGORIES_FAILURE, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
  dispatch(fetchCategoriesStart());
  try {
    const categoriesArray = await getCategoriesAndDocuments();
    dispatch(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    dispatch(fetchCategoriesFailure(error));
  }
};
