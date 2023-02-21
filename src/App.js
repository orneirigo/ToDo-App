import React, { useState, useEffect } from "react";
import TodoForm from "./components/ToDoForm";
import TodoList from "./components/ToDoList";

const listToDo = [
    {
        id: 1,
        title: "ToDo 1",
        description: "Description 1",
        completed: false,
    },
];

function App() {
    const [toDos, setToDos] = useState(listToDo);
    const [editToDo, setEditToDo] = useState(null);

    useEffect(() => { 
    }, [toDos]);

    const addToDo = (infoForm) => {
        const addedToDo = {
            id: Date.now(),
            ...infoForm,
            completed: false,
        };
        setToDos([addedToDo, ...toDos]);
    };

    const updateToDo = (infoEdit) => {
        const updatedToDos = toDos.map((element) => element.id === infoEdit.id ? infoEdit : element);
        setToDos(updatedToDos);
    };

    const handleComplete = (todoId) => {
        const completedToDos = toDos.map((element) => element.id === todoId ? { ...element, completed: !element.completed } : element);
        setToDos(completedToDos);
    };

    const handleDelete = (todoId) => {
        if (editToDo && todoId === editToDo.id) setEditToDo(null);
        const deletedToDos = toDos.filter((element) => element.id !== todoId);
        setToDos(deletedToDos);
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-8">
                    <TodoList
                        toDos={toDos}
                        setEditToDo={setEditToDo}
                        handleComplete={handleComplete}
                        handleDelete={handleDelete}
                    />
                </div>
                <div className="col-4">
                    <TodoForm
                        editToDo={editToDo}
                        setEditToDo={setEditToDo}
                        addToDo={addToDo}
                        updateToDo={updateToDo}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
