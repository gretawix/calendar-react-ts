import { memo, useRef, useState } from 'react';
import WeekDaysRow from './components/WeekDaysRow';
import {
  createDay,
  createHoursList,
  getCurrentWeek,
  getTimeZone,
} from './utils/timeCalculations';
import TimeGrid from './components/TimeGrid';
import './App.scss';
import { useScroll } from './hooks/useScroll';
import Modal from './components/Modal';

function App() {
  const [baseDay] = useState(new Date());
  const week = getCurrentWeek(baseDay);

  const hoursList = createHoursList();
  const today = createDay(new Date());
  const timeZone = getTimeZone(new Date());

  const weekDaysRowRef = useRef<HTMLDivElement>(null);
  const timeGridRef = useRef<HTMLDivElement>(null);

  const { handleHorizontalScroll } = useScroll();

  const onWeekDaysScroll = () => {
    handleHorizontalScroll(weekDaysRowRef, timeGridRef);
  };

  const onTimeGridScroll = () => {
    handleHorizontalScroll(timeGridRef, weekDaysRowRef);
  };

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
          onScroll={onTimeGridScroll}
          ref={timeGridRef}
        />
        <Modal />
      </div>
    </div>
  );
}

export default memo(App);
