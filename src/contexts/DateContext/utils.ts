import type { OneWeekDay } from '../../types';
import { constructBasicDay } from '../../utils/time';

const daysInWeek = 7;
const hoursInDay = 24;

export const createDay = (date: Date): OneWeekDay => {
  const day = constructBasicDay(date);

  return {
    ...day,
    id: `${day.weekDay}-${day.month}-${day.day}-${day.year}`,
  };
};

export const getTimeZone = (date: Date) => {
  return date.toString().split(' ').slice(5, 6)[0].slice(0, -2);
};

export const getFirstDayInTimeGrid = (date: Date): Date => {
  const currentDate = new Date(date);
  const currentWeekDay = currentDate.getDay();
  const difference = (currentWeekDay === 0 ? -6 : 1) - currentWeekDay;
  const monday = new Date(date);
  monday.setDate(monday.getDate() + difference);

  return monday;
};

export const createHoursList = () => {
  const list = [];
  for (let i = 0; i < hoursInDay; i++) {
    const hour = i < 10 ? `0${i}` : `${i}`;
    list.push(`${hour}:00`);
  }
  return list;
};

export const getCurrentWeek = (baseDay: Date) => {
  const week: OneWeekDay[] = [];
  const monday = getFirstDayInTimeGrid(baseDay);

  for (let i = 0; i < daysInWeek; i++) {
    const day = new Date(monday);
    day.setDate(monday.getDate() + i);
    week.push(createDay(day));
  }

  return week;
};
