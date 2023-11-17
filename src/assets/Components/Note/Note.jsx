import React from 'react';

const Note = ({
                  removeTask, task, index,
              }) => {
    return <div key={index} className="app-task" onClick={() => removeTask(task.id)}>
        <p className="task-title">{task.title}</p>
        <i className="task-description">{task.description}</i>
    </div>
};

export default Note;
