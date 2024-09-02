import {
  cellHeightInPx,
  defaultEventLengthInMinutes,
} from '../contants/constants';
import { MONTHS, WEEK_DAYS } from '../types/constants';
import { getTilePositionFromClick } from './positioning';
import { constructBasicDay } from './timeCalculations';

import type { SingleEvent } from '../types/main';

export const getDefaultEvent = (): SingleEvent => {
  const today = new Date();
  const day = constructBasicDay(today);
  const defaultStartTime = 9 * 60;

  return {
    ...day,
    title: '(no title)',
    weekDayLong: WEEK_DAYS[day.weekDay],
    monthLong: MONTHS[day.month],
    startTimeInMinutes: defaultStartTime,
    eventLengthInMinutes: defaultStartTime + defaultEventLengthInMinutes,
  };
};

const getStartTimeFromClick = (event: React.MouseEvent) => {
  const adjustedDistanceFromTop = getTilePositionFromClick(event);

  return (adjustedDistanceFromTop / cellHeightInPx) * 60;
};

export const constructNewEvent = (event: React.MouseEvent): SingleEvent => {
  const data = getDefaultEvent();
  const startTime = getStartTimeFromClick(event);
  data.startTimeInMinutes = startTime;
  data.eventLengthInMinutes = startTime + defaultEventLengthInMinutes;

  return data;
};
