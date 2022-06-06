export function returnToday() {
  const day = new Date();
  const year = day.getFullYear();
  const month = String(day.getMonth() + 1).padStart(2, "0");
  const date = String(day.getDate()).padStart(2, "0");
  const today = `${year}-${month}-${date}`;

  return today;
}

export function returnTimeToString(time: number = 0) {
  const hour = Math.floor(time / 60);
  const minute = time % 60;

  return `${hour}h ${minute}m`;
}
