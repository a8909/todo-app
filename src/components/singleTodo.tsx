import React, { useEffect, useRef, useState } from "react";
import { TodoModel } from "../models/todoModel";
import { useDispatch } from "react-redux";
import { onEdit } from "../state/eventHandler/todoEvent";
interface props {
  todo: TodoModel;
  todos: TodoModel[];
  onDelete: (id: number) => void;
  onComplete: (id: number) => void;
}
const SingleTodo: React.FC<props> = ({ todo, onDelete, onComplete }) => {
  const InputRef = useRef<HTMLInputElement>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [editing, setEditing] = useState(todo.todo);
  const dispatch = useDispatch();

  const onEditsubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    dispatch(onEdit({ id, value: editing }));
    setEdit(false);
  };

  useEffect(()=>{
    InputRef.current?.focus();
  }, [edit])

  return (
    <form className="flex justify-between items-center mb-3 mt-3 p-2 bg-yellow-100 rounded-sm" onSubmit={(e)=> onEditsubmit(e, todo.id)}>
      {edit ? (
        <input className="w-full mr-3" ref={InputRef} value={editing} onChange={(e) => setEditing(e.target.value)} />
      ) : (
        <div className="flex-1 w-10">{todo.todo}</div>
      )}
      <div className="flex gap-2">
        <span
          className="bg-transparent hover:bg-blue-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => {
            if (!edit && !todo.completed) {
              setEdit(!edit);
            }
          }}
          
        >
          Edit
        </span>
        <span
          className="bg-red-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => onDelete(todo.id)}
        >
          delete
        </span>
        <span
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          onClick={() => onComplete(todo.id)}
        >
          {todo.completed ? "completed" : "uncomplete"}
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
