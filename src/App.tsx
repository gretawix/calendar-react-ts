import { useState } from 'react';
import WeekDaysRow from './components/WeekDaysRow';
import {
  createDay,
  createHoursList,
  getCurrentWeek,
  getTimeZone,
} from './utils/timeCalculations';
import TimeGrid from './components/TimeGrid';
import './App.scss';

function App() {
  const [baseDay] = useState(new Date());
  const week = getCurrentWeek(baseDay);
  const hoursList = createHoursList();
  const today = createDay(new Date());
  const timeZone = getTimeZone(new Date());

  return (
    <div className="calendar">
      <div className="week-view" id="week-view">
        <WeekDaysRow today={today} timeZone={timeZone} week={week} />
        <TimeGrid week={week} hours={hoursList} />
      </div>
    </div>
  );
}

export default App;
