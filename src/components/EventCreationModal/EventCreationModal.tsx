import { memo } from 'react';
import Button from '../Button';
import TopControls from './TopControls';
import ControlButtons from './ControlButtons';
import EventTitle from './EventTitle';
import EventSettings from './EventSettings';
import { useModal } from '../../hooks/useModal';
import { useNewEvent } from '../../hooks/useNewEvent';

import './EventCreationModal.scss';

const Modal = () => {
  const { modalRef } = useModal();
  const { saveEvent } = useNewEvent();

  const handleSaveClick = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    saveEvent();
  };

  return (
    <div className="event-modal" ref={modalRef}>
      <TopControls />
      <form
        className="event-content"
        onSubmit={(event) => handleSaveClick(event)}
      >
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
      </form>
    </div>
  );
};

export default memo(Modal);
