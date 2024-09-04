import { MonthNamesLong, SingleEvent, WeekDayNamesLong } from '../../../types';
import {
  SHORT_MONTHS_NAMES,
  SHORT_WEEKDAY_NAMES,
  WEEK_DAYS,
} from '../../../types/constants';
import { isMonthLong, isWeekDayShort } from '../../../types/typeChecking';

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

export const updateEventDate = (
  currentEventData: SingleEvent,
  weekDayLong: WeekDayNamesLong,
  monthLong: MonthNamesLong,
  day: number
) => {
  return {
    ...currentEventData,
    weekDayLong,
    monthLong,
    day,
    weekDay: SHORT_WEEKDAY_NAMES[weekDayLong],
    month: SHORT_MONTHS_NAMES[monthLong],
  };
};
