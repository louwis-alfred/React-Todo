import { useState, useEffect } from "react";
import TodoInput from "./pages/TodoInput";
import TodoList from "./pages/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList) {
    localStorage.setItem("todos", JSON.stringify({ todos: newList }));
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  // Delete a todo by its index
  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((_, todoIndex) => todoIndex !== index);
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  // Edit a todo
  function handleEditTodo(index) {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited); // Set the todo value to be edited
    handleDeleteTodo(index); // Optionally delete the todo after setting it
  }


  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (localTodos) {
      setTodos(JSON.parse(localTodos).todos || []);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Application Header */}
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-800">
        Todo App
      </h1>
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg border border-gray-200">

        <TodoInput
          todoValue={todoValue}
          setTodoValue={setTodoValue}
          handleAddTodos={handleAddTodos}
        />

        <TodoList
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
          todos={todos}
        />
      </div>
    </div>
  );
}

export default App;
