import api from "../../api";
import constants from "../../constants";

export default function(action, { dispatch, args }) { 
    const { source, page } = args || {};

    api.get(`${constants.NEWS_APP_URL}${constants.NEWS_URLS.GET_NEWS}?sources=${source}&apiKey=${constants.NEWS_API_KEY}&page=${page}&pageSize=20`, {})
    .then(resp => { 
        if(resp.articles) 
            dispatch({type: action, payload: { data: resp.articles, source, page } }); 
    }).catch(err => { 
        console.log("get news api error: "+ err); 
    });
}