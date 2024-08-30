import { memo } from 'react';

import '../../styles/buttons.scss';

type ButtonProps = {
  title: string;
  styleType?: 'selected' | 'cta' | 'inline' | 'clickable';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ title, styleType, className, ...rest }: ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={`${styleType ?? ''} ${className ?? ''}`.trim()}
        {...rest}
      >
        {styleType === 'clickable' ? <span>{title}</span> : title}
      </button>
    </>
  );
};

export default memo(Button);
