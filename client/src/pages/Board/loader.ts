import {redirect, LoaderFunctionArgs, ParamParseKey} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
import {createBoard, getBoard} from "../../services/board";

const USER_ROUTE = "/:boardId";

const loader = async ({params}: LoaderFunctionArgs) => {
  type TypedParams = Record<ParamParseKey<typeof USER_ROUTE>, string>;
  const typedParams = params as TypedParams;
  if (!typedParams.boardId) {
    const lastVisitedBoardId = localStorage.getItem("lastVisitedBoardId");
    if (lastVisitedBoardId) {
      return redirect(`/${lastVisitedBoardId}`);
    }
    try {
      const id = uuidv4();
      await createBoard({
        id: id,
        name: "My Task Board",
        description: "Tasks to keep organised",
      });
      localStorage.setItem("lastVisitedBoardId", id);
      return redirect(`/${id}`);
    } catch (err) {
      console.error(err);
      alert("No se pudo crear un nuevo tablero. Intenta de nuevo.");
    }
  }
  localStorage.setItem("lastVisitedBoardId", typedParams.boardId);
  const {
    body: {board},
  } = await getBoard(typedParams.boardId);
  return {board};
};

export default loader;
