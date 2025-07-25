import { Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <div className="w-[100vw] min-w-2xs h-[calc(100vh-130px] flex flex-col justify-center items-center relative">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />}></Route>
          <Route path="/todoList/:month:date" element={<TodoList />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
