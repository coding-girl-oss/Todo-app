import React, { useState } from "react";
import { add, remove, toggle } from "../redux/todosSlice";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const check = useSelector((state) => state.todos.check);
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = () => {
    if (todo.trim()) {
      dispatch(add(todo));
      setTodo("");
    }
  };

  const handleRemove = (index) => {
    dispatch(remove(index));
  };

  const handleEdit = (index) => {
    dispatch(remove(index));
    setTodo(todos[index]);
  };
  const handleToggle = (index) => {
    dispatch(toggle(index));
  };

  return (
    <>
      <div className=" flex justify-center items-center">
     
        <div className="min-h-[400px] my-6 bg-gradient-to-bl from-[#ca33ff] to-black flex flex-col gap-6 border-spacing-1 rounded-lg shadow-md bg-opacity-40">
          <div className="flex mx-32 my-2 gap-1">
            <h1 className="text-3xl text-white font-bold text-center">
              Todo-app
            </h1>
            <lord-icon
              src="https://cdn.lordicon.com/lsrcesku.json"
              trigger="hover"
              stroke="bold"
              colors="primary:#8930e8,secondary:#8930e8,tertiary:#ffc738,quaternary:#4f1091"
              style={{
                width: "40px",
                height: "40px",
              }}
            ></lord-icon>
          </div>
          <div className="mx-4 flex gap-2">
            <input
              value={todo}
              onChange={handleChange}
              className="w-[250px] py-2 px-3 rounded-lg outline-0 bg-transparent border-[1px] border-black font-bold"
              type="text"
              placeholder="Enter todo"
            />
            <button
              onClick={handleAdd}
              disabled={todo.length < 3}
              className="w-[100px] py-2 px-3 rounded-lg bg-gradient-to-r from-black to-[#f933ff] hover:from-[#f933ff] hover:to-black hover:scale-105 font-bold text-white "
            >
              Save
            </button>
          </div>

          <h1 className="text-[20px] text-white mx-2 font-semibold">Your Todos:</h1>
          <ul className="mx-3 text-white gap-2">
           {todos.length>0 ? ( todos.map((todo, index) => (
              <li
                key={index}
                className="flex justify-between py-2 border-b border-gray-500"
              >
                <input onClick={() => handleToggle(index)} type="checkbox" />
                <p className={check[index] ? "line-through" : ""}>{todo}</p>
                <div>
                  <button
                    onClick={() => handleEdit(index)}
                    className="delete-btn text-red-500 hover:text-red-700"
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/zfzufhzk.json"
                      trigger="hover"
                      stroke="bold"
                      colors="primary:#121131,secondary:#242424,tertiary:#8930e8,quaternary:#6c16c7,quinary:#3a3347"
                      style={{ width: "40px", height: "30px" }}
                    ></lord-icon>
                  </button>
                  <button
                    onClick={() => handleRemove(index)}
                    className="delete-btn text-red-500 hover:text-red-700"
                  >
                    <lord-icon
                      src="https://cdn.lordicon.com/xekbkxul.json"
                      trigger="hover"
                      colors="primary:#8930e8,secondary:#242424,tertiary:#646e78,quaternary:#ebe6ef"
                      style={{
                        width: "40px",
                        height: "30px",
                      }}
                    ></lord-icon>
                  </button>
                </div>
              </li>
            ))
          ) : (<p className="text-center">No todos to display</p>)}
          </ul>
        </div>
      
      </div>
    </>
  );
};

export default Todo;
