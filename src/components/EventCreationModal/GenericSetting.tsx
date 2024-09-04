import { memo, ReactNode } from 'react';
import ModalIcon from './ModalIcon';
import classNames from 'classnames';

import type { IconName } from '../../types';

type OneSettingProps = {
  iconName?: IconName | 'google-meets';
  children: ReactNode;
};

const OneSetting = ({ iconName, children }: OneSettingProps) => {
  const previewClasses = classNames(
    'preview-setting',
    'modal-event-side-margins',
    {
      'has-icon': iconName,
      'no-icon': !iconName,
    }
  );

  return (
    <div className="single-setting-section">
      <div className={previewClasses}>
        {iconName && <ModalIcon iconName={iconName} />}
        {children}
      </div>
    </div>
  );
};

export default memo(OneSetting);
