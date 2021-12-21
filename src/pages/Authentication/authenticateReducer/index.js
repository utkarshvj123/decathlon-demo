import { LOGIN_USER, LOGOUT_USER } from "../actions/actionType";

const INITIAL_STATE = {
  user_details: {},
  message: "",
  logged_in: false,
};

const authenticateReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case `${LOGIN_USER}_SUCCESS`: {
      return {
        ...state,
        user_details: payload,
        message: "",
        logged_in: true,
      };
    }
    case `${LOGIN_USER}_FAILED`: {
      return {
        ...state,
        message: "Credentials not correct",
        logged_in: false,
      };
    }
    case `${LOGOUT_USER}`: {
      return {
        ...state,
        logged_in: false,
      };
    }

    default:
      return state;
  }
};

export default authenticateReducer;
