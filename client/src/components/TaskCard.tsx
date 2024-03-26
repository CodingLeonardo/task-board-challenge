import {FC} from "react";
import {TaskStatus, Task} from "../types.d";

import Time from "../assets/Time_atack_duotone.svg";
import Done from "../assets/Done_round_duotone.svg";
import Close from "../assets/close_ring_duotone.svg";

interface TaskCardProps extends Task {}

const TaskCard: FC<TaskCardProps> = ({name, description, icon, status}) => {
  const getStatusIcon = () => {
    if (status === TaskStatus.inprogress) {
      return Time;
    }
    if (status === TaskStatus.completed) {
      return Done;
    }
    if (status === TaskStatus.wontdo) {
      return Close;
    }
  };

  return (
    <div className="grid grid-cols-taskcard gap-x-4 items-center px-6 py-4 rounded-xl bg-orange-cream mb-3">
      <figure className="flex justify-center items-center h-12 w-12 self-start bg-white-snow text-xl rounded-xl">
        {icon}
      </figure>
      <div className="pr-10">
        <h3 className="text-xl font-semibold text-black">{name}</h3>
        {description && <p className="text-base">{description}</p>}
      </div>
      {status && (
        <div className="flex justify-center items-center h-12 w-12 bg-orange-burnt rounded-xl">
          <img className="" src={getStatusIcon()} alt="TaskCard Status" />
        </div>
      )}
    </div>
  );
};

export default TaskCard;
