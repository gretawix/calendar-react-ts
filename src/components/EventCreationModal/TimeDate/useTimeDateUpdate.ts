import { SHORT_MONTHS_NAMES } from '../../../types/constants';
import { getDate, updateEventDate } from './utils';
import { getMinutes } from '../../../utils/time';
import { useNewEvent } from '../../../hooks/useNewEvent';
import { useDate } from '../../../hooks/useDate';
import { useCallback } from 'react';

const useTimeDateUpdate = () => {
  const { setNewEventData, setActiveTileColId } = useNewEvent();
  const { week } = useDate();

  const updateDate = useCallback(
    (formDate: string) => {
      setNewEventData((prevEventData) => {
        const newDateObj = getDate(formDate);
        const targetWeekDay = week.find(
          (oneday) =>
            oneday.day === newDateObj.day &&
            oneday.month === SHORT_MONTHS_NAMES[newDateObj.monthLong]
        );

        if (targetWeekDay) {
          setActiveTileColId(targetWeekDay.id);
        }

        return updateEventDate(
          prevEventData,
          newDateObj.weekDayLong,
          newDateObj.monthLong,
          newDateObj.day
        );
      });
    },
    [setActiveTileColId, setNewEventData, week]
  );

  const updateStartTime = useCallback(
    (formStartTime: string) => {
      setNewEventData((prevEventData) => {
        const updatedData = { ...prevEventData };
        const startTimeInMinutes = getMinutes(formStartTime);
        updatedData.startTimeInMinutes = startTimeInMinutes;

        return updatedData;
      });
    },
    [setNewEventData]
  );

  const updateEndTime = useCallback(
    (formEndTime: string) => {
      setNewEventData((prevEventData) => {
        const updatedData = { ...prevEventData };
        const endTimeInMinutes = getMinutes(formEndTime);
        const newEventLength =
          endTimeInMinutes - updatedData.startTimeInMinutes;
        updatedData.eventLengthInMinutes = newEventLength;

        return updatedData;
      });
    },
    [setNewEventData]
  );

  return { updateDate, updateStartTime, updateEndTime };
};

export default useTimeDateUpdate;
