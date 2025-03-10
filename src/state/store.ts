import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './eventHandler/todoEvent';
export const store = configureStore({
    reducer: {
        "todo-slice" : todoReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;