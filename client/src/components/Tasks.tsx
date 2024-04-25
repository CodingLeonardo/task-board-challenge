import {FC} from "react";
import TaskCard from "./TaskCard";
import {Task} from "../types.d";

interface TasksProps {
  tasks: Task[];
}

const Tasks: FC<TasksProps> = ({tasks}) => {
  return tasks.map((props, key) => {
    return <TaskCard key={key} {...props} />;
  });
};

export default Tasks;
