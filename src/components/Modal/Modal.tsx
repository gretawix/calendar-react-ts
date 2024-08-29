import { memo } from 'react';
import MaterialSymbol from '../MaterialIcon/MaterialIcon';
import Button from '../Button/Button';
import TopControls from './subComponents/TopControls';

import './modal.scss';

const Modal = () => {
  return (
    <div className="event-modal" id="event-modal">
      <TopControls />
      <div className="event-content">
        <div className="event-title">
          <label className="text-input-label large" htmlFor="title">
            <input
              type="text"
              id="title"
              placeholder="Add title"
              className="text-input large"
              autoFocus
            />
          </label>
        </div>
        <div className="event-settings">
          <div className="event-type-buttons">
            <Button title="Event" styleType="selected" />
            <Button title="Task" />
            <Button title="Appointment schedule" />
          </div>
          <div className="event-settings-selection">
            <div className="time-date single-setting-section">
              <div className="has-icon modal-event-side-margins preview-settings">
                <div className="modal-icon">
                  <MaterialSymbol iconName="schedule" small={true} />
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
                    <MaterialSymbol iconName="schedule" small={true} />
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
                          <label htmlFor="time-start" className="time-select">
                            <input
                              type="text"
                              id="time-start"
                              className="standard-input time-input"
                              data-clickable-input="time-start"
                            />
                          </label>
                          <p>–</p>
                          <label htmlFor="time-end" className="time-select">
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
                        <div className="select-input">
                          <button type="button" className="dropdown">
                            <span className="dropdown-label">
                              Does not repeat
                            </span>
                            <span className="dropdown-arrow">
                              <img src="./arrow-drop-down.svg" />
                            </span>
                          </button>
                          <ul className="repeat-options select-options">
                            <li id="does-not-repeat" className="selected">
                              Does not repeat
                            </li>
                            <li id="repeat-daily">Daily</li>
                            <li id="repeat-weekly">Weekly on TODAY</li>
                            <li id="repeat-monthly">Monthly on NTH TODAY</li>
                            <li id="repeat-anually">Anually on MONTH DAY</li>
                            <li id="repeat-every-weekday">
                              Every weekday (Monday to Friday)
                            </li>
                            <li id="repeat-custom">Custom...</li>
                          </ul>
                        </div>
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
                  <MaterialSymbol iconName="group" small={true} />
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
                    <MaterialSymbol iconName="group" small={true} />
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
                  <MaterialSymbol iconName="location_on" small={true} />
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
                    <MaterialSymbol iconName="meeting_room" small={true} />
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
                    <MaterialSymbol iconName="location_on" small={true} />
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
                  <MaterialSymbol iconName="subject" small={true} />
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
                    <MaterialSymbol iconName="subject" small={true} />
                  </div>
                  <div className="selection-content">
                    <div className="settings">Add description</div>
                  </div>
                </div>
                <div className="has-icon modal-event-side-margins">
                  <div className="modal-icon">
                    <MaterialSymbol iconName="attach_file" small={true} />
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
                  <MaterialSymbol iconName="event" small={true} />
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
                    <MaterialSymbol iconName="event" small={true} />
                  </div>
                  <div className="selection-content">
                    <div className="settings">name surname</div>
                  </div>
                </div>
                <div className="has-icon modal-event-side-margins">
                  <div className="modal-icon">
                    <MaterialSymbol iconName="work" small={true} />
                  </div>
                  <div className="selection-content">
                    <div className="settings">
                      <div className="select-input">
                        <button type="button" className="dropdown">
                          <span className="dropdown-label">Busy</span>
                          <span className="dropdown-arrow">
                            <img src="./arrow-drop-down.svg" />
                          </span>
                        </button>
                        <ul className="availability-options select-options">
                          <li id="availability-busy" className="selected">
                            Busy
                          </li>
                          <li id="availability-free">Free</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="has-icon modal-event-side-margins">
                  <div className="modal-icon">
                    <MaterialSymbol iconName="lock" small={true} />
                  </div>
                  <div className="selection-content">
                    <div className="settings">
                      <div className="select-input">
                        <button type="button" className="dropdown">
                          <span className="dropdown-label">
                            Default visibility
                          </span>
                          <span className="dropdown-arrow">
                            <img src="./arrow-drop-down.svg" />
                          </span>
                        </button>
                        <ul className="visibility-options select-options">
                          <li id="default-visibility" className="selected">
                            Default visibility
                          </li>
                          <li id="public-visibility">Public</li>
                          <li id="private-visibility">Private</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="has-icon modal-event-side-margins">
                  <div className="modal-icon">
                    <MaterialSymbol iconName="notifications" small={true} />
                  </div>
                  <div className="selection-content">
                    <div className="settings">
                      <div className="select-input dropdown-above">
                        <button type="button" className="dropdown">
                          <span className="dropdown-label">
                            10 minutes behtmlFore
                          </span>
                          <span className="dropdown-arrow">
                            <img src="./arrow-drop-down.svg" />
                          </span>
                        </button>
                        <ul className="notifications-options select-options">
                          <li id="notifications-5">5 minutes behtmlFore</li>
                          <li id="notifications-10" className="selected">
                            10 minutes behtmlFore
                          </li>
                          <li id="notifications-15">15 minutes behtmlFore</li>
                          <li id="notifications-30">30 minutes behtmlFore</li>
                          <li id="notifications-1h">1 hour behtmlFore</li>
                          <li id="notifications-1d">1 day behtmlFore</li>
                          <li id="notifications-custom">Custom...</li>
                        </ul>
                      </div>
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
        </div>
        <div className="event-control-buttons modal-event-side-margins">
          <Button title="More options" />
          <Button title="Save" styleType="cta" id="save-event-btn" />
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
