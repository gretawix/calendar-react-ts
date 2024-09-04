import { isMonthShort, isWeekDayShort } from '../types/typeChecking';
import type { Day } from '../types';

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

export const getTime = (minutes: number | undefined): string => {
  if (!minutes) return '00:00';
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = remainingMinutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes}`;
};

export const getMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes;

  return totalMinutes;
};
