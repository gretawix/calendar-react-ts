import { memo } from 'react';
import Button from '../Button/Button';
import TopControls from './subComponents/TopControls/TopControls';
import ControlButtons from './subComponents/ControlButtons/ControlButtons';
import EventTitle from './subComponents/EventTile/EventTitle';
import EventSettings from './subComponents/EventSettings/EventSettings';

import './modal.scss';

const Modal = () => {
  return (
    <div className="event-modal" id="event-modal">
      <TopControls />
      <div className="event-content">
        <EventTitle />
        <div className="event-settings">
          <div className="event-type-buttons">
            <Button title="Event" styleType="selected" />
            <Button title="Task" />
            <Button title="Appointment schedule" />
          </div>
          <EventSettings />
        </div>
        <ControlButtons />
      </div>
    </div>
  );
};

export default memo(Modal);
