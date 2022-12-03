// Complete Counter App
const { createStore }  = require('redux');

// constant declaration
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';

// state
const initialState = {
    count: 0,
}

// action(object) - type, payload
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

// reducer
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

// store - getState(), dispatch(), subscribe()
const store = createStore(reduceCounter);

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch((incrementCounter()));
store.dispatch((incrementCounter()));
store.dispatch((incrementCounter()));
store.dispatch((decrementCounter()));
store.dispatch((resetCounter()));