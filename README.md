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