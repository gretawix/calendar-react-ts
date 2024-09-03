import { memo } from 'react';

import '../../styles/buttons.scss';

type ButtonProps = {
  title: string;
  styleType?: 'selected' | 'cta' | 'inline' | 'clickable';
  type?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  title,
  styleType,
  className,
  type,
  ...rest
}: ButtonProps) => {
  return (
    <>
      <button
        type={type ? type : 'button'}
        className={`${styleType ?? ''} ${className ?? ''}`.trim()}
        {...rest}
      >
        {styleType === 'clickable' ? <span>{title}</span> : title}
      </button>
    </>
  );
};

export default memo(Button);
