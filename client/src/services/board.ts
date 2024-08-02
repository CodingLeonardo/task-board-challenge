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
