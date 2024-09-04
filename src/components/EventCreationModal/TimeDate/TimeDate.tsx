import { memo, useEffect, useState } from 'react';
import Button from '../../Button';
import Dropdown from '../../Dropdown';
import ModalIcon from '../ModalIcon';
import TextInput from '../../inputs/TextInput';
import { useNewEvent } from '../../../hooks/useNewEvent';
import { getTime } from '../../../utils/time';
import useTimeDateUpdate from './useTimeDateUpdate';
import classNames from 'classnames';
import TimeDatePreview from './TimeDatePreview';

import type { IconName } from '../../../types';

const TimeDate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { updateDate, updateStartTime, updateEndTime } = useTimeDateUpdate();
  const { newEventData } = useNewEvent();

  const date = `${newEventData.weekDayLong}, ${newEventData.monthLong} ${newEventData.day}`;
  const startTime = getTime(newEventData.startTimeInMinutes);
  const endTime = getTime(
    newEventData.startTimeInMinutes + newEventData.eventLengthInMinutes
  );

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

  const setNewDate = (event: React.FocusEvent<HTMLInputElement>) =>
    updateDate(event.target.value);

  const setNewStartTime = (event: React.FocusEvent<HTMLInputElement>) =>
    updateStartTime(event.target.value);

  const setNewEndTime = (event: React.FocusEvent<HTMLInputElement>) =>
    updateEndTime(event.target.value);

  useEffect(() => {
    setIsOpen(false);
  }, [date]);

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
              />
              <TextInput
                defaultValue={startTime}
                id="time-start"
                style={{ width: 52 }}
                onBlur={setNewStartTime}
              />
              <TextInput
                defaultValue={endTime}
                id="time-end"
                style={{ width: 52 }}
                onBlur={setNewEndTime}
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
