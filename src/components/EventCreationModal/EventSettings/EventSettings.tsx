import { memo } from 'react';
import Button from '../../Button';
import GenericSetting from '../GenericSetting';
import TimeDate from '../TimeDate';

import './eventSettings.scss';
import type { InputRefs } from '../../../types';

type EventSettingsProps = {
  inputRefs: InputRefs;
};

const EventSettings = ({ inputRefs }: EventSettingsProps) => {
  return (
    <div className="event-settings-selection">
      <TimeDate
        dateTimeInputRefs={{
          date: inputRefs.date,
          startTime: inputRefs.startTime,
          endTime: inputRefs.endTime,
        }}
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
