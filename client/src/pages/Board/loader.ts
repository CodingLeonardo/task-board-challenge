import {LoaderFunctionArgs, ParamParseKey} from "react-router-dom";
import {getBoard} from "../../services/board";

const USER_ROUTE = "/:boardId";

const loader = async ({params}: LoaderFunctionArgs) => {
  type TypedParams = Record<ParamParseKey<typeof USER_ROUTE>, string>;
  const typedParams = params as TypedParams;
  if (!typedParams.boardId) {
    return {};
  }
  const {
    body: {board},
  } = await getBoard(typedParams.boardId);
  return {board};
};

export default loader;
