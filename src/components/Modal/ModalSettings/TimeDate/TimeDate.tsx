import { memo, useState } from 'react';
import Button from '../../../Button/Button';
import Dropdown from '../../../Dropdown/Dropdown';

import './timeDate.scss';

const TimeDate = ({ preview = true }: { preview?: boolean }) => {
  const [date, setDate] = useState('Thursday, July 4');
  const [startTime, setStartTime] = useState('09:00');
  const [endTime, setEndTime] = useState('09:30');

  const repeatOptions = [
    'Does not repeat',
    'Daily',
    'Weekly on TODAY',
    'Monthly on NTH TODAY',
    'Annually on MONTH DAY',
    'Every weekday (Monday to Friday)',
    'Custom...',
  ];

  if (preview) {
    return (
      <div className="time-date-select">
        <p>
          <span id="date-btn" className="clickable-wrapper">
            <span className="clickable">{date}</span>
          </span>
          <span id="time-start-btn" className="clickable-wrapper">
            <span className="clickable">{startTime}</span>
          </span>
          –
          <span id="time-end-btn" className="clickable-wrapper">
            <span className="clickable">{endTime}</span>
          </span>
        </p>
        <ul className="action-description">
          <li>Time zone</li>
          <li>Does not repeat</li>
        </ul>
      </div>
    );
  }
  return (
    <div className="settings-inner time-date-settings">
      <div className="time-date-inputs-wrapper">
        <label htmlFor="date">
          <input
            type="text"
            id="date"
            className="standard-input date-input"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </label>
        <label htmlFor="time-start" className="select-input">
          <input
            type="text"
            id="time-start"
            className="standard-input time-input"
            value={startTime}
            onChange={(event) => setStartTime(event.target.value)}
          />
        </label>
        <p>–</p>
        <label htmlFor="time-end" className="select-input">
          <input
            type="text"
            id="time-end"
            className="standard-input time-input"
            value={endTime}
            onChange={(event) => setEndTime(event.target.value)}
          />
        </label>
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
  );
};

export default memo(TimeDate);
