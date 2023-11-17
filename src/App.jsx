import React, {useState} from "react";
import "./App.scss";
import AddNote from "./assets/Components/AddNote";
import NoteList from "./assets/Components/NoteList";
import Navbar from "./assets/Components/Navbar/Navbar";

function App() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);

    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const submitHandler = () => {
        if (!title.trim() || !description.trim() || isModalVisible) {
            openModal();
            return;
        }
        setTasks([...tasks, {title: title, description: description, id: count}]);
        setCount(prevCount => prevCount + 1);
        setTitle("");
        setDescription("");
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            submitHandler();
        }
    };

    const removeTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <div className="app-wrapper">
            <Navbar count={tasks.length}/>
            {isModalVisible && (
                <div className="modal">
                    <div className="modal-content">
                        <p>Please add description and title!</p>
                        <span className="close" onClick={closeModal}>X</span>
                    </div>
                </div>
            )}
            <NoteList tasks={tasks} removeTask={removeTask}/>

            <AddNote
                title={title}
                setTitle={setTitle}
                handleKeyDown={handleKeyDown}
                description={description}
                setDescription={setDescription}
                submitHandler={submitHandler}
                disabled={isModalVisible}
            />
        </div>
    );
}

export default App;
