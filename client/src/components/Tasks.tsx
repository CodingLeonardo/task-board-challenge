import TaskCard from "./TaskCard";
import {useTasks} from "../store";
const Tasks = () => {
  const tasks = useTasks(state => state.tasks);

  console.log(tasks);

  return tasks.map(({name, description, icon, status}: Task) => {
    return (
      <TaskCard
        name={name}
        description={description}
        icon={icon}
        status={status}
      />
    );
  });
};

export default Tasks;
