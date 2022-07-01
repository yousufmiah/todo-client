// import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { Routes, Route, Link } from "react-router-dom";
import Task from "./components/Task";
import Todo from "./components/Todo";
import Calender from "./components/Calender";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="todo" element={<Todo />} />
        <Route path="calender" element={<Calender />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
