const API_URL = import.meta.env.VITE_APP_API_URL || "http://localhost:8000";

export const getBoard = async (boardId: string) => {
  // return new Promise((resolve, reject) => {
  //   fetch(`${API_URL}/api/board/${boardId}`).then((response) => {
  //     return response.json()
  //   }).then((data) => {

  //   })
  // })
  const response = await fetch(`${API_URL}/api/board/${boardId}`);
  return response.json();
};

export const createBoard = async (data: {
  id: string;
  name: string;
  description?: string;
}) => {
  const response = await fetch(`${API_URL}/api/board`, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  });
  return response.json();
};

export const updateBoard = async (
  boardId: string,
  data: {name?: string; description?: string},
) => {
  const response = await fetch(`${API_URL}/api/board/${boardId}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data),
  });
  return response.json();
};
