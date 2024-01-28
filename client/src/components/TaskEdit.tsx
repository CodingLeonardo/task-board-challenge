import Close1 from "../assets/close_ring_duotone-1.svg"
import Time from "../assets/Time_atack_duotone.svg"
import Done from "../assets/Done_round_duotone.svg"
import Done1 from "../assets/Done_round.svg"
import Close from "../assets/close_ring_duotone.svg"
import Thrash from "../assets/Trash.svg"

import "./styles/TaskEdit.css"

const TaskEdit = () => {
  return (
    <form className="TaskEdit">
      <div className="TaskEdit-header">
        <h2 className="TaskEdit-header__title">Task details</h2>
        <div className="TaskEdit-header__close">
          <img src={Close1} alt="Close" />
        </div>
      </div>
      <div className="TaskEdit-name">
        <label htmlFor="name">Task name</label>
        <input type="text" name="name" id="name" placeholder="Enter a task name" />
      </div>
      <div className="TaskEdit-description">
        <label htmlFor="description">Description</label>
        <textarea name="description" id="" cols={20} rows={7} placeholder="Enter a short description"></textarea>
      </div>
      <div className="TaskEdit-icon">
        <h3 className="TaskEdit-icon__title">Icon</h3>
        <div className="TaskEdit-icon__items">
          <div className="TaskEdit-icon__item">
            <input type="radio" name="icon" id="person" />
            <label htmlFor="person">👨‍💻</label>
          </div>
          <div className="TaskEdit-icon__item">
            <input type="radio" name="icon" id="message" />
            <label htmlFor="message">💬</label>
          </div>
          <div className="TaskEdit-icon__item">
            <input type="radio" name="icon" id="coffee" />
            <label htmlFor="coffee">☕</label>
          </div>
          <div className="TaskEdit-icon__item">
            <input type="radio" name="icon" id="exercise" />
            <label htmlFor="exercise">🏋️‍♀️</label>
          </div>
          <div className="TaskEdit-icon__item">
            <input type="radio" name="icon" id="books" />
            <label htmlFor="books">📚</label>
          </div>
          <div className="TaskEdit-icon__item">
            <input type="radio" name="icon" id="clock" />
            <label htmlFor="clock">⏰</label>
          </div>
        </div>
      </div>
      <div className="TaskEdit-status">
        <h3 className="TaskEdit-status__title">Status</h3>
        <div className="TaskEdit-status__items">
          <label htmlFor="inprogress" className="TaskEdit-status__item inprogress">
            <figure>
              <img src={Time} alt="Time" />
            </figure>
            <h3>In Progress</h3>
            <input type="radio" name="status" id="inprogress" />
          </label>
          <label htmlFor="completed" className="TaskEdit-status__item completed">
            <figure>
              <img src={Done} alt="" />
            </figure>
            <h3>Completed</h3>
            <input type="radio" name="status" id="completed" />
          </label>
          <label htmlFor="wontdo" className="TaskEdit-status__item wontdo">
            <figure>
              <img src={Close} alt="" />
            </figure>
            <h3>Won't do</h3>
            <input type="radio" name="status" id="wontdo" />
          </label>
        </div>
      </div>
      <div className="TaskEdit-footer">
        <a href="#" className="TaskEdit-footer__delete">
          <p>Delete</p>
          <img src={Thrash} alt="Thrash" />
        </a>
        <a href="#" className="TaskEdit-footer__save">
          <p>Save</p>
          <img src={Done1} alt="Done" />
        </a>
      </div>
    </form>
  )
}

export default TaskEdit