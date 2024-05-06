import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { todoTypes } from "../../types/types";

const initialState = [
    {
        id: "6ku4",
        text: "First Task",
        isDone: false,
    },
];

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const todo: todoTypes = {
                id: nanoid(),
                text: action.payload,
                isDone: false,
            };
            return [todo, ...state];
        },
        removeTodo: (state, action) => {
            const todo = state.filter((item) => item.id !== action.payload);
            return todo;
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        isDone: !todo.isDone,
                    };
                }
                return todo;
            });
        },
    },
});

export const { addTodo, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
