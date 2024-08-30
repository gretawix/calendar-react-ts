import { memo, useCallback } from 'react';
import Button from '../Button/Button';
import TopControls from './subComponents/TopControls/TopControls';
import ControlButtons from './subComponents/ControlButtons/ControlButtons';
import EventTitle from './subComponents/EventTitle/EventTitle';
import EventSettings from './subComponents/EventSettings/EventSettings';

import './modal.scss';

type ModalProps = {
  closeModal: () => void;
};

const Modal = ({ closeModal }: ModalProps) => {
  const saveEvent = useCallback(() => {
    closeModal();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="event-modal" id="event-modal">
      <TopControls onCloseModal={closeModal} />
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
        <ControlButtons onSaveClick={saveEvent} />
      </div>
    </div>
  );
};

export default memo(Modal);
