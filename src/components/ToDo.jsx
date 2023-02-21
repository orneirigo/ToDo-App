import React from "react";

const ToDo = ({ task, setEditToDo, handleComplete, handleDelete }) => {
    return (
        <div className="card mt-2">
            <div className="card-body">
                <h3 className="card-title">{task.title}</h3>
                <p className="card-text">{task.description}</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => setEditToDo(task)}
                    >
                        Edit
                    </button>

                    <button
                        className={`btn btn-sm ${task.completed ? "btn-success" : "btn-outline-success"} me-2`}
                        onClick={() => handleComplete(task.id)}
                    >
                        {task.completed ? "Done" : "Finish"}
                    </button>

                    <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(task.id)}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToDo;
