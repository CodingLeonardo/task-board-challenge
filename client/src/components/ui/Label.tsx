import {FC, LabelHTMLAttributes} from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label: FC<LabelProps> = ({className, htmlFor, ...rest}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={className + " text-gray-steel text-xs font-medium mb-2"}
      {...rest}
    />
  );
};

export default Label;
