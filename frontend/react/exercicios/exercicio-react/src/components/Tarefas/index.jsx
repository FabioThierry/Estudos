import { FaTrash, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";

import "./Tarefas.css";

export default function Tarefas({ tarefas, handleDelete, handleEdit }) {
  return (
    <ul className="tarefas">
      {tarefas.map((tarefa, index) => (
        <li key={tarefa}>
          {tarefa}
          <div>
            <button className="edit" onClick={(e) => handleEdit(e, index)}>
              <FaEdit />{" "}
            </button>{" "}
            <button className="delete" onClick={(e) => handleDelete(e, index)}>
              <FaTrash />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};
