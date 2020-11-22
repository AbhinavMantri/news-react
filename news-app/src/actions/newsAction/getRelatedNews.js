import api from "../../api";
import constants from "../../constants";
import { convertKeyPharse } from "../../utils";

export default function(action, { dispatch, args }) { 
    const { title } = args || {};

    api.get(`${constants.NEWS_APP_URL}${constants.NEWS_URLS.GET_NEWS}?q=${convertKeyPharse(title, 'OR')}&sortBy=relevancy&apiKey=${constants.NEWS_API_KEY}&pageSize=20`, {})
    .then(resp => { 
        if(resp.articles && resp.articles.length > 0) 
            dispatch({type: action, payload: { data: resp.articles, title } }); 
    }).catch(err => { 
        console.log("related news api error: "+ err); 
    });
}