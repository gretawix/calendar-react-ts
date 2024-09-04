import { useEffect, useCallback } from 'react';

type targetKey = 'Escape' | 'Enter';

const useKeyDown = (targetKey: targetKey, callback: () => void) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        callback();
      }
    },
    [callback, targetKey]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);
};

export default useKeyDown;
