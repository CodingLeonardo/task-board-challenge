import {FC, useEffect, useRef, useState} from "react";
import Logo from "../assets/Logo.svg";
import Edit from "../assets/Edit_duotone.svg";
import {useBoardStore} from "../store/boardStore";
import {updateBoard} from "../services/board";

const Header: FC = () => {
  const id = useBoardStore(state => state.id);
  const name = useBoardStore(state => state.name);
  const description = useBoardStore(state => state.description);
  const tasks = useBoardStore(state => state.tasks);
  const setBoard = useBoardStore(state => state.setBoard);

  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingDesc, setIsEditingDesc] = useState(false);
  const [tempTitle, setTempTitle] = useState(name || "");
  const [tempDesc, setTempDesc] = useState(description || "");

  const titleRef = useRef<HTMLInputElement | null>(null);
  const descRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => setTempTitle(name || ""), [name]);
  useEffect(() => setTempDesc(description || ""), [description]);

  useEffect(() => {
    if (isEditingTitle) titleRef.current?.focus();
  }, [isEditingTitle]);

  useEffect(() => {
    if (isEditingDesc) descRef.current?.focus();
  }, [isEditingDesc]);

  const save = async (payload: {name?: string; description?: string}) => {
    if (!id) return;
    // optimistic update
    const newName = payload.name ?? name;
    const newDesc = payload.description ?? description;
    setBoard({id, name: newName, description: newDesc, tasks});
    try {
      await updateBoard(id, payload);
    } catch (err) {
      console.error(err);
      alert("No se pudo actualizar el tablero. Intenta de nuevo.");
    }
  };

  const onTitleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditingTitle(false);
      save({name: tempTitle});
    } else if (e.key === "Escape") {
      setTempTitle(name || "");
      setIsEditingTitle(false);
    }
  };

  const onDescKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditingDesc(false);
      save({description: tempDesc});
    } else if (e.key === "Escape") {
      setTempDesc(description || "");
      setIsEditingDesc(false);
    }
  };

  return (
    <header className="grid grid-cols-header items-center gap-x-2 pt-12 pb-10">
      <img className="w-10" src={Logo} alt="Logo" />

      <div className="flex items-center gap-2">
        {isEditingTitle ? (
          <input
            ref={titleRef}
            className="text-title px-2 py-1 rounded"
            value={tempTitle}
            onChange={e => setTempTitle(e.target.value)}
            onKeyDown={onTitleKey}
            onBlur={() => {
              setIsEditingTitle(false);
              if (tempTitle !== name) save({name: tempTitle});
            }}
            aria-label="Edit board title"
          />
        ) : (
          <>
            <h1
              className="text-title cursor-tex min-w-1 min-h-6"
              onDoubleClick={() => setIsEditingTitle(true)}>
              {name}
            </h1>
          </>
        )}
        <img className="w-6" src={Edit} alt="Edit" />
      </div>

      {isEditingDesc ? (
        <input
          ref={descRef}
          className="text-base mt-2 col-start-2 w-full px-2 py-1 rounded"
          value={tempDesc}
          onChange={e => setTempDesc(e.target.value)}
          onKeyDown={onDescKey}
          onBlur={() => {
            setIsEditingDesc(false);
            if (tempDesc !== description) save({description: tempDesc});
          }}
          aria-label="Edit board description"
        />
      ) : (
        <p
          className="text-base mt-2 col-start-2 cursor-text min-w-1 min-h-6"
          onDoubleClick={() => setIsEditingDesc(true)}>
          {description}
        </p>
      )}
    </header>
  );
};

export default Header;
