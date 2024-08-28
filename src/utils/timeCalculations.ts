import { WeekDayType } from '../types/types';

const daysInWeek = 7;
const hoursInDay = 24;

const createDay = (date: Date): WeekDayType => {
  const [weekDay, month, day, year] = date.toString().split(' ');
  return {
    weekDay,
    day: Number(day),
    month,
    year: Number(year),
    id: `${weekDay}-${day}-${month}-${year}`,
  };
};

const getTimeZone = (date: Date) => {
  return date.toString().split(' ').slice(5, 6)[0].slice(0, -2);
};

const createHoursList = () => {
  const list = [];
  for (let i = 0; i < hoursInDay; i++) {
    const hour = i < 10 ? `0${i}` : `${i}`;
    list.push(`${hour}:00`);
  }
  return list;
};

const getFirstDayInTimeGrid = (date: Date): Date => {
  const currentDate = new Date(date);
  const currentWeekDay = currentDate.getDay();
  const difference = (currentWeekDay === 0 ? -6 : 1) - currentWeekDay;
  const monday = new Date();
  monday.setDate(monday.getDate() + difference);

  return monday;
};

const getCurrentWeek = (baseDay: Date) => {
  const week: WeekDayType[] = [];
  const monday = getFirstDayInTimeGrid(baseDay);

  for (let i = 0; i < daysInWeek; i++) {
    const day = new Date(monday);
    day.setDate(monday.getDate() + i);
    week.push(createDay(day));
  }

  return week;
};

export { createDay, getTimeZone, createHoursList, getCurrentWeek };
