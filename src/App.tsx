import { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import Pagination from "./components/Pagination";
import {
  fetchTodos,
  addTodo,
  editTodo,
  deleteTodo,
} from "./resources/utils/api";
import { Todo } from "./components/types";
import Button from "./components/Button";

function App() {
  // Define state variables
  const [todos, setTodos] = useState<Todo[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const todosPerPage = 6; // Number of todos to display per page

  // Fetch todos when the page loads or when the currentPage changes
  useEffect(() => {
    fetchTodos(currentPage, todosPerPage)
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, [currentPage]);

  // Function to add a new todo
  const addTodoHandler = async (title: string) => {
    try {
      const newTodo = await addTodo(title);
      setTodos([...todos, newTodo]);
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Function to edit a todo
  const editTodoHandler = async (id: number, updatedTitle: string) => {
    try {
      const updatedTodo = await editTodo(id, updatedTitle);
      const updatedTodos = todos.map((todo) =>
        todo.id === id ? updatedTodo : todo
      );
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error editing todo:", error);
    }
  };

  // Function to delete a todo
  const deleteTodoHandler = async (id: number) => {
    try {
      await deleteTodo(id);
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold mb-4">ToDo</h1>

        <div className="flex gap-1">
          <img src="/public/assets/settings.svg" alt="settings icon" />
          <img src="/public/assets/bell.svg" alt="Notification icon" />
          <img src="/public/assets/Dropdown.png" alt="Profile dropdown" />
        </div>
      </nav>
      <hr className="" />

      <section className="">
        <div>
          <h2 className=" text-gray-900 text-3xl font-semibold leading-[38px]">
            Good morning!
          </h2>
          <p className="w-[893px] text-slate-600 text-base font-normal leading-normal">
            You got some task to do.{" "}
          </p>
        </div>
        <div className="">
          <Button
            variant="primary"
            onClick={() => console.log("Primary button clicked")}
          >
            <span>
              <img src="/public/assets/plus.svg" alt="" />
            </span>
            <p className="text-white text-sm font-semibold leading-tight">
              Create New Task
            </p>
          </Button>
        </div>
      </section>

      <TodoForm onAddTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        onEditTodo={editTodoHandler}
        onDeleteTodo={deleteTodoHandler}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(todos.length / todosPerPage)}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default App;
