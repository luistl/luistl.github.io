interface Size {
  width: number;
  height: number;
}

interface ResizeOptions {
  getInitial: () => Size;
  onResize: (size: Size) => void;
  isDisabled?: () => boolean;
  minWidth?: number;
  minHeight?: number;
}

export function useResize(options: ResizeOptions) {
  return function startResize(event: MouseEvent) {
    if (options.isDisabled?.()) return;
    event.preventDefault();

    const startX = event.clientX;
    const startY = event.clientY;
    const initial = options.getInitial();

    const handleMove = (move: MouseEvent) => {
      const next: Size = {
        width: initial.width + (move.clientX - startX),
        height: initial.height + (move.clientY - startY),
      };

      if (options.minWidth !== undefined && next.width < options.minWidth) {
        next.width = initial.width;
      }
      if (options.minHeight !== undefined && next.height < options.minHeight) {
        next.height = initial.height;
      }

      options.onResize(next);
    };

    const handleUp = () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
  };
}
