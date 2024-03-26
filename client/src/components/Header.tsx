import {FC} from "react";
import Logo from "../assets/Logo.svg";
import Edit from "../assets/Edit_duotone.svg";

// import "./styles/Header.css"

interface HeaderProps {
  title: string;
  description: string;
}

const Header: FC<HeaderProps> = ({title, description}) => {
  return (
    <header className="grid grid-cols-header items-center gap-x-2 pt-12 pb-10">
      <img className="w-10" src={Logo} alt="Logo" />
      <h1 className="text-title">{title}</h1>
      <img className="w-6" src={Edit} alt="Edit" />
      <p className="text-base mt-2 col-start-2">{description}</p>
    </header>
  );
};

export default Header;
