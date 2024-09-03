import {
  isMonthLong,
  isMonthShort,
  isWeekDayShort,
} from '../types/typeChecking';
import type { OneWeekDay, Day } from '../types/main';
import { WEEK_DAYS } from '../types/constants';

const daysInWeek = 7;
const hoursInDay = 24;
const monthNames: { [key: string]: number } = {
  January: 0,
  February: 1,
  March: 2,
  April: 3,
  May: 4,
  June: 5,
  July: 6,
  August: 7,
  September: 8,
  October: 9,
  November: 10,
  December: 11,
};

export const constructBasicDay = (date: Date | string): Day => {
  const dateString =
    typeof date === 'string' ? date.replace(/-/g, ' ') : date.toString();
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

export const createHoursList = () => {
  const list = [];
  for (let i = 0; i < hoursInDay; i++) {
    const hour = i < 10 ? `0${i}` : `${i}`;
    list.push(`${hour}:00`);
  }
  return list;
};

export const getFirstDayInTimeGrid = (date: Date): Date => {
  const currentDate = new Date(date);
  const currentWeekDay = currentDate.getDay();
  const difference = (currentWeekDay === 0 ? -6 : 1) - currentWeekDay;
  const monday = new Date(date);
  monday.setDate(monday.getDate() + difference);

  return monday;
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

export const getTime = (minutes: number | undefined): string => {
  if (!minutes) return '00:00';
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = remainingMinutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
};

export const getDate = (dateInput: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, monthLong, day] = dateInput.replace(/,/g, '').split(' ');
  const year = new Date().getFullYear();
  const newDate = new Date(
    Number(year),
    monthNames[monthLong as string],
    Number(day)
  );
  const [weekDay] = newDate.toString().split(' ');
  const validWeekDay = isWeekDayShort(weekDay) ? weekDay : 'Mon';
  const validMonthLong = isMonthLong(monthLong) ? monthLong : 'January';

  return {
    weekDayLong: WEEK_DAYS[validWeekDay],
    monthLong: validMonthLong,
    day: Number(day),
  };
};
