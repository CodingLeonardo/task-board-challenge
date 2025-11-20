import {InputHTMLAttributes, forwardRef} from "react";
import {TaskStatus} from "../../types/task";
import {twMerge} from "tailwind-merge";
import {clsx} from "clsx";

interface TaskStatusFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  field: TaskStatus;
}

const TaskStatusField = forwardRef<HTMLInputElement, TaskStatusFieldProps>(
  ({children, field, ...props}, ref) => {
    const textsStatus: Record<TaskStatus, string> = {
      [TaskStatus.inprogress]: "In Progress",
      [TaskStatus.completed]: "Completed",
      [TaskStatus.wontdo]: "Won't Do",
      [TaskStatus.none]: "None",
    };
    return (
      <>
        <label
          className="w-full grid grid-cols-taskStatus items-center gap-x-3 p-1 border-2 border-gray-light rounded-2xl cursor-pointer has-[:checked]:border-blue-electric"
          htmlFor={field}>
          <figure
            className={twMerge(
              clsx(
                "w-fit flex justify-center items-center bg-orange-burnt rounded-xl",
                {
                  "bg-orange-burnt": field === TaskStatus.inprogress,
                  "bg-green-forest": field === TaskStatus.completed,
                  "bg-red-brick": field === TaskStatus.wontdo,
                },
              ),
            )}>
            {children}
          </figure>
          <h3 className="text-base font-medium">{textsStatus[field]}</h3>
          <input
            className="appearance-none w-7 h-7 mr-3 checked:bg-[url(/src/assets/Done_round.svg)] checked:bg-blue-electric checked:bg-[length:1.25rem] checked:bg-center checked:bg-no-repeat checked:rounded-full"
            type="radio"
            value={field}
            id={field}
            ref={ref}
            {...props}
          />
        </label>
      </>
    );
  },
);

export default TaskStatusField;
