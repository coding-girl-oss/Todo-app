import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [],
    check: [] 
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        add: (state, action) => {
            state.todos.push(action.payload);
            state.check.push(false); 
        },
        remove: (state, action) => {
            state.todos.splice(action.payload, 1);
            state.check.splice(action.payload, 1); 
        },
        toggle: (state, action) => {
            state.check[action.payload] = !state.check[action.payload];
        }
    }
});

export default todosSlice.reducer;
export const { add, remove, toggle } = todosSlice.actions;
