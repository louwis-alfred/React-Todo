import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { todos, handleDeleteTodo, handleEditTodo } = props;

  return (
    <ul>
      {todos.map((todo, todoIndex) => (
        <TodoCard
          key={todoIndex}
          index={todoIndex}
          handleDeleteTodo={handleDeleteTodo} 
          handleEditTodo={handleEditTodo}
        >
          <p>{todo}</p>
        </TodoCard>
      ))}
    </ul>
  );
}
