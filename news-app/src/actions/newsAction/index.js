import constants from "../../constants";
import getNews from "./getNews";
import getTopHeadlines from "./getTopHeadlines";
import getRelatedNews from "./getRelatedNews";
import findNews from "./findNews";

export default (action, args) => (dispatch) => { 
    switch(action) { 
        case constants.ACTIONS.GET_TOP_HEADLINES: 
            return getTopHeadlines(action, { dispatch, args });
        case constants.ACTIONS.GET_NEWS:
            return getNews(action, { dispatch, args });  
        case constants.ACTIONS.FIND_NEWS:
            return findNews(action, { dispatch, args });     
        case constants.ACTIONS.RELATED_NEWS:
            return getRelatedNews(action, { dispatch, args });    
        case constants.ACTIONS.SET_NEWS_PROVIDER:
            return dispatch({type: action, payload: args});      
        default: 
            return null; 
    }
}