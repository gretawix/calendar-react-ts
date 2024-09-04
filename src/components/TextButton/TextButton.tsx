import { forwardRef, memo } from 'react';
import classNames from 'classnames';

import '../../styles/buttons.scss';

type ButtonProps = {
  title: string;
  type?: React.ButtonHTMLAttributes<unknown>['type'];
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const TextButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ title, className, type, ...rest }, ref) => {
    const buttonClass = classNames(className, 'clickable');
    return (
      <>
        <button
          type={type ? type : 'button'}
          className={buttonClass}
          ref={ref}
          {...rest}
        >
          <span>{title}</span>
        </button>
      </>
    );
  }
);

export default memo(TextButton);
