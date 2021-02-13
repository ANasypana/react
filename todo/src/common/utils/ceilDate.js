export const ceilDate = date => {
  const newDate = new Date(date + 300000);
  const year = newDate.getFullYear();
  const month = newDate.getMonth();
  const day = newDate.getDate();
  return new Date(year, month, day, 23, 59, 59)
}