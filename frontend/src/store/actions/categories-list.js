import axios, {CATEGORIES_URL} from "../../api-urls";


export const CATEGORIES_LIST_REQUEST_SUCCESS = "CATEGORIES_LIST_REQUEST_SUCCESS";


export const loadCategories = () => {
    return dispatch => {
        axios.get(CATEGORIES_URL)
            .then(response => {
                console.log(response.data);
                return dispatch({type: CATEGORIES_LIST_REQUEST_SUCCESS, categories: response.data});
            })
            .catch(error => console.log(error));
    }
};