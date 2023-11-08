export const getRooms = async () => {
  const res = await fetch(
    "https://assignment-11-server-five-mu.vercel.app/rooms"
  );
  const data = await res.json();
  return data;
};
