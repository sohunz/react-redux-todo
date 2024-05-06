import { HiOutlineTrash } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const TodoList = () => {
    const todo = useSelector((state: RootState) => state.todo);
    console.log(todo);

    return (
        <div className="mt-5">
            {todo.map((item) => {
                return (
                    <div
                        className="flex items-center justify-between py-4 px-5 rounded-md bg-white shadow my-3"
                        key={item.id}
                    >
                        <p className="line-clamp-1">{item.text}</p>
                        <button>
                            <HiOutlineTrash color="#c21919" size={20} />
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default TodoList;
