import api from "../../api";
import constants from "../../constants";

export default function(action, { dispatch, args }) { 
    const { source } = args || {};

    api.get(`${constants.NEWS_APP_URL}${constants.NEWS_URLS.GET_TOP_HEADLINES}?sources=${source}&apiKey=${constants.NEWS_API_KEY}&page=1&pageSize=12`, {})
    .then(resp => { 
        if(resp.articles) 
            dispatch({type: action, payload: { data: resp.articles, ...args } }); 
    }).catch(err => { 
        console.log("get top headlines api error: "+ err); 
    });
}