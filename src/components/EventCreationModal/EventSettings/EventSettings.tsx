import { memo } from 'react';
import Button from '../../Button';
import GenericSetting from '../GenericSetting';
import TimeDate from '../TimeDate';

import './eventSettings.scss';

type EventSettingsProps = {
  formDate: string;
  updateDate: React.Dispatch<React.SetStateAction<string>>;
};

const EventSettings = ({ formDate, updateDate }: EventSettingsProps) => {
  return (
    <div className="event-settings-selection">
      <TimeDate formDate={formDate} onDateUpdate={updateDate} />
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
