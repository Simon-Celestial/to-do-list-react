import React from 'react';
import PropTypes from 'prop-types';

const Note = ({
                  removeTask, task, index,
              }) => {
    return <div key={index} className="app-task" onClick={() => removeTask(task.id)}>
        <p className="task-title">{task.title}</p>
        <i className="task-description">{task.description}</i>
    </div>
};

Note.propTypes = {
    removeTask: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
  };

export default Note;
