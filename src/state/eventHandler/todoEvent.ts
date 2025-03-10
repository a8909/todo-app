import {createSlice} from '@reduxjs/toolkit';
import { TodoModel } from '../../models/todoModel';


const todoSlice = createSlice({
    name: 'todo-slice',
    initialState : {todos : <TodoModel[]> []},
    reducers: {
    
        remove : (state, action:{payload: number}) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);  
        },
        add : (state, action) =>{
            state.todos.push(action.payload);
        },
        onEdit : (state, action) =>{
            const {id, value} = action.payload;
            state.todos = state.todos.map((todo) =>
              todo.id === id ? { ...todo, todo: value } : todo
            );

        },
        complete : (state, action: { payload : number}) =>{
            state.todos =  state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );

        }
    }
})

export const { onEdit, complete, remove } = todoSlice.actions;

export default todoSlice.reducer;