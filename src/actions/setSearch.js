import { CHANGE_SEARCH_FILED } from "../constants/setSearchConstant";

export const setSearch = (text) => {
    return {
        type: CHANGE_SEARCH_FILED,
        payload: text,
    };
}