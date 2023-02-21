import React, { useState, useEffect } from "react";

const initialValues = {
    title: "",
    description: "",
};

const TodoForm = ({ editToDo, setEditToDo, addToDo, updateToDo }) => {
    const [values, setValues] = useState(initialValues);
    const { title, description } = values;
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        if (editToDo) {
            setValues(editToDo);
        } else {
            setValues(initialValues);
        }
    }, [editToDo]);

    const handleCancelEdit = () => {
        setEditToDo(null);
    };

    const handleInputChange = (e) => {
        const changesValues = {
            ...values,
            [e.target.name]: e.target.value,
        };
        setValues(changesValues);
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        if (title.trim() === "") {
            setError("Add a title");
            return;
        }
        if (description.trim() === "") {
            setError("Add a description");
            return;
        }
        if (editToDo) {
            updateToDo(values);
            setSuccess("Task updated successfully");
        } else {
            addToDo(values);
            setSuccess("Task added successfully");
            setValues(initialValues);
        }
        setTimeout(() => {
            setSuccess(null);
        }, 2000);
        setError(null);
    };

    return (
        <div>
            <h1>{editToDo ? "Edit Task" : "New Task"}</h1>
            {editToDo ? (
                <button
                    onClick={handleCancelEdit}
                    className="btn btn-sm btn-outline-warning mb-2"
                >
                    Cancel Edit
                </button>
            ) : null}

            <form onSubmit={handleSubmitForm}>
                <input
                    type="text"
                    placeholder="Title"
                    className="form-control"
                    name="title"
                    value={title}
                    onChange={handleInputChange}
                />

                <textarea
                    placeholder="Description"
                    className="form-control mt-2"
                    name="description"
                    value={description}
                    onChange={handleInputChange}
                />

                <button className="btn btn-primary w-100 mt-2">
                    {editToDo ? "Update Task" : "Add Task"}
                </button>
            </form>

            {error ? <div className="alert alert-danger mt-2">{error}</div> : null}
            {success ? (
                <div className="alert alert-success mt-2">{success}</div>
            ) : null}
        </div>
    );
};

export default TodoForm;
