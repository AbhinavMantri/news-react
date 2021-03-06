import api from "../../api";
import constants from "../../constants";

export default function(action, { dispatch, args }) { 
    api.get(`${constants.NEWS_APP_URL}${constants.NEWS_URLS.GET_SOURCES}?apiKey=${constants.NEWS_API_KEY}`, {})
    .then(resp => { 
        if(resp.sources) 
            dispatch({type: action, payload: { data: resp.sources } }); 
    })
    .catch(err => { 
        console.log("getsources api error: "+ err); 
    });
}