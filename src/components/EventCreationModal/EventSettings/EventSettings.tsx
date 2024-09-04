import { memo } from 'react';
import Button from '../../Button';
import GenericSetting from '../GenericSetting';
import TimeDate from '../TimeDate';

import './eventSettings.scss';

type EventSettingsProps = {
  formDate: string;
  formStartTime: string;
  updateDate: React.Dispatch<React.SetStateAction<string>>;
  updateStartTime: React.Dispatch<React.SetStateAction<string>>;
};

const EventSettings = ({
  formDate,
  formStartTime,
  updateStartTime,
  updateDate,
}: EventSettingsProps) => {
  return (
    <div className="event-settings-selection">
      <TimeDate
        formDate={formDate}
        onDateUpdate={updateDate}
        formStartTime={formStartTime}
        onStartTimeUpdate={updateStartTime}
      />
      <GenericSetting>
        <Button title="Find a time" styleType="inline" />
      </GenericSetting>
      <GenericSetting iconName="google-meets">
        <Button
          style={{ marginLeft: 8 }}
          styleType="cta"
          className="google-meet-selection"
          title="Add Google Meet video conferencing"
        />
      </GenericSetting>
    </div>
  );
};

export default memo(EventSettings);
