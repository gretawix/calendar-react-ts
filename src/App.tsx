import { memo, useCallback, useRef } from 'react';
import WeekDaysRow from './components/WeekDaysRow/WeekDayRow';

import TimeGrid from './components/TimeGrid/TimeGrid';
import { useScroll } from './hooks/useScroll';
import Modal from './components/Modal/Modal';
import { useModal } from './hooks/useModal';

import './App.scss';

function App() {
  const { isModalOpen } = useModal();

  const weekDaysRowRef = useRef<HTMLDivElement>(null);
  const timeGridRef = useRef<HTMLDivElement>(null);

  const { handleHorizontalScroll } = useScroll();

  const onWeekDaysScroll = useCallback(() => {
    handleHorizontalScroll(weekDaysRowRef, timeGridRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onTimeGridScroll = useCallback(() => {
    handleHorizontalScroll(timeGridRef, weekDaysRowRef);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="calendar">
      <div className="week-view" id="week-view">
        <WeekDaysRow onScroll={onWeekDaysScroll} ref={weekDaysRowRef} />
        <TimeGrid onHorizontalScroll={onTimeGridScroll} ref={timeGridRef} />
        {isModalOpen && <Modal />}
      </div>
    </div>
  );
}

export default memo(App);
