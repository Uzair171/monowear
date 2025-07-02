import { USER_ACTION_TYPE } from "../../context/userContext";
import { createAction } from "../../utils/reducer/reducerUtils";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user);
};
