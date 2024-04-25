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
      <form
        className="relative bg-white-default col-start-2 px-6 py-4 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">Task details</h2>
          <div
            className="flex items-center justify-center border border-gray-light p-2 rounded-lg cursor-pointer"
            onClick={closeModal}>
            <img src={Close1} alt="Close" />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label
            className="text-gray-steel text-xs font-medium mb-2"
            htmlFor="name">
            Task name
          </label>
          <input
            className="bg-white-default text-gray-steel text-lg py-2 px-4 border-2 border-gray-light rounded-lg outline-none"
            type="text"
            placeholder="Enter a task name"
            {...register("name")}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label
            className="text-gray-steel text-xs font-medium mb-2"
            htmlFor="description">
            Description
          </label>
          <textarea
            className="bg-white-default text-gray-steel text-lg py-2 px-4 border-2 border-gray-light rounded-lg outline-none"
            cols={20}
            rows={7}
            placeholder="Enter a short description"
            {...register("description")}></textarea>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="text-gray-steel text-xs font-medium mb-2">Icon</h3>
          <div className="flex flex-row gap-x-3">
            <label
              className="flex items-center justify-center w-12 h-12 text-xl cursor-pointer rounded-xl bg-gray-light has-[:checked]:bg-orange-cream"
              htmlFor="person">
              <input
                className="appearance-none cursor-pointer"
                type="radio"
                value="person"
                id="person"
                {...register("icon")}
              />
              👨‍💻
            </label>
            <label
              className="flex items-center justify-center w-12 h-12 text-xl cursor-pointer rounded-xl bg-gray-light has-[:checked]:bg-orange-cream"
              htmlFor="message">
              <input
                className="appearance-none cursor-pointer"
                type="radio"
                value="message"
                id="message"
                {...register("icon")}
              />
              💬
            </label>
            <label
              className="flex items-center justify-center w-12 h-12 text-xl cursor-pointer rounded-xl bg-gray-light has-[:checked]:bg-orange-cream"
              htmlFor="coffee">
              <input
                className="appearance-none cursor-pointer"
                type="radio"
                value="coffee"
                id="coffee"
                {...register("icon")}
              />
              ☕
            </label>
            <label
              className="flex items-center justify-center w-12 h-12 text-xl cursor-pointer rounded-xl bg-gray-light has-[:checked]:bg-orange-cream"
              htmlFor="exercise">
              <input
                className="appearance-none cursor-pointer"
                type="radio"
                value="exercise"
                id="exercise"
                {...register("icon")}
              />
              🏋️‍♀️
            </label>
            <label
              className="flex items-center justify-center w-12 h-12 text-xl cursor-pointer rounded-xl bg-gray-light has-[:checked]:bg-orange-cream"
              htmlFor="books">
              <input
                className="appearance-none cursor-pointer"
                type="radio"
                value="books"
                id="books"
                {...register("icon")}
              />
              📚
            </label>
            <label
              className="flex items-center justify-center w-12 h-12 text-xl cursor-pointer rounded-xl bg-gray-light has-[:checked]:bg-orange-cream"
              htmlFor="clock">
              <input
                className="appearance-none cursor-pointer"
                type="radio"
                value="clock"
                id="clock"
                {...register("icon")}
              />
              ⏰
            </label>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="text-gray-steel text-xs font-medium mb-2">Status</h3>
          <div className="grid gap-2 grid-cols-2">
            <label
              htmlFor="inprogress"
              className="w-full grid grid-cols-taskStatus items-center gap-x-3 p-1 border-2 border-gray-light rounded-2xl cursor-pointer has-[:checked]:border-blue-electric">
              <figure className="w-fit flex justify-center items-center bg-orange-burnt rounded-xl">
                <img className="p-3" src={Time} alt="Time" />
              </figure>
              <h3 className="text-base font-medium">In Progress</h3>
              <input
                className="appearance-none w-7 h-7 mr-3 checked:bg-[url(/src/assets/Done_round.svg)] checked:bg-blue-electric checked:bg-[length:1.25rem] checked:bg-center checked:bg-no-repeat checked:rounded-full"
                type="radio"
                value="inprogress"
                id="inprogress"
                {...register("status")}
              />
            </label>
            <label
              htmlFor="completed"
              className="w-full grid grid-cols-taskStatus items-center gap-x-3 p-1 border-2 border-gray-light rounded-2xl cursor-pointer has-[:checked]:border-blue-electric">
              <figure className="w-fit flex justify-center items-center bg-green-forest rounded-xl">
                <img className="p-3" src={Done} alt="Time" />
              </figure>
              <h3 className="text-base font-medium">Completed</h3>
              <input
                className="appearance-none w-7 h-7 mr-3 checked:bg-[url(/src/assets/Done_round.svg)] checked:bg-blue-electric checked:bg-[length:1.25rem] checked:bg-center checked:bg-no-repeat checked:rounded-full"
                type="radio"
                value="completed"
                id="completed"
                {...register("status")}
              />
            </label>
            <label
              htmlFor="wontdo"
              className="w-full grid grid-cols-taskStatus items-center gap-x-3 p-1 border-2 border-gray-light rounded-2xl cursor-pointer has-[:checked]:border-blue-electric">
              <figure className="w-fit flex justify-center items-center bg-red-brick rounded-xl">
                <img className="p-3" src={Close} alt="Time" />
              </figure>
              <h3 className="text-base font-medium">Won't Do</h3>
              <input
                className="appearance-none w-7 h-7 mr-3 checked:bg-[url(/src/assets/Done_round.svg)] checked:bg-blue-electric checked:bg-[length:1.25rem] checked:bg-center checked:bg-no-repeat checked:rounded-full"
                type="radio"
                value="wontdo"
                id="wontdo"
                {...register("status")}
              />
            </label>
          </div>
        </div>
        <div className="absolute bottom-4 right-6 grid grid-cols-2 gap-x-4">
          <a
            href="#"
            className="flex justify-center items-center gap-x-2 py-2 px-6 rounded-3xl text-sm font-normal no-underline text-white-default bg-gray-steel border-none cursor-pointer">
            <p>Delete</p>
            <img src={Thrash} alt="Thrash" />
          </a>
          <button className="flex justify-center items-center gap-x-2 py-2 px-6 rounded-3xl text-sm font-normal no-underline text-white-default bg-blue-electric border-none cursor-pointer">
            <p>Save</p>
            <img src={Done1} alt="Done" />
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default TaskEdit;
