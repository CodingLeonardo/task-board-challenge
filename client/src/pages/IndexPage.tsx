import { useState } from "react"
import Header from "../components/Header"
import Tasks from "../components/Tasks"
import TaskEdit from "../components/TaskEdit"

import Close from "../assets/close_ring_duotone.svg"
import "./styles/IndexPage.css"
import { createPortal } from "react-dom"

const IndexPage = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <div className="container">
        <Header />
        <section className="IndexPage">
          <Tasks />
          <div className="IndexPage-addtask">
            <figure className="IndexPage-addtask__icon">
              <img src={Close} alt="" />
            </figure>
            <h3 className="IndexPage-addtask__title">Add new task</h3>
          </div>
        </section>
      </div>
      { showModal && createPortal(<TaskEdit />, document.getElementById("modal")!) }
    </>
  )
}

export default IndexPage