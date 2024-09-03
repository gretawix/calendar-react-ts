import { cellHeightInPx } from '../contants/constants';

export const positionModalX = (
  event: React.MouseEvent,
  modal: HTMLDivElement
) => {
  const modalWidth = modal.getBoundingClientRect().width;
  const clickedCol = event.target;
  if (clickedCol instanceof HTMLElement) {
    const clickedColBox = clickedCol.getBoundingClientRect();

    if (clickedColBox) {
      modal.style.left = `${
        clickedColBox.left < modalWidth
          ? clickedColBox.left + clickedColBox.width + 8
          : clickedColBox.left - modalWidth - 12
      }px`;
    }
  }
};

export const positionModalY = (
  event: React.MouseEvent,
  modal: HTMLDivElement
) => {
  const modalHeight = modal.getBoundingClientRect().height;
  const bottomSpacing = 50;
  const distanceFromClickToTop = event.clientY;
  const distanceFromClickToBottom = window.innerHeight - distanceFromClickToTop;

  modal.style.bottom = 'unset';
  modal.style.top = 'unset';

  if (distanceFromClickToTop < 130) {
    modal.style.top = `${distanceFromClickToTop}px`;
  } else if (modalHeight + bottomSpacing > distanceFromClickToBottom) {
    modal.style.bottom = `${bottomSpacing}px`;
  } else {
    modal.style.top = `${distanceFromClickToTop - bottomSpacing}px`;
  }
};

export const getTilePositionFromClick = (event: React.MouseEvent) => {
  const clickedElement = event.target as HTMLElement;
  const distanceFromTop = clickedElement?.getBoundingClientRect().top;
  const clickPosition = event.clientY - distanceFromTop;
  const increment = cellHeightInPx / 2;

  return Math.floor(clickPosition / increment) * increment;
};
