// payload in action
const { createStore } = require('redux');

// Constant declaration

const ADD_USER = 'ADD_USER';

// state
const initialState = {
    users: ['Maruf Akash'],
    count: 1,
}

// action
const addUser = (user) => {
    return {
        type: ADD_USER,
        payload: user
    }
}

// reducer
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

// store
const store = createStore(userReducer);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(addUser('Gazi Mahabuba'));
store.dispatch(addUser('Sumona Akter'));