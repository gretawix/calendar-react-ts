import { memo } from 'react';
import Button from '../../../Button/Button';
import GenericSetting from '../GenericSetting';
import TimeDate from '../../TimeDate/TimeDate';

import './eventSettings.scss';

const EventSettings = () => {
  return (
    <div className="event-settings-selection">
      <TimeDate />

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
