import { memo, useCallback, useEffect, useState } from 'react';
import Button from '../../Button/Button';
import Dropdown from '../../Dropdown/Dropdown';
import ModalIcon from '../ModalIcon/ModalIcon';
import TextInput from '../../inputs/TextInput';
import { useEvents } from '../../../hooks/useEvents';
import { getDate, getTime } from '../../../utils/timeCalculations';
import { updateEventDate } from '../../../utils/events';

import type { IconName, RefObjectMap } from '../../../types/main';

import './timeDate.scss';
import { useDate } from '../../../hooks/useDate';
import { SHORT_MONTHS_NAMES } from '../../../types/constants';

type TimeDateProps = {
  dateTimeInputRefs: RefObjectMap<'date' | 'startTime' | 'endTime'>;
};

const TimeDate = ({ dateTimeInputRefs }: TimeDateProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { newEventData, setNewEventData, setActiveTileColId } = useEvents();
  const { week } = useDate();

  const date = `${newEventData.weekDayLong}, ${newEventData.monthLong} ${newEventData.day}`;
  const startTime = getTime(newEventData.startTimeInMinutes);
  const endTime = getTime(
    newEventData.startTimeInMinutes + newEventData.eventLengthInMinutes
  );

  const setNewDate = useCallback(() => {
    setNewEventData((prevEventData) => {
      const newDate = dateTimeInputRefs?.date?.current?.value || '';
      const newDateObj = getDate(newDate);
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
  }, [dateTimeInputRefs?.date, setActiveTileColId, setNewEventData, week]);

  const iconName: IconName = 'schedule';
  const previewClasses = `${iconName ? 'has-icon ' : 'no-icon'} ${!isOpen ? 'preview-setting' : ''}  modal-event-side-margins`;
  const repeatOptions = [
    'Does not repeat',
    'Daily',
    'Weekly on TODAY',
    'Monthly on NTH TODAY',
    'Annually on MONTH DAY',
    'Every weekday (Monday to Friday)',
    'Custom...',
  ];

  useEffect(() => {
    console.log(date);
  }, [date]);

  if (!isOpen) {
    return (
      <div className="time-date single-setting-section">
        <div className={previewClasses}>
          <ModalIcon iconName={iconName} />
          <div
            className="to-select settings-width"
            onClick={() => setIsOpen(true)}
          >
            <div className="time-date-select">
              <p>
                <Button styleType="clickable" title={date} id="date-btn" />
                <Button styleType="clickable" title={startTime} id="date-btn" />
                -
                <Button styleType="clickable" title={endTime} id="date-btn" />
              </p>
              <ul className="action-description">
                <li>Time zone</li>
                <li>Does not repeat</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="full-settings">
      <div className={previewClasses}>
        <ModalIcon iconName={iconName} />
        <div className="settings-inner time-date-settings">
          <div className="time-date-inputs-wrapper">
            <TextInput
              defaultValue={date}
              ref={dateTimeInputRefs.date}
              id="date"
              style={{ width: 170 }}
              onBlur={setNewDate}
            />
            <TextInput
              defaultValue={startTime}
              ref={dateTimeInputRefs.startTime}
              id="time-start"
              style={{ width: 52 }}
            />
            <TextInput
              defaultValue={endTime}
              ref={dateTimeInputRefs.endTime}
              id="time-end"
              style={{ width: 52 }}
            />
          </div>
          <div className="time-date-other-settings">
            <label htmlFor="all-day" className="checkbox-input">
              All day <input type="checkbox" id="all-day" />
              <span className="checkmark"></span>
            </label>
            <Button title="Time zone" id="time-zone" />
          </div>
          <Dropdown options={repeatOptions} />
        </div>
      </div>
    </div>
  );
};

export default memo(TimeDate);
