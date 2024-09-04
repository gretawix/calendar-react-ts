import {
  WEEK_DAYS_SHORT,
  WEEK_DAYS_LONG,
  MONTHS_SHORT,
  MONTHS_LONG,
} from './constants';
import type {
  WeekDayNamesLong,
  WeekDayNamesShort,
  MonthNamesLong,
  MonthNamesShort,
} from '.';

const isWeekDayLong = (value: string): value is WeekDayNamesLong => {
  return value in WEEK_DAYS_LONG;
};

const isWeekDayShort = (value: string): value is WeekDayNamesShort => {
  return value in WEEK_DAYS_SHORT;
};

const isMonthLong = (value: string): value is MonthNamesLong => {
  return value in MONTHS_LONG;
};

const isMonthShort = (value: string): value is MonthNamesShort => {
  return value in MONTHS_SHORT;
};

export { isWeekDayLong, isWeekDayShort, isMonthShort, isMonthLong };
