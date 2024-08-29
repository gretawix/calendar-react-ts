import { memo } from 'react';
import Dropdown from '../../../Dropdown/Dropdown';
import MaterialIcon from '../../../MaterialIcon/MaterialIcon';
import Button from '../../../Button/Button';
import OneSetting from '../OneSetting/OneSetting';
import TimeDate from '../../ModalSettings/TimeDate/TimeDate';

import './eventSettings.scss';
import Guests from '../../ModalSettings/Guests/Guests';

const EventSettings = () => {
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
      <OneSetting
        iconName="schedule"
        preview={<TimeDate />}
        settings={<TimeDate preview={false} />}
      />
      <OneSetting preview={<Button title="Find a time" styleType="inline" />} />
      <OneSetting
        iconName="group"
        preview={<Guests />}
        settings={<Guests preview={false} />}
      />
      <OneSetting
        iconName="google-meets"
        preview={
          <Button
            style={{ marginLeft: 8 }}
            styleType="cta"
            className="google-meet-selection"
            title="Add Google Meet video conferencing"
          />
        }
      />

      <div className="location single-setting-section with-separator">
        <div className="has-icon modal-event-side-margins preview-settings">
          <div className="modal-icon">
            <MaterialIcon iconName="location_on" small={true} />
          </div>
          <div className="settings-width">
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
            <div className="settings-width">
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
            <div className="settings-width">
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
          <div className="settings-width">
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
            <div className="settings-width">
              <div className="settings">Add description</div>
            </div>
          </div>
          <div className="has-icon modal-event-side-margins">
            <div className="modal-icon">
              <MaterialIcon iconName="attach_file" small={true} />
            </div>
            <div className="settings-width">
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
          <div className="settings-width">
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
            <div className="settings-width">
              <div className="settings">name surname</div>
            </div>
          </div>
          <div className="has-icon modal-event-side-margins">
            <div className="modal-icon">
              <MaterialIcon iconName="work" small={true} />
            </div>
            <div className="settings-width">
              <div className="settings">
                <Dropdown options={['Busy', 'Free']} />
              </div>
            </div>
          </div>
          <div className="has-icon modal-event-side-margins">
            <div className="modal-icon">
              <MaterialIcon iconName="lock" small={true} />
            </div>
            <div className="settings-width">
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
            <div className="settings-width">
              <div className="settings">
                <Dropdown options={notificationOptions} />
              </div>
            </div>
          </div>
          <div className="no-icon">
            <div className="settings-width">
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
