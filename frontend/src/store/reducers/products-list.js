import axios, {PRODUCTS_URL} from "../../api-urls"

import {PRODUCT_LIST_REQUEST_SUCCESS} from "../actions/products-list";

 const initialState = {
    products: [],
};

 const productsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST_SUCCESS:
            return {...state, products: action.products};
        default:
            return state;
    }
};

 export default productsListReducer;