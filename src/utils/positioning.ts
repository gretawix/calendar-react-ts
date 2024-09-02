export const positionModalX = (
  event: React.MouseEvent,
  modalRef: React.MutableRefObject<HTMLDivElement | null>
) => {
  const modal = modalRef.current;

  if (modal) {
    const modalWidth = modal.getBoundingClientRect().width;
    const clickedElement = event.target;
    if (clickedElement instanceof HTMLElement) {
      const clickedElementBox = clickedElement?.getBoundingClientRect();

      if (clickedElementBox) {
        modal.style.left = `${
          clickedElementBox.left < modalWidth
            ? clickedElementBox.left + clickedElementBox.width + 8
            : clickedElementBox.left - modalWidth - 12
        }px`;
      }
    }
  }
};

export const positionModalY = (
  event: React.MouseEvent,
  modalRef: React.MutableRefObject<HTMLDivElement | null>
) => {
  const modal = modalRef.current;

  if (modal) {
    const modalHeight = modal.getBoundingClientRect().height;
    const bottomSpacing = 50;
    const distanceFromClickToTop = event.clientY;
    const distanceFromClickToBottom =
      window.innerHeight - distanceFromClickToTop;

    modal.style.bottom = 'unset';
    modal.style.top = 'unset';

    if (distanceFromClickToTop < 130) {
      modal.style.top = `${distanceFromClickToTop}px`;
    } else if (modalHeight + bottomSpacing > distanceFromClickToBottom) {
      modal.style.bottom = `${bottomSpacing}px`;
    } else {
      modal.style.top = `${distanceFromClickToTop - bottomSpacing}px`;
    }
  }
};
