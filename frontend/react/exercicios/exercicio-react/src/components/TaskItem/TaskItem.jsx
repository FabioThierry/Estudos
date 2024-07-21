import "./TaskItem.css";
import PropTypes from "prop-types";

const TaskItem = ({ task, index, removeTask }) => {
  return (
    <div className="task-item">
      <span>{task}</span>
      <button onClick={() => removeTask(index)}>Remover</button>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  removeTask: PropTypes.func.isRequired,
};

export default TaskItem;
