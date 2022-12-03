// Multiple reducers & combine multiple reducers
const { createStore, combineReducers } = require('redux');

// product constants
const GET_PRODUCT = 'GET_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';

// cart constants
const GET_CART_ITEMS = 'GET_CART_ITEMS';
const ADD_CART_ITEM = 'ADD_CART_ITEM';

// product state
const initialProductState = {
    products: ['Sugar,Salt'],
    numberOfProducts: 2,
}

// cart state
const initialCartState = {
    carts: ['Pen'],
    numberOfCarts: 1,
}

// product action
const getProducts = () => {
    return {
        type: GET_PRODUCT,
    }
}

const addProducts = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product,
    }
}

// cart action
const getCarts = () => {
    return {
        type: GET_CART_ITEMS,
    }
}

const addCarts = (cart) => {
    return {
        type: ADD_CART_ITEM,
        payload: cart,
    }
}

// product reducer
const productReducer = (state = initialProductState , action) => {
    switch(action.type){
        case GET_PRODUCT:
            return {
                ...state,
            }
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                numberOfProducts: state.numberOfProducts + 1,
            }
        default:
            return state;
    }
}

// cart reducer
const cartReducer = (state = initialCartState , action) => {
    switch(action.type){
        case GET_CART_ITEMS:
            return {
                ...state,
            }
        case ADD_CART_ITEM:
            return {
                carts: [...state.carts, action.payload],
                numberOfCarts: state.numberOfCarts + 1,
            }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer,
})

// store
const store = createStore(rootReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProducts('vanila'));
store.dispatch(getCarts());
store.dispatch(addCarts('Book'));