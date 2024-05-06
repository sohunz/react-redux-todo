import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo/todoSlice";

const AddTodo = () => {
    const [input, setInput] = useState<string>("");

    const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleSubmit = () => {
        dispatch(addTodo(input));
        setInput("");
    };

    return (
        <div className="flex items-center gap-3">
            <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="Input todo..."
                value={input}
                onChange={handleChange}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded"
                onClick={handleSubmit}
            >
                Add
            </button>
        </div>
    );
};

export default AddTodo;
