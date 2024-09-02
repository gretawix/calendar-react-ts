import {
  WEEK_DAYS_SHORT,
  WEEK_DAYS_LONG,
  MONTHS_SHORT,
  MONTHS_LONG,
} from './constants.ts';

export type ObjectValues<T> = T[keyof T];

export type WeekDayNamesLong = ObjectValues<typeof WEEK_DAYS_LONG>;
export type WeekDayNamesShort = ObjectValues<typeof WEEK_DAYS_SHORT>;
export type MonthNamesLong = ObjectValues<typeof MONTHS_LONG>;
export type MonthNamesShort = ObjectValues<typeof MONTHS_SHORT>;

export type Day = {
  weekDay: WeekDayNamesShort;
  day: number;
  month: MonthNamesShort;
  year: number;
};

export type OneWeekDay = Day & {
  id: string;
};

export type SingleEvent = Day & {
  title: string;
  weekDayLong: WeekDayNamesLong;
  monthLong: MonthNamesLong;
  startTimeInMinutes: number;
  eventLengthInMinutes: number;
};

export type ScrollRef = React.RefObject<HTMLDivElement>;

export type IconName =
  | 'drag_handle'
  | 'close'
  | 'schedule'
  | 'group'
  | 'location_on'
  | 'meeting_room'
  | 'subject'
  | 'attach_file'
  | 'event'
  | 'work'
  | 'lock'
  | 'notifications';
