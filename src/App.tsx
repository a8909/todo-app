import React, { useState } from 'react';
import './App.css';
import Content from "./components/content"
import { TodoModel } from './models/todoModel';
import SingleTodo from './components/singleTodo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './state/store';
import { complete, remove } from './state/eventHandler/todoEvent';

const App : React.FC = () => {
  const todos = useSelector((state: RootState)=> state['todo-slice'].todos);
  const dispatch = useDispatch();
  const[todo, setTodo] = useState("");
  // const [todos, setTodos] = useState<TodoModel[]>([]);
  const handleSubmit =(e: React.FormEvent) =>{
    e.preventDefault();
    if(todo === ""){
      return;
    }
    dispatch({
      type: "todo-slice/add",
      payload: { id: Date.now(), todo, completed: false },
    });
    setTodo("");
  }

  return (
    <div className="flex flex-col items-center ">
      <Content todo={todo} setTodo={setTodo} onSubmit={handleSubmit} />
      <div className="flex justify-between flex-wrap w-4/5 max-w-2xl">
        {todos.map((todo) => (
          <SingleTodo
            key={todo.id}
            todo={todo}
            todos={todos}
            onDelete={() => dispatch(remove( todo.id ))}
            onComplete={() => dispatch(complete(todo.id))}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
