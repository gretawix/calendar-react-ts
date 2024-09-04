import { useState, useEffect } from 'react';

const useElementWidth = (
  ref: React.RefObject<HTMLElement | HTMLButtonElement | HTMLInputElement>
): number => {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const updateWidth = () => {
      const width = ref.current ? ref.current.offsetWidth : 0;
      setWidth(width);
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, [ref]);

  return width;
};

export default useElementWidth;
