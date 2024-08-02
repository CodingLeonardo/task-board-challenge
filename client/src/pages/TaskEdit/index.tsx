import {useForm, SubmitHandler} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import Modal from "../../components/Modal";
import {Task, TaskIcon, TaskStatus} from "../../types/task";

import Close1 from "../../assets/close_ring_duotone-1.svg";
import Time from "../../assets/Time_atack_duotone.svg";
import Done from "../../assets/Done_round_duotone.svg";
import Done1 from "../../assets/Done_round.svg";
import Close from "../../assets/close_ring_duotone.svg";
import Thrash from "../../assets/Trash.svg";
import {useLoaderData, useParams, useNavigate} from "react-router-dom";
import {createTask, updateTask} from "../../services/task";
import TaskIconField from "../../components/ui/TaskIconField";
import TaskStatusField from "../../components/ui/TaskStatusField";

// const TaskSchema = z.object({
//   id: z.number().optional(),
//   id_board: z.string().optional(),
//   name: z.string().min(10).max(25),
//   description: z.string().max(255),
//   icon: z.nativeEnum(TaskIcon),
//   status: z.nativeEnum(TaskStatus),
// });
const TaskSchema = z.object({
  id: z.number().optional(),
  id_board: z.string().optional(),
  name: z.string(),
  description: z.string(),
  icon: z.nativeEnum(TaskIcon),
  status: z.nativeEnum(TaskStatus),
});

type TaskSchemaType = z.infer<typeof TaskSchema>;

const TaskEdit = () => {
  const {boardId} = useParams();
  const {task} = useLoaderData() as {task: Task};
  const navigate = useNavigate();

  const {register, handleSubmit, watch} = useForm<TaskSchemaType>({
    resolver: zodResolver(TaskSchema),
    defaultValues: task,
  });

  const onSubmit: SubmitHandler<TaskSchemaType> = data => {
    const {id_board, id, ...restTask} = data;
    if (boardId) {
      console.log(boardId);
      console.log(data);
      if (!task) {
        console.log("modo Create");
        createTask({boardId: boardId, task: data});
        return;
      }
      if (id) {
        updateTask({boardId: boardId, taskId: id, task: restTask});
        console.log("modo Edit");
      }
      setTimeout(() => {
        navigate(`/${boardId}`);
      }, 2000);
    }
  };

  // const watchFields = watch(["icon", "status", "name", "description"]);
  // console.log(watchFields);
  // console.log(formState.errors);

  return (
    <Modal>
      <form
        className="relative bg-white-default col-start-2 px-6 py-4 rounded-xl"
        onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-medium">Task details</h2>
          <div className="flex items-center justify-center border border-gray-light p-2 rounded-lg cursor-pointer">
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
            id="name"
            placeholder="Enter a task name"
            autoComplete="on"
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
            id="description"
            placeholder="Enter a short description"
            {...register("description")}></textarea>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="text-gray-steel text-xs font-medium mb-2">Icon</h3>
          <div className="flex flex-row gap-x-3">
            <TaskIconField field={TaskIcon.Person} {...register("icon")}>
              👨‍💻
            </TaskIconField>
            <TaskIconField field={TaskIcon.Message} {...register("icon")}>
              💬
            </TaskIconField>
            <TaskIconField field={TaskIcon.Coffee} {...register("icon")}>
              ☕
            </TaskIconField>
            <TaskIconField field={TaskIcon.Exercise} {...register("icon")}>
              🏋️‍♀️
            </TaskIconField>
            <TaskIconField field={TaskIcon.Books} {...register("icon")}>
              📚
            </TaskIconField>
            <TaskIconField field={TaskIcon.Clock} {...register("icon")}>
              ⏰
            </TaskIconField>
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <h3 className="text-gray-steel text-xs font-medium mb-2">Status</h3>
          <div className="grid gap-2 grid-cols-2">
            <TaskStatusField
              field={TaskStatus.inprogress}
              {...register("status")}>
              <img className="p-3" src={Time} alt="Time" />
            </TaskStatusField>
            <TaskStatusField
              field={TaskStatus.completed}
              {...register("status")}>
              <img className="p-3" src={Done} alt="Done" />
            </TaskStatusField>
            <TaskStatusField field={TaskStatus.wontdo} {...register("status")}>
              <img className="p-3" src={Close} alt="Close" />
            </TaskStatusField>
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
