import {useModal, useTasks} from "../store";
import {useForm, SubmitHandler} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import Modal from "./Modal";
import {TaskIcon, TaskStatus} from "../types.d";

import Close1 from "../assets/close_ring_duotone-1.svg";
import Time from "../assets/Time_atack_duotone.svg";
import Done from "../assets/Done_round_duotone.svg";
import Done1 from "../assets/Done_round.svg";
import Close from "../assets/close_ring_duotone.svg";
import Thrash from "../assets/Trash.svg";

import "./styles/TaskEdit.css";

const TaskSchema = z.object({
  name: z.string().min(10).max(25),
  description: z.string().max(255),
  icon: z.nativeEnum(TaskIcon),
  status: z.nativeEnum(TaskStatus),
});

type TaskSchemaType = z.infer<typeof TaskSchema>;

const TaskEdit = () => {
  const {register, handleSubmit} = useForm<TaskSchemaType>({
    resolver: zodResolver(TaskSchema),
  });
  const tasks = useTasks(state => state.tasks);
  const addTask = useTasks(state => state.addTask);
  const closeModal = useModal(state => state.close);

  const onSubmit: SubmitHandler<TaskSchemaType> = data => {
    addTask(data);
    console.log(tasks);
  };

  return (
    <Modal>
      <form className="TaskEdit" onSubmit={handleSubmit(onSubmit)}>
        <div className="TaskEdit-header">
          <h2 className="TaskEdit-header__title">Task details</h2>
          <div className="TaskEdit-header__close" onClick={closeModal}>
            <img src={Close1} alt="Close" />
          </div>
        </div>
        <div className="TaskEdit-name">
          <label htmlFor="name">Task name</label>
          <input
            type="text"
            placeholder="Enter a task name"
            {...register("name")}
          />
        </div>
        <div className="TaskEdit-description">
          <label htmlFor="description">Description</label>
          <textarea
            cols={20}
            rows={7}
            placeholder="Enter a short description"
            {...register("description")}></textarea>
        </div>
        <div className="TaskEdit-icon">
          <h3 className="TaskEdit-icon__title">Icon</h3>
          <div className="TaskEdit-icon__items">
            <div className="TaskEdit-icon__item">
              <input
                type="radio"
                value={TaskIcon.person}
                id="person"
                {...register("icon")}
              />
              <label htmlFor="person">👨‍💻</label>
            </div>
            <div className="TaskEdit-icon__item">
              <input
                type="radio"
                value={TaskIcon.message}
                id="message"
                {...register("icon")}
              />
              <label htmlFor="message">💬</label>
            </div>
            <div className="TaskEdit-icon__item">
              <input
                type="radio"
                value={TaskIcon.coffee}
                id="coffee"
                {...register("icon")}
              />
              <label htmlFor="coffee">☕</label>
            </div>
            <div className="TaskEdit-icon__item">
              <input
                type="radio"
                value={TaskIcon.exercise}
                id="exercise"
                {...register("icon")}
              />
              <label htmlFor="exercise">🏋️‍♀️</label>
            </div>
            <div className="TaskEdit-icon__item">
              <input
                type="radio"
                value={TaskIcon.books}
                id="books"
                {...register("icon")}
              />
              <label htmlFor="books">📚</label>
            </div>
            <div className="TaskEdit-icon__item">
              <input
                type="radio"
                value={TaskIcon.clock}
                id="clock"
                {...register("icon")}
              />
              <label htmlFor="clock">⏰</label>
            </div>
          </div>
        </div>
        <div className="TaskEdit-status">
          <h3 className="TaskEdit-status__title">Status</h3>
          <div className="TaskEdit-status__items">
            <label
              htmlFor="inprogress"
              className="TaskEdit-status__item inprogress">
              <figure>
                <img src={Time} alt="Time" />
              </figure>
              <h3>In Progress</h3>
              <input
                type="radio"
                value="inprogress"
                id="inprogress"
                {...register("status")}
              />
            </label>
            <label
              htmlFor="completed"
              className="TaskEdit-status__item completed">
              <figure>
                <img src={Done} alt="" />
              </figure>
              <h3>Completed</h3>
              <input
                type="radio"
                value="completed"
                id="completed"
                {...register("status")}
              />
            </label>
            <label htmlFor="wontdo" className="TaskEdit-status__item wontdo">
              <figure>
                <img src={Close} alt="" />
              </figure>
              <h3>Won't do</h3>
              <input
                type="radio"
                value="wontdo"
                id="wontdo"
                {...register("status")}
              />
            </label>
          </div>
        </div>
        <div className="TaskEdit-footer">
          <a href="#" className="TaskEdit-footer__delete">
            <p>Delete</p>
            <img src={Thrash} alt="Thrash" />
          </a>
          <button className="TaskEdit-footer__save">
            <p>Save</p>
            <img src={Done1} alt="Done" />
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default TaskEdit;
