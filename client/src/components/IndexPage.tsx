import Header from "./Header";
import Tasks from "./Tasks";
import TaskEdit from "./TaskEdit";
import {useModal} from "../store";

import Close from "../assets/close_ring_duotone.svg";
import "./styles/IndexPage.css";

const IndexPage = () => {
  const isOpened = useModal(state => state.isOpened);
  const openModal = useModal(state => state.open);

  return (
    <>
      <div className="container">
        <Header />
        <section className="IndexPage">
          <Tasks />
          <div className="IndexPage-addtask" onClick={openModal}>
            <figure className="IndexPage-addtask__icon">
              <img src={Close} alt="" />
            </figure>
            <h3 className="IndexPage-addtask__title">Add new task</h3>
          </div>
        </section>
      </div>
      {isOpened && <TaskEdit />}
    </>
  );
};

export default IndexPage;
