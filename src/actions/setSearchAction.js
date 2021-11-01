import { CHANGE_SEARCH_FILED, FECTH_ROBOTS_FAIL, FECTH_ROBOTS_PENDING, FECTH_ROBOTS_SUCCESS } from "../constants/setSearchConstant";
import axios from "axios";

export const setSearch = (text) => {
    return {
        type: CHANGE_SEARCH_FILED,
        payload: text,
    };
}

export const getRobots = () => async (dispatch) => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    try {
        dispatch({ type: FECTH_ROBOTS_PENDING });
        dispatch({ type: FECTH_ROBOTS_SUCCESS, payload: response.data });
    } catch (error) {
        dispatch({ type: FECTH_ROBOTS_FAIL, payload: error.message });
    }

}