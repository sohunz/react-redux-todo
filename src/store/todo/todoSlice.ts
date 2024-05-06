import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { todoTypes } from "../../types/types";

const initialState = [
    {
        id: "6ku4",
        text: "First Task",
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
            };
            return [todo, ...state];
        },
    },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
