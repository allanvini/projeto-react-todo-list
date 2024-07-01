import { useState, useEffect } from "react";
import { Header } from "./components/header";
import { Container } from "./components/container";
import { TodoCard } from "./components/todoCard";
import { InputField } from "./components/inputField";
import { SubmitButton } from "./components/submitButton";
import { loadTodos, saveTodos } from "./utils/localStorage";

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(loadTodos);

  function changeField(event) {
    let novoValor = event.target.value;
    setNewTodo(novoValor)
  }

  function addTodo() {
    let listaAtualizada = [...todos];
    listaAtualizada.push(
      {
        description: newTodo,
        status: false
      }
    );
    setTodos(listaAtualizada);
  }

  function removeTodo(index){
    let listaAtualizada = [...todos];
    listaAtualizada.splice(index, 1);
    setTodos(listaAtualizada);
  }

  function changeStatus(index){
    let listaAtualizada = [...todos];
    listaAtualizada[index].status = !listaAtualizada[index].status
    setTodos(listaAtualizada);
  }

  useEffect(()=>{
    saveTodos(todos);
  }, [todos, setTodos]);

  return (
    <div>
      <Container>
        <InputField value={newTodo} onChange={changeField} />
        <SubmitButton onClick={addTodo}>Adicionar Todo</SubmitButton>
        {
          todos.map((todo, index)=>(
            <TodoCard
              description={todo.description}
              onDelete={()=>{removeTodo(index)}}
              isChecked={todo.status}
              onCheck={()=>{changeStatus(index)}}
            />
          ))
        }
      </Container>

    </div>
  );
}

export default App;
