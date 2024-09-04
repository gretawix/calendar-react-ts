import { memo } from 'react';
import ModalIcon from '../ModalIcon';
import TextButton from '../../TextButton';

import type { IconName } from '../../../types';
type TimeDatePreviewProps = {
  previewClasses: string;
  iconName: IconName;
  date: string;
  startTime: string;
  endTime: string;
  onOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const TimeDatePreview = ({
  previewClasses,
  iconName,
  date,
  startTime,
  endTime,
  onOpen,
}: TimeDatePreviewProps) => {
  return (
    <div className="time-date single-setting-section">
      <div className={previewClasses}>
        <ModalIcon iconName={iconName} />
        <div className="to-select settings-width" onClick={() => onOpen(true)}>
          <div className="time-date-select">
            <p>
              <TextButton title={date} />
              <TextButton title={startTime} />
              -
              <TextButton title={endTime} />
            </p>
            <ul className="action-description">
              <li>Time zone</li>
              <li>Does not repeat</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(TimeDatePreview);
