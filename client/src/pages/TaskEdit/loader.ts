import {LoaderFunctionArgs, ParamParseKey} from "react-router-dom";
import {getTask} from "../../services/task";

const USER_ROUTE = "/:boardId/:taskId";

const loader = async ({params}: LoaderFunctionArgs) => {
  type TypedParams = Record<ParamParseKey<typeof USER_ROUTE>, string>;
  const typedParams = params as TypedParams;
  if (!typedParams.taskId) {
    return {};
  }
  const {boardId, taskId} = typedParams;

  const {
    body: {task},
  } = await getTask({boardId, taskId: Number(taskId)});

  return {task};
};

export default loader;
