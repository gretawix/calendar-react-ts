import { memo, useCallback, useEffect, useState } from 'react';
import Button from '../../Button';
import Dropdown from '../../Dropdown';
import ModalIcon from '../ModalIcon';
import TextInput from '../../inputs/TextInput';
import { useNewEvent } from '../../../hooks/useNewEvent';
import { getTime } from '../../../utils/time';
import { useDate } from '../../../hooks/useDate';
import useTimeDateUpdate from './useTimeDateUpdate';

import type { IconName } from '../../../types';

import './timeDate.scss';
import classNames from 'classnames';
import TimeDatePreview from './TimeDatePreview';

type TimeDateProps = {
  formDate: string;
  formStartTime: string;
  onDateUpdate: React.Dispatch<React.SetStateAction<string>>;
  onStartTimeUpdate: React.Dispatch<React.SetStateAction<string>>;
};

const TimeDate = ({
  formDate,
  formStartTime,
  onDateUpdate,
  onStartTimeUpdate,
}: TimeDateProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { newEventData, setNewEventData, setActiveTileColId } = useNewEvent();
  const { week } = useDate();
  const date = `${newEventData.weekDayLong}, ${newEventData.monthLong} ${newEventData.day}`;
  const startTime = getTime(newEventData.startTimeInMinutes);
  const endTime = getTime(
    newEventData.startTimeInMinutes + newEventData.eventLengthInMinutes
  );
  const { updateModalDate, updateModalStartTime } = useTimeDateUpdate();
  const iconName: IconName = 'schedule';
  const previewClasses = classNames('modal-event-side-margins', {
    'has-icon': iconName,
    'no-icon': !iconName,
    'preview-setting': !isOpen,
  });
  const repeatOptions = [
    'Does not repeat',
    'Daily',
    'Weekly on TODAY',
    'Monthly on NTH TODAY',
    'Annually on MONTH DAY',
    'Every weekday (Monday to Friday)',
    'Custom...',
  ];

  const setNewDate = useCallback(() => {
    updateModalDate(setNewEventData, formDate, week, setActiveTileColId);
  }, [formDate, setActiveTileColId, setNewEventData, updateModalDate, week]);

  const setNewStartTime = useCallback(() => {
    updateModalStartTime(setNewEventData, formStartTime);
  }, [formStartTime, setNewEventData, updateModalStartTime]);

  useEffect(() => {
    setIsOpen(false);
    onDateUpdate(date);
  }, [date, onDateUpdate]);

  useEffect(() => {
    onStartTimeUpdate(startTime);
  }, [onStartTimeUpdate, startTime]);

  if (isOpen) {
    return (
      <div className="full-settings">
        <div className={previewClasses}>
          <ModalIcon iconName={iconName} />
          <div className="settings-inner time-date-settings">
            <div className="time-date-inputs-wrapper">
              <TextInput
                defaultValue={date}
                id="date"
                style={{ width: 170 }}
                onBlur={setNewDate}
                onChange={(event) => onDateUpdate(event.target.value)}
              />
              <TextInput
                defaultValue={startTime}
                id="time-start"
                style={{ width: 52 }}
                onBlur={setNewStartTime}
                onChange={(event) => onStartTimeUpdate(event.target.value)}
              />
              <TextInput
                defaultValue={endTime}
                id="time-end"
                style={{ width: 52 }}
              />
            </div>
            <div className="time-date-other-settings">
              <label htmlFor="all-day" className="checkbox-input">
                All day <input type="checkbox" id="all-day" />
                <span className="checkmark"></span>
              </label>
              <Button title="Time zone" />
            </div>
            <Dropdown options={repeatOptions} initialValue={repeatOptions[0]} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <TimeDatePreview
      previewClasses={previewClasses}
      date={date}
      startTime={startTime}
      endTime={endTime}
      iconName={iconName}
      onOpen={setIsOpen}
    />
  );
};

export default memo(TimeDate);
