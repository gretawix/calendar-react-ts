import { forwardRef, memo } from 'react';
import classNames from 'classnames';

type ButtonProps = {
  title: string;
  styleType?: 'selected' | 'cta' | 'inline' | 'clickable';
  type?: React.ButtonHTMLAttributes<unknown>['type'];
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ title, styleType, className, type, ...rest }, ref) => {
    const buttonClass = classNames(className, styleType);
    return (
      <>
        <button
          type={type ? type : 'button'}
          className={buttonClass}
          ref={ref}
          {...rest}
        >
          {styleType === 'clickable' ? <span>{title}</span> : title}
        </button>
      </>
    );
  }
);

export default memo(Button);
