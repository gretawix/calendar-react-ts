import { memo } from 'react';

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
  isClickable?: boolean;
  small?: boolean;
};

const MaterialSymbol = ({
  iconName,
  isClickable = false,
  small = false,
}: MaterialSymbolProps) => {
  const classNames = `material-symbols-outlined ${small ? 'small' : ''}`;

  return isClickable ? (
    <button type="button">
      <i className={classNames}>{iconName}</i>
    </button>
  ) : (
    <i className={classNames}>{iconName}</i>
  );
};

export default memo(MaterialSymbol);
