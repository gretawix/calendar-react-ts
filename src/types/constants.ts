const WEEK_DAYS_LONG = {
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednesday: 'Wednesday',
  Thursday: 'Thursday',
  Friday: 'Friday',
  Saturday: 'Saturday',
  Sunday: 'Sunday',
} as const;

const WEEK_DAYS_SHORT = {
  Mon: 'Mon',
  Tue: 'Tue',
  Wed: 'Wed',
  Thu: 'Thu',
  Fri: 'Fri',
  Sat: 'Sat',
  Sun: 'Sun',
} as const;

const MONTHS_LONG = {
  January: 'January',
  February: 'February',
  March: 'March',
  April: 'April',
  May: 'May',
  June: 'June',
  July: 'July',
  August: 'August',
  September: 'September',
  October: 'October',
  November: 'November',
  December: 'December',
} as const;

const MONTHS_SHORT = {
  Jan: 'Jan',
  Feb: 'Feb',
  Mar: 'Mar',
  Apr: 'Apr',
  May: 'May',
  Jun: 'Jun',
  Jul: 'Jul',
  Aug: 'Aug',
  Sep: 'Sep',
  Oct: 'Oct',
  Nov: 'Nov',
  Dec: 'Dec',
} as const;

const WEEK_DAYS: Record<
  keyof typeof WEEK_DAYS_SHORT,
  keyof typeof WEEK_DAYS_LONG
> = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
  Sun: 'Sunday',
};

const MONTHS: Record<keyof typeof MONTHS_SHORT, keyof typeof MONTHS_LONG> = {
  Jan: 'January',
  Feb: 'February',
  Mar: 'March',
  Apr: 'April',
  May: 'May',
  Jun: 'June',
  Jul: 'July',
  Aug: 'August',
  Sep: 'September',
  Oct: 'October',
  Nov: 'November',
  Dec: 'December',
};

export {
  WEEK_DAYS_SHORT,
  WEEK_DAYS_LONG,
  MONTHS_SHORT,
  MONTHS_LONG,
  WEEK_DAYS,
  MONTHS,
};
