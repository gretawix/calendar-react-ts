import { ScrollRef } from '../types/types';

export const useScroll = () => {
  const handleVerticalScroll = (sourceDiv: ScrollRef, targetDiv: ScrollRef) => {
    if (sourceDiv.current && targetDiv.current) {
      targetDiv.current.scrollTop = sourceDiv.current.scrollTop;
    }
  };

  const handleHorizontalScroll = (
    sourceDiv: ScrollRef,
    targetDiv: ScrollRef
  ) => {
    if (sourceDiv.current && targetDiv.current) {
      targetDiv.current.scrollLeft = sourceDiv.current.scrollLeft;
    }
  };

  return { handleVerticalScroll, handleHorizontalScroll };
};
