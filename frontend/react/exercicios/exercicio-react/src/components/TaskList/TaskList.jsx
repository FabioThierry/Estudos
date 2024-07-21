import { useState, useEffect } from "react";
import TaskItem from "../TaskItem/TaskItem";
import AddTask from "../AddTask/AddTask";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [index, setIndex] = useState(-1);
  const [newTask, setNewTask] = useState("");

  // Carregar tarefas do localStorage na montagem do componente
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Salvar tarefas no localStorage sempre que a lista de tarefas mudar
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let task = newTask.trim();
    if (task === "") return;

    if (tasks.indexOf(task) !== -1) {
      return;
    }

    const newTasks = [...tasks];

    if (index === -1) {
      setTasks([...newTasks, task]);
    } else {
      newTasks[index] = task;
      setTasks([...newTasks]);
      setIndex(-1);
    }
    setNewTask("");
  };

  const removeTask = (taskIndex) => {
    setTasks(tasks.filter((_, i) => i !== taskIndex));
  };

  return (
    <div className="task-list">
      <AddTask
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        newTask={newTask}
      />
      {tasks.length > 0 &&
        tasks.map((task, taskIndex) => (
          <TaskItem
            key={taskIndex}
            task={task}
            index={taskIndex}
            removeTask={removeTask}
          />
        ))}
    </div>
  );
};

export default TaskList;
