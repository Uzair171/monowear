import { createSelector } from "reselect";

// input selector
const selectCategoriesArray = (state) => state.categories.categories;

// memoized selector
export const selectCategoriesMap = createSelector(
  [selectCategoriesArray],
  (categories) =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
