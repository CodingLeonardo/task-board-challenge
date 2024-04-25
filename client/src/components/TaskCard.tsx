import {FC} from "react";
import {Link} from "react-router-dom";
import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";
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
    <div
      className={twMerge(
        clsx("flex justify-center items-center h-12 w-12 rounded-xl", {
          "bg-orange-burnt": status === TaskStatus.inprogress,
          "bg-green-forest": status === TaskStatus.completed,
          "bg-red-brick": status === TaskStatus.wontdo,
        }),
      )}>
      <img className="" src={statusIcons[status]} alt="TaskCard Status" />
    </div>
  );
};

const TaskCard: FC<TaskCardProps> = ({id, name, description, icon, status}) => {
  return (
    <Link
      to={`/${id}`}
      className={twMerge(
        clsx(
          "grid grid-cols-taskcard gap-x-4 items-center px-6 py-4 rounded-xl mb-3 bg-gray-light",
          {
            "bg-orange-cream": status === TaskStatus.inprogress,
            "bg-green-mint": status === TaskStatus.completed,
            "bg-pink-blush": status === TaskStatus.wontdo,
          },
        ),
      )}>
      <TaskCardIcon icon={icon} />
      <div className="pr-10">
        <h3 className="text-xl font-semibold text-black">{name}</h3>
        {description && <p className="text-base">{description}</p>}
      </div>
      {status && <TaskCardStatusIcon status={status} />}
    </Link>
  );
};

export default TaskCard;
