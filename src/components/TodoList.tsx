import { HiOutlineTrash } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { removeTodo, toggleTodo } from "../store/todo/todoSlice";

const TodoList = () => {
    const todo = useSelector((state: RootState) => state.todo);
    const dispatch = useDispatch();

    const handleRemove = (id: string) => {
        dispatch(removeTodo(id));
    };

    const handleDone = (id: string) => {
        dispatch(toggleTodo(id));
    };

    return (
        <div className="mt-5">
            {todo.map((item) => {
                return (
                    <div
                        className="flex items-center justify-between py-4 px-5 rounded-md bg-white shadow my-3"
                        key={item.id}
                        onClick={() => handleDone(item.id)}
                    >
                        <p className={item.isDone ? "line-through" : ""}>
                            {item.text}
                        </p>
                        <button onClick={() => handleRemove(item.id)}>
                            <HiOutlineTrash color="#c21919" size={20} />
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default TodoList;
