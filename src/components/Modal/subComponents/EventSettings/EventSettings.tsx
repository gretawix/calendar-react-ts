import { memo } from 'react';
import Button from '../../../Button/Button';
import OneSetting from '../OneSetting/OneSetting';
import TimeDate from '../../ModalSettings/TimeDate/TimeDate';

import './eventSettings.scss';
import Guests from '../../ModalSettings/Guests/Guests';

const EventSettings = () => {
  return (
    <div className="event-settings-selection">
      <OneSetting
        iconName="schedule"
        preview={<TimeDate />}
        settings={<TimeDate preview={false} />}
      />
      <OneSetting preview={<Button title="Find a time" styleType="inline" />} />
      <OneSetting
        iconName="group"
        preview={<Guests />}
        settings={<Guests preview={false} />}
      />
      <OneSetting
        iconName="google-meets"
        preview={
          <Button
            style={{ marginLeft: 8 }}
            styleType="cta"
            className="google-meet-selection"
            title="Add Google Meet video conferencing"
          />
        }
      />
    </div>
  );
};

export default memo(EventSettings);
