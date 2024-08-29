import { memo } from 'react';

import './materialIcon.scss';

type IconName =
  | 'drag_handle'
  | 'close'
  | 'schedule'
  | 'group'
  | 'location_on'
  | 'meeting_room'
  | 'subject'
  | 'attach_file'
  | 'event'
  | 'work'
  | 'lock'
  | 'notifications';

type MaterialSymbolProps = {
  iconName: IconName;
  small?: boolean;
};

const MaterialSymbol = ({ iconName, small = false }: MaterialSymbolProps) => {
  return (
    <i className={`material-symbols-outlined ${small ? 'small' : ''}`}>
      {iconName}
    </i>
  );
};

export default memo(MaterialSymbol);
