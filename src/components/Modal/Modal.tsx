import { memo } from 'react';
import Button from '../Button/Button';
import TopControls from './subComponents/TopControls/TopControls';
import ControlButtons from './subComponents/ControlButtons/ControlButtons';
import EventTitle from './subComponents/EventTitle/EventTitle';
import EventSettings from './subComponents/EventSettings/EventSettings';

import './modal.scss';
import { useModal } from '../../hooks/useModal';

const Modal = () => {
  const { modalRef } = useModal();

  return (
    <div className="event-modal" id="event-modal" ref={modalRef}>
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
