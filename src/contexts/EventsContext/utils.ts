import { cellHeightInPx, defaultEventLengthInMinutes } from '../../constants';
import { SingleEvent } from '../../types';
import { MONTHS, WEEK_DAYS } from '../../types/constants';
import { constructBasicDay } from '../../utils/time';

export const positionModalX = (
  event: React.MouseEvent,
  modal: HTMLDivElement
) => {
  const modalWidth = modal.getBoundingClientRect().width;
  const clickedCol = event.target;
  if (clickedCol instanceof HTMLElement) {
    const clickedColBox = clickedCol.getBoundingClientRect();

    if (clickedColBox) {
      modal.style.left = `${
        clickedColBox.left < modalWidth
          ? clickedColBox.left + clickedColBox.width + 8
          : clickedColBox.left - modalWidth - 12
      }px`;
    }
  }
};

export const positionModalY = (
  event: React.MouseEvent,
  modal: HTMLDivElement
) => {
  const modalHeight = modal.getBoundingClientRect().height;
  const bottomSpacing = 50;
  const distanceFromClickToTop = event.clientY;
  const distanceFromClickToBottom = window.innerHeight - distanceFromClickToTop;

  modal.style.bottom = 'unset';
  modal.style.top = 'unset';

  if (distanceFromClickToTop < 130) {
    modal.style.top = `${distanceFromClickToTop}px`;
  } else if (modalHeight + bottomSpacing > distanceFromClickToBottom) {
    modal.style.bottom = `${bottomSpacing}px`;
  } else {
    modal.style.top = `${distanceFromClickToTop - bottomSpacing}px`;
  }
};

export const getTilePositionFromClick = (event: React.MouseEvent) => {
  const clickedElement = event.target as HTMLElement;
  const distanceFromTop = clickedElement?.getBoundingClientRect().top;
  const clickPosition = event.clientY - distanceFromTop;
  const increment = cellHeightInPx / 2;

  return Math.floor(clickPosition / increment) * increment;
};

const getStartTimeFromClick = (event: React.MouseEvent) => {
  const adjustedDistanceFromTop = getTilePositionFromClick(event);

  return (adjustedDistanceFromTop / cellHeightInPx) * 60;
};

export const constructNewEvent = (
  event: React.MouseEvent,
  activeTileColId: string
): SingleEvent => {
  const day = constructBasicDay(activeTileColId);
  const startTime = getStartTimeFromClick(event);

  return {
    ...day,
    title: '(no title)',
    weekDayLong: WEEK_DAYS[day.weekDay],
    monthLong: MONTHS[day.month],
    startTimeInMinutes: startTime,
    eventLengthInMinutes: defaultEventLengthInMinutes,
  };
};

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
