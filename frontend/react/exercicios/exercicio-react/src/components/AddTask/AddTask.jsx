// import { useState } from "react";
import PropTypes from "prop-types";
import "./AddTask.css";
import addTaskIcon from "../../assets/task-list-add-svgrepo-com.svg";

const AddTask = ({ handleChange, handleSubmit, newTask }) => {
  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={handleChange}
        placeholder="Adicionar nova tarefa"
      />
      <button type="submit">
        <img src={addTaskIcon} alt="Adicionar" />
      </button>
    </form>
  );
};

AddTask.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTask: PropTypes.string.isRequired,
};

export default AddTask;
