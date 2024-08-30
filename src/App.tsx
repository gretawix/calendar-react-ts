import { memo, useCallback, useMemo, useRef, useState } from 'react';
import WeekDaysRow from './components/WeekDaysRow/WeekDayRow';
import {
  createDay,
  createHoursList,
  getCurrentWeek,
  getTimeZone,
} from './utils/timeCalculations';
import TimeGrid from './components/TimeGrid/TimeGrid';
import { useScroll } from './hooks/useScroll';
import Modal from './components/Modal/Modal';

import './App.scss';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTileColId, setActiveTileColId] = useState<string | null>(null);
  const [baseDay] = useState(new Date());

  const week = useMemo(() => getCurrentWeek(baseDay), [baseDay]);
  const hoursList = useMemo(() => createHoursList(), []);
  const today = useMemo(() => createDay(new Date()), []);
  const timeZone = useMemo(() => getTimeZone(new Date()), []);

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

  const handleColumnClick = useCallback((columnId: string) => {
    setIsModalOpen(true);
    setActiveTileColId(columnId);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setActiveTileColId(null);
  }, []);

  return (
    <div className="calendar">
      <div className="week-view" id="week-view">
        <WeekDaysRow
          today={today}
          timeZone={timeZone}
          week={week}
          onScroll={onWeekDaysScroll}
          ref={weekDaysRowRef}
        />
        <TimeGrid
          week={week}
          hours={hoursList}
          onHorizontalScroll={onTimeGridScroll}
          ref={timeGridRef}
          activeTileColId={activeTileColId}
          onColumnClick={handleColumnClick}
        />
        {isModalOpen && <Modal closeModal={closeModal} />}
      </div>
    </div>
  );
}

export default memo(App);
