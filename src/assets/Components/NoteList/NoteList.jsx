import React from 'react';
import Note from "../Note";

const NoteList = ({
                      tasks, removeTask
                  }) => {
    return <div className="app-notes">
        {(
            tasks.length > 0 ? (
                tasks.map((task, index) => (
                    <Note key={index} removeTask={removeTask} task={task} index={index}/>
                ))
            ) : (
                <p className="empty-note">You don&apos;t have any notes yet</p>
            )
        )}</div>;
};

export default NoteList;
