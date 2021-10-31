import { CHANGE_SEARCH_FILED } from "../constants/setSearchConstant"

const initialState = {
    search: '',
}

export const searchSetReducer = (state = initialState, action) => {
    if (typeof state === 'undefined') {
        return initialState
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