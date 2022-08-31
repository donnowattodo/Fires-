import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import TodoAdd from "./pages/TodoAdd";
import TodoHome from "./pages/TodoHome";
import TodoDetails from "./pages/TodoDetails";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<TodoHome />} />
        <Route path="/add" element={<TodoAdd />} />
        <Route path="/list" element={<TodoList />} />
        <Route path="/detail/:id" element={<TodoDetails />} />
        <Route path="*" element={<div>404 error 없는페이지임</div>} />
      </Routes>
    </>
  );
}

export default App;
