import {FC} from "react";
import {Link} from "react-router-dom";
import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";
import {TaskStatus, Task, TaskIcon} from "../types/task";

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
  const taskIcons: Record<TaskIcon, string> = {
    [TaskIcon.Person]: "👨‍💻",
    [TaskIcon.Message]: "💬",
    [TaskIcon.Coffee]: "☕",
    [TaskIcon.Exercise]: "🏋️‍♀️",
    [TaskIcon.Books]: "📚",
    [TaskIcon.Clock]: "⏰",
  };
  return (
    <figure className="flex justify-center items-center h-12 w-12 self-start bg-white-snow text-xl rounded-xl">
      {taskIcons[icon]}
    </figure>
  );
};

const TaskCardStatusIcon: FC<TaskCardStatusIconProps> = ({status}) => {
  const statusIcons: Record<TaskStatus, string> = {
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

const TaskCard: FC<TaskCardProps> = ({
  id,
  id_board,
  name,
  description,
  icon,
  status,
}) => {
  return (
    <Link
      to={`/${id_board}/${id}`}
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
