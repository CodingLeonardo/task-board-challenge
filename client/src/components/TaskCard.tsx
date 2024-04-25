import {FC} from "react";
import {TaskStatus, Task, TaskIcon} from "../types.d";

import Time from "../assets/Time_atack_duotone.svg";
import Done from "../assets/Done_round_duotone.svg";
import Close from "../assets/close_ring_duotone.svg";

interface TaskCardProps extends Task {}

interface TaskCardIconProps {
  icon: TaskIcon;
}

interface TaskCardStatusIconProps {
  status: TaskStatus;
}

const TaskCardIcon: FC<TaskCardIconProps> = ({icon}) => {
  const Icons = {
    [TaskIcon.person]: "👨‍💻",
    [TaskIcon.message]: "💬",
    [TaskIcon.coffee]: "☕",
    [TaskIcon.exercise]: "🏋️‍♀️",
    [TaskIcon.books]: "📚",
    [TaskIcon.clock]: "⏰",
  };
  return (
    <figure className="flex justify-center items-center h-12 w-12 self-start bg-white-snow text-xl rounded-xl">
      {Icons[icon]}
    </figure>
  );
};

const TaskCardStatusIcon: FC<TaskCardStatusIconProps> = ({status}) => {
  const statusIcons = {
    [TaskStatus.inprogress]: Time,
    [TaskStatus.completed]: Done,
    [TaskStatus.wontdo]: Close,
  };
  return (
    <div className="flex justify-center items-center h-12 w-12 bg-orange-burnt rounded-xl">
      <img className="" src={statusIcons[status]} alt="TaskCard Status" />
    </div>
  );
};

const TaskCard: FC<TaskCardProps> = ({name, description, icon, status}) => {
  return (
    <div className="grid grid-cols-taskcard gap-x-4 items-center px-6 py-4 rounded-xl bg-orange-cream mb-3">
      <TaskCardIcon icon={icon} />
      <div className="pr-10">
        <h3 className="text-xl font-semibold text-black">{name}</h3>
        {description && <p className="text-base">{description}</p>}
      </div>
      {status && <TaskCardStatusIcon status={status} />}
    </div>
  );
};

export default TaskCard;
