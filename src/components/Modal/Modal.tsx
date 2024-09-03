import { memo, useRef } from 'react';
import Button from '../Button/Button';
import TopControls from './subComponents/TopControls/TopControls';
import ControlButtons from './subComponents/ControlButtons/ControlButtons';
import EventTitle from './subComponents/EventTitle/EventTitle';
import EventSettings from './subComponents/EventSettings/EventSettings';
import { useModal } from '../../hooks/useModal';

import './modal.scss';
import type { InputRefs } from '../../types/main';

const Modal = () => {
  const { modalRef } = useModal();
  const inputRefs: InputRefs = {
    title: useRef<HTMLInputElement>(null),
    date: useRef<HTMLInputElement>(null),
    startTime: useRef<HTMLInputElement>(null),
    endTime: useRef<HTMLInputElement>(null),
  };

  return (
    <div className="event-modal" id="event-modal" ref={modalRef}>
      <TopControls />
      <form className="event-content">
        <EventTitle titleRef={inputRefs.title} />
        <div className="event-settings">
          <div className="event-type-buttons">
            <Button title="Event" styleType="selected" />
            <Button title="Task" />
            <Button title="Appointment schedule" />
          </div>
          <EventSettings inputRefs={inputRefs} />
        </div>
        <ControlButtons inputRefs={inputRefs} />
      </form>
    </div>
  );
};

export default memo(Modal);
