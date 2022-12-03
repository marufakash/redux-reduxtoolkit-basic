# 1. Introduction to redux.
---

## 1.1 What is Redux & why Redux?
- A small JS Library
- for managing medium/large amount of states globally in your app.
- useContext + useReducer Hook ideas will help you to understand redux.

## 1.2 Some common terms related to redux
- React-redux: redux is used with some common packages such as react-redux
- redux-toolkit : recommended way to write redux logic for building redux app easily and avoiding mistakes.
- redux devtools extension: helps to debug redux app easily.

## 1.3 how redux works?
- define state
- dispatch an Action.
- Reducer update state based on Action Type.
- store will update the view

## 2. redux core concept
- State: consider what states you want to manage
```
// define state
count: 0;
const initialState1 = { count: 0};
const initialState2 = {users: [{name: 'Maruf Akash'}]}
```

- Action: actions are object that have 2 things- type & payload
```
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_USER = 'ADD_USER';

// dispatch - action
{
    type: INCREMENT,
}
{
    type: DECREMENT
}
{
    type: ADD_USER
    payload: {
        name: 'Gazi Mahabuba',
    }
}
```

- Reducer: reducers are pure function which handles all logic. it updates the state depends on action type

```
// create reducer
const counterReducer = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        default:
            return state;
    }
}
```

- Store: It holds the states. It has 3 important methods- getState(), dispatch(), suscribe()

```
// 4. store - getState(), dispatch(), subscribe()

// create store
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

// dispatch action
store.dispatch(incrementCounter());
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
```

## 3. Complete Counter App
- example of counter app
```
const { createStore }  = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

const initialState = {
    count: 0,
}

const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

const resetCounter = () => {
    return {
        type: RESET
    }
}

const reduceCounter = (state = initialState, action) => {
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        case RESET:
            return {
                ...state,
                count: 0,
            }
        default:
            state;
    }
}

const store = createStore(reduceCounter);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch((incrementCounter()));
store.dispatch((incrementCounter()));
store.dispatch((incrementCounter()));
store.dispatch((decrementCounter()));
store.dispatch((resetCounter()));
```

## 4. payload in action

- example

```
const { createStore } = require('redux');

const ADD_USER = 'ADD_USER';

const initialState = {
    users: ['Maruf Akash'],
    count: 1,
}

const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

const userReducer = (state= initialState , action) => {
    switch(action.type){
        case ADD_USER:
            return {
                users: [...state.users, action.payload],
                count: state.count + 1,
            }
        default:
            return state;
    }
}

const store = createStore(userReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addUser('Gazi Mahabuba'));
store.dispatch(addUser('Sumona Akter'));
```

## 5. Multiple reducers & combine multiple reducers

- example

```
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
```

## 6. Middleware
- for extra features, middlepoint of dispatching an action and handledby reducer, performing async tasks, login etc.

- Example of popular redux middlewares packages: redux-logger, redux-thunk
 - ```npm install redux-logger```
 - example

 ```
 const { createStore, applyMiddleware } = require('redux');
const { default: logger } = require('redux-logger');

// product constants
const GET_PRODUCT = 'GET_PRODUCT';
const ADD_PRODUCT = 'ADD_PRODUCT';

// product state
const initialProductState = {
    products: ['Sugar,Salt'],
    numberOfProducts: 2,
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

// store
const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(getProducts());
store.dispatch(addProducts('vanila'));
```