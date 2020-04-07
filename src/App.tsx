import React from "react";

type FormElem = React.FormEvent<HTMLFormElement>;
interface ITodo {
  text: string;
  complete: boolean;
}

function App(): JSX.Element {
  const { useState } = React;
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<ITodo[]>([]);

  const onSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue("");
    console.log("ok");
  };

  const addTodo = (text: string): void => {
    const newTodo: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodo);
  };

  const completeTodo = (index: number): void => {
    const newTodos: ITodo[] = todos;
    newTodos[index].complete = !newTodos[index].complete;
    setTodos([...newTodos]);
  };

  const removeTodo = (index: number): void => {
    const newTodos: ITodo[] = todos;
    newTodos.splice(index, 1);
    setTodos([...newTodos]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ marginTop: "5rem" }}>Todo List</h1>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          required
        />
        <button
          type="submit"
          style={{ background: "yellow", padding: ".5rem" }}
        >
          Add todo
        </button>
      </form>
      <section style={{ marginTop: "1rem" }}>
        {todos.map((todo: ITodo, index: number) => {
          return (
            <div
              key={todo.text}
              style={{
                marginTop: "1rem",
                textDecoration: todo.complete ? "line-through" : "none"
              }}
            >
              {todo.text} taken
              <br />
              <button type="submit" onClick={() => completeTodo(index)}>
                {" "}
                {todo.complete ? "Incomplete" : "Complete"}
              </button>
              <button type="button" onClick={() => removeTodo(index)}>
                &times;
              </button>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
