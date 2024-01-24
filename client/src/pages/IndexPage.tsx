import Logo from "../assets/Logo.svg"
import Edit from "../assets/Edit_duotone.svg"

import Time from "../assets/Time_atack_duotone.svg"
import Done from "../assets/Done_round_duotone.svg"
import Close from "../assets/close_ring_duotone.svg"

import "../styles/IndexPage.css"

const IndexPage = () => {
  return (
    <>
      <div className="container">
      <header className="Header">
        <img className="Header-logo" src={Logo} alt="Logo" />
        <h1 className="Header-title">My Task Board</h1>
        <img className="Header-edit" src={Edit} alt="Edit" />
        <p className="Header-description">Tasks to keep organised</p>
      </header>
      <section className="IndexPage">
        <div className="TaskCard TaskCard__inprogress">
          <figure className="TaskCard-icon">
            ⏰
          </figure>
          <div className="TaskCard-content">
            <h3 className="TaskCard-title">Task in Progress</h3>
          </div>
          <div className="TaskCard-status">
            <img src={Time} alt="" />
          </div>
        </div>
        <div className="TaskCard TaskCard__completed">
          <figure className="TaskCard-icon">
            🏋️‍♀️
          </figure>
          <div className="TaskCard-content">
            <h3 className="TaskCard-title">Task Completed</h3>
          </div>
          <div className="TaskCard-status">
            <img src={Done} alt="" />
          </div>
        </div>
        <div className="TaskCard TaskCard__wontdo">
          <figure className="TaskCard-icon">
            ☕
          </figure>
          <div className="TaskCard-content">
            <h3 className="TaskCard-title">Task Won’t Do</h3>
          </div>
          <div className="TaskCard-status">
            <img src={Close} alt="" />
          </div>
        </div>
        <div className="TaskCard">
          <figure className="TaskCard-icon">
            📚
          </figure>
          <div className="TaskCard-content">
            <h3 className="TaskCard-name">Task To Do</h3>
            <p className="TaskCard-description">Work on a Challenge on devChallenges.io, learn TypeScript</p>
          </div>
        </div>
        <div className="IndexPage-addtask">
          <figure className="IndexPage-addtask__icon">
            <img src={Close} alt="" />
          </figure>
          <h3 className="IndexPage-addtask__title">Add new task</h3>
        </div>
      </section>
      </div>
    </>
  )
}

export default IndexPage