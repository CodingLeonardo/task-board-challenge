import {FC, InputHTMLAttributes} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({className, ...rest}) => {
  return <input type="text" className={className} {...rest} />;
};

export default Input;
