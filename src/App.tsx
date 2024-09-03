import { memo, useEffect, useRef } from 'react';
import WeekDaysRow from './components/WeekDaysRow/WeekDayRow';

import TimeGrid from './components/TimeGrid/TimeGrid';
import { useScroll } from './hooks/useScroll';
import Modal from './components/Modal/Modal';
import { useModal } from './hooks/useModal';

import './App.scss';
import { cellHeightInPx } from './constants/constants';

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
    document.documentElement.style.setProperty(
      '--cell-height',
      `${cellHeightInPx}px`
    );
    if (timeGridRef.current) {
      timeGridRef.current.scrollTop = cellHeightInPx * 8;
    }
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
