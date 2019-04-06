import {CATEGORIES_LIST_REQUEST_SUCCESS} from "../actions/categories-list";

const initialState = {
    categories: [],
};

const categoriesListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIES_LIST_REQUEST_SUCCESS:
            return {...state, categories: action.categories};
        default:
            return state;
    }
};

export default categoriesListReducer;