import { isMonthShort, isWeekDayShort } from '../types/typeChecking';
import type { OneWeekDay, Day } from '../types/main';

const daysInWeek = 7;
const hoursInDay = 24;

const constructBasicDay = (date: Date | string): Day => {
  const dateString = typeof date === 'string' ? date : date.toString();

  const [weekDay, month, day, year] = dateString.split(' ');
  const validWeekDay = isWeekDayShort(weekDay) ? weekDay : 'Mon';
  const validMonth = isMonthShort(month) ? month : 'Jan';

  return {
    weekDay: validWeekDay,
    day: Number(day),
    month: validMonth,
    year: Number(year),
  };
};

const createDay = (date: Date): OneWeekDay => {
  const day = constructBasicDay(date);

  return {
    ...day,
    id: date.toString(),
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
  const monday = new Date(date);
  monday.setDate(monday.getDate() + difference);

  return monday;
};

const getCurrentWeek = (baseDay: Date) => {
  const week: OneWeekDay[] = [];
  const monday = getFirstDayInTimeGrid(baseDay);

  for (let i = 0; i < daysInWeek; i++) {
    const day = new Date(monday);
    day.setDate(monday.getDate() + i);
    week.push(createDay(day));
  }

  return week;
};

const getTime = (minutes: number | undefined): string => {
  if (!minutes) return '00:00';
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = remainingMinutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
};

export {
  createDay,
  getTimeZone,
  createHoursList,
  getCurrentWeek,
  constructBasicDay,
  getTime,
};
