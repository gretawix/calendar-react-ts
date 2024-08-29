import { memo } from 'react';

import './button.scss';

type ButtonProps = {
  title: string;
  styleType?: 'selected' | 'cta' | 'inline';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, styleType, className, ...rest }: ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={`${styleType ?? ''} ${className ?? ''}`.trim()}
        {...rest}
      >
        {title}
      </button>
    </>
  );
};

export default memo(Button);
