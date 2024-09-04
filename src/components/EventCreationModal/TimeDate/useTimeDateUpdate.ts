import { SHORT_MONTHS_NAMES } from '../../../types/constants';
import { getDate, updateEventDate } from './utils';
import { OneWeekDay, SingleEvent } from '../../../types';
import { getMinutes } from '../../../utils/time';

const updateDate = (
  setNewEventData: React.Dispatch<React.SetStateAction<SingleEvent>>,
  formDate: string,
  week: OneWeekDay[],
  setActiveTileColId: React.Dispatch<React.SetStateAction<string>>
) => {
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
};

const updateStartTime = (
  setNewEventData: React.Dispatch<React.SetStateAction<SingleEvent>>,
  formStartTime: string
) => {
  setNewEventData((prevEventData) => {
    const updatedData = { ...prevEventData };
    const startTimeInMinutes = getMinutes(formStartTime);
    updatedData.startTimeInMinutes = startTimeInMinutes;

    return updatedData;
  });
};

const updateEndTime = (
  setNewEventData: React.Dispatch<React.SetStateAction<SingleEvent>>,
  formEndTime: string
) => {
  setNewEventData((prevEventData) => {
    const updatedData = { ...prevEventData };
    const endTimeInMinutes = getMinutes(formEndTime);
    const newEventLength = endTimeInMinutes - updatedData.startTimeInMinutes;
    updatedData.eventLengthInMinutes = newEventLength;

    return updatedData;
  });
};

const useTimeDateUpdate = () => {
  return { updateDate, updateStartTime, updateEndTime };
};

export default useTimeDateUpdate;
