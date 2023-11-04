export const getRooms = async () => {
  const res = await fetch("http://localhost:5000/rooms");
  const data = await res.json();
  return data;
};
