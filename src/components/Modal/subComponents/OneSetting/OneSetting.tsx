import { memo } from 'react';
import Dropdown from '../../../Dropdown/Dropdown';
import MaterialIcon from '../../../MaterialIcon/MaterialIcon';
import Button from '../../../Button/Button';

import type { IconName } from '../../../../types/main';

type OneSettingProps = {
  iconName: IconName;
  className: string;
};

const OneSetting = ({ iconName, className }: OneSettingProps) => {
  const repeatOptions = [
    'Does not repeat',
    'Daily',
    'Weekly on TODAY',
    'Monthly on NTH TODAY',
    'Annually on MONTH DAY',
    'Every weekday (Monday to Friday)',
    'Custom...',
  ];

  return (
    <div className={`${className} single-setting-section`}>
      <div className="has-icon modal-event-side-margins preview-settings">
        <div className="modal-icon">
          <MaterialIcon iconName="schedule" small={true} />
        </div>
        <div className="selection-content">
          <div className="to-select">
            <p>
              <span id="date-btn" className="clickable-wrapper">
                <span className="clickable" data-clickable-id="date">
                  Thursday, July 4
                </span>
              </span>
              <span id="time-start-btn" className="clickable-wrapper">
                <span
                  className="clickable"
                  data-clickable-id="time-start"
                ></span>
              </span>
              –
              <span id="time-end-btn" className="clickable-wrapper">
                <span className="clickable" data-clickable-id="time-end"></span>
              </span>
            </p>
            <ul className="action-description">
              <li>Time zone</li>
              <li>Does not repeat</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="full-settings">
        <div className="has-icon modal-event-side-margins">
          <div className="modal-icon">
            <MaterialIcon iconName={iconName} small={true} />
          </div>
          <div className="selection-content">
            <div className="settings">
              <div className="settings-inner">
                <div className="time-date-inputs-wrapper">
                  <label htmlFor="date">
                    <input
                      type="text"
                      id="date"
                      className="standard-input date-input"
                      value="Thursday, July 4"
                      data-clickable-input="date"
                    />
                  </label>
                  <label htmlFor="time-start" className="select-input">
                    <input
                      type="text"
                      id="time-start"
                      className="standard-input time-input"
                      data-clickable-input="time-start"
                    />
                  </label>
                  <p>–</p>
                  <label htmlFor="time-end" className="select-input">
                    <input
                      type="text"
                      id="time-end"
                      className="standard-input time-input"
                      data-clickable-input="time-end"
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(OneSetting);
