import constants from "../../constants";

const initialState = { 
    sources: null, 
    providers: {},
};

export default function(state = initialState, action) { 
    const { data, source, page } = action.payload || {};
    switch(action.type) { 
        case constants.ACTIONS.GET_SOURCES: 
            return { ...state, sources: data, }; 
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
        default: 
        return state; 
    }
}