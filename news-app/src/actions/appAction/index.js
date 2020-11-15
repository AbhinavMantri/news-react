import constants from "../../constants";
import getSources from "./getSources";

export default (action, args) => ({ dispatch }) => {
    switch(action) {
        case constants.ACTIONS.GET_SOURCES:
            return getSources(action, { dispatch, args });
        default:
            return null;
    }
} 