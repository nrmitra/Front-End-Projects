import React, { useState } from "react";

const TerritoryForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [manager, setManager] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, manager });
    setName("");
    setManager("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Territory Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Manager:</label>
        <input
          type="text"
          value={manager}
          onChange={(e) => setManager(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Territory</button>
    </form>
  );
};

export default TerritoryForm;
