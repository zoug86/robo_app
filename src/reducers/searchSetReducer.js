import { CHANGE_SEARCH_FILED, FECTH_ROBOTS_FAIL, FECTH_ROBOTS_PENDING, FECTH_ROBOTS_SUCCESS } from "../constants/setSearchConstant";

const initialStateSearch = {
    search: '',
}

export const searchSetReducer = (state = initialStateSearch, action) => {
    if (typeof state === 'undefined') {
        return initialStateSearch
    }

    switch (action.type) {
        case CHANGE_SEARCH_FILED:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state
    }
}

const initialStateRobots = {
    robots: [],
    loading: true,
    error: ''
}

export const robotsGetReducer = (state = initialStateRobots, action) => {
    switch (action.type) {
        case FECTH_ROBOTS_PENDING:
            return {
                ...state,
                loading: true
            }
        case FECTH_ROBOTS_SUCCESS:
            return {
                ...state,
                loading: false,
                robots: action.payload
            }
        case FECTH_ROBOTS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}