import { memo } from 'react';
import Dropdown from '../../../Dropdown/Dropdown';
import MaterialIcon from '../../../MaterialIcon/MaterialIcon';
import Button from '../../../Button/Button';

import './eventSettings.scss';
import OneSetting from '../OneSetting/OneSetting';

const EventSettings = () => {
  const repeatOptions = [
    'Does not repeat',
    'Daily',
    'Weekly on TODAY',
    'Monthly on NTH TODAY',
    'Annually on MONTH DAY',
    'Every weekday (Monday to Friday)',
    'Custom...',
  ];

  const notificationOptions = [
    '5 minutes before',
    '10 minutes before',
    '15 minutes before',
    '30 minutes before',
    '1 hour before',
    '1 day before',
    'Custom...',
  ];
  return (
    <div className="event-settings-selection">
      <OneSetting iconName="schedule" className="time-date" />
      <div className="time-date single-setting-section">
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
                  <span
                    className="clickable"
                    data-clickable-id="time-end"
                  ></span>
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
              <MaterialIcon iconName="schedule" small={true} />
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

      <div className="find-time no-icon modal-event-side-margins">
        <Button title="Find a time" styleType="inline" />
      </div>
      <div className="guests single-setting-section">
        <div className="has-icon modal-event-side-margins preview-settings">
          <div className="modal-icon">
            <MaterialIcon iconName="group" small={true} />
          </div>
          <div className="selection-content">
            <div className="to-select">
              <p>Add guests</p>
            </div>
          </div>
        </div>
        <div className="full-settings">
          <div className="has-icon modal-event-side-margins">
            <div className="modal-icon">
              <MaterialIcon iconName="group" small={true} />
            </div>
            <div className="selection-content">
              <div className="settings">
                <label htmlFor="guests">
                  <input
                    type="text"
                    id="guests"
                    className="standard-input date-input"
                    placeholder="Add guests"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="google-meet has-icon modal-event-side-margins">
        <div className="modal-icon">
          <img
            alt="google meeting icon"
            src="./logo_meet_2020q4_192px.svg"
            className="custom-icon"
          />
        </div>
        <Button
          styleType="cta"
          className="google-meet-selection"
          title="Add Google Meet video conferencing"
        />
      </div>
      <div className="location single-setting-section with-separator">
        <div className="has-icon modal-event-side-margins preview-settings">
          <div className="modal-icon">
            <MaterialIcon iconName="location_on" small={true} />
          </div>
          <div className="selection-content">
            <div className="to-select">
              <p>
                Add
                <span className="clickable">rooms</span>
                or
                <span className="clickable">location</span>
              </p>
            </div>
          </div>
        </div>
        <div className="full-settings">
          <div className="has-icon modal-event-side-margins">
            <div className="modal-icon">
              <MaterialIcon iconName="meeting_room" small={true} />
            </div>
            <div className="selection-content">
              <div className="settings">
                <label htmlFor="rooms">
                  <input
                    type="text"
                    id="rooms"
                    className="standard-input date-input"
                    placeholder="Add rooms"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="has-icon modal-event-side-margins">
            <div className="modal-icon">
              <MaterialIcon iconName="location_on" small={true} />
            </div>
            <div className="selection-content">
              <div className="settings">
                <label htmlFor="location">
                  <input
                    type="text"
                    id="location"
                    className="standard-input date-input"
                    placeholder="Add location"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="description single-setting-section with-separator">
        <div className="has-icon modal-event-side-margins preview-settings">
          <div className="modal-icon">
            <MaterialIcon iconName="subject" small={true} />
          </div>
          <div className="selection-content">
            <div className="to-select">
              <p>
                Add
                <span className="clickable">description</span>
                or
                <span className="clickable">attachments</span>
              </p>
            </div>
          </div>
        </div>
        <div className="full-settings">
          <div className="has-icon modal-event-side-margins">
            <div className="modal-icon">
              <MaterialIcon iconName="subject" small={true} />
            </div>
            <div className="selection-content">
              <div className="settings">Add description</div>
            </div>
          </div>
          <div className="has-icon modal-event-side-margins">
            <div className="modal-icon">
              <MaterialIcon iconName="attach_file" small={true} />
            </div>
            <div className="selection-content">
              <div className="settings">Add attachment</div>
            </div>
          </div>
        </div>
      </div>
      <div className="status single-setting-section with-separator">
        <div className="has-icon modal-event-side-margins preview-settings">
          <div className="modal-icon">
            <MaterialIcon iconName="event" small={true} />
          </div>
          <div className="selection-content">
            <div className="to-select">
              <div className="name-wrapper">
                <p>Name Surname</p>
                <div className="bubble blue"></div>
              </div>
              <ul className="action-description">
                <li>Busy</li>
                <li>Default visibility</li>
                <li>Notify 10 minutes behtmlFore</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="full-settings">
          <div className="has-icon modal-event-side-margins">
            <div className="modal-icon">
              <MaterialIcon iconName="event" small={true} />
            </div>
            <div className="selection-content">
              <div className="settings">name surname</div>
            </div>
          </div>
          <div className="has-icon modal-event-side-margins">
            <div className="modal-icon">
              <MaterialIcon iconName="work" small={true} />
            </div>
            <div className="selection-content">
              <div className="settings">
                <Dropdown options={['Busy', 'Free']} />
              </div>
            </div>
          </div>
          <div className="has-icon modal-event-side-margins">
            <div className="modal-icon">
              <MaterialIcon iconName="lock" small={true} />
            </div>
            <div className="selection-content">
              <div className="settings">
                <Dropdown
                  options={['Default visibility', 'Public', 'Private']}
                />
              </div>
            </div>
          </div>
          <div className="has-icon modal-event-side-margins">
            <div className="modal-icon">
              <MaterialIcon iconName="notifications" small={true} />
            </div>
            <div className="selection-content">
              <div className="settings">
                <Dropdown options={notificationOptions} />
              </div>
            </div>
          </div>
          <div className="no-icon">
            <div className="selection-content">
              <div className="settings">
                <Button
                  className="add-notification-btn"
                  title="Add notification"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(EventSettings);
