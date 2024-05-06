import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Home = () => {
    return (
        <div className="max-w-[600px] mx-auto p-5">
            <AddTodo />
            <TodoList />
        </div>
    );
};

export default Home;
