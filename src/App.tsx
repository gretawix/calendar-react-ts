import { memo, useEffect, useRef } from 'react';
import WeekDaysRow from './components/WeekDaysRow';

import TimeGrid from './components/TimeGrid';
import { useScroll } from './hooks/useScroll';
import Modal from './components/EventCreationModal';
import { useModal } from './hooks/useModal';

import './App.scss';
import { cellHeightInPx } from './constants';

function App() {
  const { isModalOpen } = useModal();

  const weekDaysRowRef = useRef<HTMLDivElement>(null);
  const timeGridRef = useRef<HTMLDivElement>(null);

  const { handleHorizontalScroll } = useScroll();

  const onWeekDaysScroll = () => {
    handleHorizontalScroll(weekDaysRowRef, timeGridRef);
  };

  const onTimeGridScroll = () => {
    handleHorizontalScroll(timeGridRef, weekDaysRowRef);
  };

  useEffect(() => {
    if (timeGridRef.current) {
      timeGridRef.current.scrollTop = cellHeightInPx * 8;
    }
  }, []);

  return (
    <div
      className="calendar"
      style={{ '--cell-height': `${cellHeightInPx}px` } as React.CSSProperties}
    >
      <div className="week-view">
        <WeekDaysRow onScroll={onWeekDaysScroll} ref={weekDaysRowRef} />
        <TimeGrid onHorizontalScroll={onTimeGridScroll} ref={timeGridRef} />
        {isModalOpen && <Modal />}
      </div>
    </div>
  );
}

export default memo(App);
