import { forwardRef, memo } from 'react';

import '../../styles/buttons.scss';

type ButtonProps = {
  title: string;
  styleType?: 'selected' | 'cta' | 'inline' | 'clickable';
  type?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ title, styleType, className, type, ...rest }, ref) => {
    return (
      <>
        <button
          type={type ? type : 'button'}
          className={`${styleType ?? ''} ${className ?? ''}`.trim()}
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
