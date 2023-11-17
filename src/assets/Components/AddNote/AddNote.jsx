import React from 'react';

const AddNote = ({
                     title,
                     setTitle,
                     handleKeyDown,
                     description,
                     setDescription,
                     submitHandler,
                     disabled,
                 }) => {
    return <div className="note-adder">
        <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
        />
        <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
        />
        <button type="button" onClick={submitHandler} className="add-note">
            ADD NOTE
        </button>
    </div>;
};

export default AddNote;
