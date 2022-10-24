import { CATEGORIES_ACTION_TYPES } from "./category.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setCategoriesMap = (categoriesMAp) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIEES_MAP, categoriesMAp);
