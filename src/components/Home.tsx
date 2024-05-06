import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Home = () => {
    return (
        <div className="max-w-[500px] mx-auto pt-5">
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default Home;
