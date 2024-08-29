import { memo, ReactNode, useState } from 'react';
import MaterialIcon from '../../../MaterialIcon/MaterialIcon';

import type { IconName } from '../../../../types/main';

import './oneSetting.scss';

type OneSettingProps = {
  iconName?: IconName | 'google-meets';
  preview: ReactNode;
  settings?: ReactNode;
};

const OneSetting = ({ iconName, preview, settings }: OneSettingProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const previewClasses = `${iconName ? 'has-icon ' : 'no-icon'} ${!isOpen ? 'preview-setting' : ''}  modal-event-side-margins`;

  const Icon = () => {
    if (!iconName) return null;
    if (iconName === 'google-meets') {
      return (
        <img
          alt="google meeting icon"
          src="./logo_meet_2020q4_192px.svg"
          className="custom-icon"
        />
      );
    }
    return (
      <div className="modal-icon">
        <MaterialIcon iconName={iconName} small={true} />
      </div>
    );
  };

  return (
    <div className="single-setting-section">
      {!isOpen && (
        <div className={previewClasses}>
          <Icon />
          {settings ? (
            <div
              className="to-select settings-width"
              onClick={() => (settings ? setIsOpen(!isOpen) : null)}
            >
              {preview}
            </div>
          ) : (
            preview
          )}
        </div>
      )}

      {isOpen && settings && (
        <div className="full-settings">
          <div className={previewClasses}>
            <Icon />
            <div className="settings-width">{settings}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(OneSetting);
