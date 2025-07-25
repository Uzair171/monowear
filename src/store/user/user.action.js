import { createAction } from "../../utils/reducer/reducerUtils";
import { USER_ACTION_TYPE } from "./user.types";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user);
};
