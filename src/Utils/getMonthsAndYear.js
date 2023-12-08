export function getMonthsAndYear() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const currentYear = new Date().getFullYear().toString().slice(-2);
  return months.map((month) => `${month} ${currentYear}`);
}
