import {InputHTMLAttributes, forwardRef} from "react";
import {TaskIcon} from "../../types/task";

interface TaskIconFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  field: TaskIcon;
}

const TaskIconField = forwardRef<HTMLInputElement, TaskIconFieldProps>(
  ({children, field, ...props}, ref) => {
    return (
      <>
        <label
          className="flex items-center justify-center w-12 h-12 text-xl cursor-pointer rounded-xl bg-gray-light has-[:checked]:bg-orange-cream"
          htmlFor={field}>
          <input
            className="appearance-none cursor-pointer"
            type="radio"
            id={field}
            name={field}
            value={field}
            ref={ref}
            {...props}
          />
          {children}
        </label>
      </>
    );
  },
);

export default TaskIconField;
