import Logo from "../assets/Logo.svg"
import Edit from "../assets/Edit_duotone.svg"

import "./styles/Header.css"

const Header = () => {
  return (
    <header className="Header">
      <img className="Header-logo" src={Logo} alt="Logo" />
      <h1 className="Header-title">My Task Board</h1>
      <img className="Header-edit" src={Edit} alt="Edit" />
      <p className="Header-description">Tasks to keep organised</p>
    </header>
  )
}

export default Header