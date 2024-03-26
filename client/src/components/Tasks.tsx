import {FC} from "react";
import TaskCard from "./TaskCard";
import {Task} from "../types.d";

interface TasksProps {
  tasks: Task[];
}

const Tasks: FC<TasksProps> = ({tasks}) => {
  return tasks.map(({name, description, icon, status}, key) => {
    return (
      <TaskCard
        key={key}
        name={name}
        description={description}
        icon={icon}
        status={status}
      />
    );
  });
};

export default Tasks;
