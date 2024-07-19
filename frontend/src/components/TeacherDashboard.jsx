import React, { useState } from 'react';

const TeacherDashboard = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['India', 'America']);

  const handleCreatePoll = () => {};

  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Enter question..."
        className="text-3xl"
      />
      {options.map((option, index) => (
        <div className="flex gap-2">
          <input
            id={index}
            key={index}
            type="checkbox"
            value={option}
            onChange={(e) => {
              const newOptions = [...options];
              newOptions[index] = e.target.value;
              setOptions(newOptions);
            }}
            placeholder={`Option ${index + 1}`}
          />
          <label for={index}> {option} </label>
        </div>
      ))}
      <div className="flex justify-between gap-5">
        <button onClick={handleCreatePoll}>Create Poll</button>
        <button onClick={handleCreatePoll}>Add Option</button>
      </div>
      {/* Display live results */}
    </div>
  );
};

export default TeacherDashboard;
