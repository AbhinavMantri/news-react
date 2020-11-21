import constants from "../../constants";
import getNews from "./getNews";
import getTopHeadlines from "./getTopHeadlines";

export default (action, args) => (dispatch) => { 
    switch(action) { 
        case constants.ACTIONS.GET_TOP_HEADLINES: 
            return getTopHeadlines(action, { dispatch, args });
        case constants.ACTIONS.GET_NEWS:
            return getNews(action, { dispatch, args });  
        case constants.ACTIONS.SET_NEWS_PROVIDER:
            return dispatch({type: action, payload: args});      
        default: 
            return null; 
    }
}