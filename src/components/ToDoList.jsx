import React from "react";
import ToDo from "./ToDo";

const TodoList = ({ toDos, setEditToDo, handleComplete, handleDelete }) => {
    return (
        <div>
            <h1>Task List</h1>
            {toDos.length === 0 ? (
                <div className="alert alert-primary">
                    Please, add a new task!
                </div>
            ) : (
                toDos.map((task) => (
                    <ToDo
                        task={task}
                        key={task.id}
                        setEditToDo={setEditToDo}
                        handleComplete={handleComplete}
                        handleDelete={handleDelete}
                    />
                ))
            )}
        </div>
    );
};

export default TodoList;
