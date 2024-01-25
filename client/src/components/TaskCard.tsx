import { TaskCardStatus, TaskCardProps } from "./types.d"

import Time from "../assets/Time_atack_duotone.svg"
import Done from "../assets/Done_round_duotone.svg"
import Close from "../assets/close_ring_duotone.svg"

import "./styles/TaskCard.css"

const TaskCard = ({ name, description, icon, status }: TaskCardProps) => {
  const getStatusIcon = () => {
    if(status === TaskCardStatus.inprogress){
      return Time
    }
    if(status === TaskCardStatus.completed){
      return Done
    }
    if(status === TaskCardStatus.wontdo){
      return Close
    }
  }  

  return (
    <div className={`TaskCard TaskCard__${status}`}>
      <figure className="TaskCard-icon">
        { icon }
      </figure>
      <div className="TaskCard-content">
        <h3 className="TaskCard-name">{ name }</h3>
        { description && <p className="TaskCard-description">{description}</p> }
      </div>
      { status && 
        <div className="TaskCard-status">
          <img src={getStatusIcon()} alt="TaskCard Status" />
        </div> 
      }
    </div>
  )
}

export default TaskCard