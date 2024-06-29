import { createAction } from "../../utils/reducer";
import { CATEGORIES_ACTION_TYPES } from "./types";

export const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categoriesMap);
