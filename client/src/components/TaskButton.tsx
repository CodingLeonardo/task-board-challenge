import {FC} from "react";
import {Link} from "react-router-dom";
import Close from "../assets/close_ring_duotone.svg";

interface TaskButtonProps {
  boardId: string;
}

const TaskButton: FC<TaskButtonProps> = ({boardId}) => {
  return (
    <Link
      to={`/${boardId}/new`}
      className="grid grid-cols-taskcard gap-x-4 items-center px-6 py-4 bg-white-eggshell rounded-xl">
      <figure className="flex justify-center items-center h-12 w-12 bg-orange-burnt rounded-xl">
        <img src={Close} alt="" />
      </figure>
      <h3 className="text-base font-semibold text-black">Add new task</h3>
    </Link>
  );
};

export default TaskButton;
