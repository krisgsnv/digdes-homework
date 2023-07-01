/* eslint-disable */
const dt = new Date();
export const today = {
  day: dt.getDate(),
  month: dt.getMonth(),
  year: dt.getFullYear(),
};

export const weekDays = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

export function firstDayInMonth(year, month) {
  return new Date(year, month, 1);
}

export function daysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

export function firstWeekDayInMonth(year, month) {
  return firstDayInMonth(year, month).toLocaleDateString("ru-RU", {
    weekday: "short",
  });
}

export function paddingDays(year, month) {
  return weekDays.findIndex((el) => el == firstWeekDayInMonth(year, month));
}

export function getPrevMonthDays(year, month) {
  const lastDay = daysInMonth(year, month - 1);
  const days = [];
  for (let i = 0; i < paddingDays(year, month); i++) {
    days.push(lastDay - i);
  }
  return days.reverse();
}
