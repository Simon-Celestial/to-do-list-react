import React from 'react';
import Note from "../Note";
import PropTypes from "prop-types";

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

NoteList.propTypes = {
    tasks: PropTypes.object.isRequired,
    removeTask: PropTypes.func.isRequired,
  };

export default NoteList;
