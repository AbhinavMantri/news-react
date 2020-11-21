import constants from "../../constants";

const initialState = { 
    sources: null, 
    providers: {},
    selectedProvider: null,
    newsDetail: {},
    relatedNews: {},
};

export default function(state = initialState, action) { 
    const { data, source, page, title } = action.payload || {};
    switch(action.type) { 
        case constants.ACTIONS.GET_SOURCES: 
            return { 
                ...state, 
                sources: data, 
            }; 
        case constants.ACTIONS.SET_NEWS_PROVIDER:
            return {
                ...state,
                selectedProvider: action.payload,
            };    
        case constants.ACTIONS.GET_TOP_HEADLINES: 
            return { 
                ...state,
                providers: {
                    ...state.providers,
                    [source]: {
                        ...(state.providers[source] || {}),
                        topheadlines: data,
                    }
                } 
            };
        case constants.ACTIONS.GET_NEWS: 
            return { 
                ...state,
                providers: {
                    ...state.providers,
                    [source]: {
                        ...(state.providers[source] || {}),
                        news: {
                            page,
                            data: (((state.providers[source] || {}).news || {}).data || []).concat(data),
                        },
                    }
                } 
            };
        case constants.ACTIONS.FIND_NEWS:
            return {
                ...state,
                newsDetail: {
                    ...state.newsDetail,
                    [title]: data,
                }
            };
        case constants.ACTIONS.RELATED_NEWS:
            return {
                ...state,
                relatedNews: {
                    ...state.relatedNews,
                    [title]: data,
                }
            };             
        default: 
        return state; 
    }
}