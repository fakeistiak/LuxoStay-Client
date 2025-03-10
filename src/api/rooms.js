export const getRooms = async () => {
  const res = await fetch(
    "http://localhost:5/rooms"
  );
  const data = await res.json();
  return data;
};
