import { Toaster } from "react-hot-toast";
import Home from "./components/Home";

const App = () => {
    return (
        <div className="w-full h-screen bg-gray-100">
            <Home />
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};

export default App;
