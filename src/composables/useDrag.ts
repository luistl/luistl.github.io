interface Point {
  x: number;
  y: number;
}

interface DragOptions {
  getInitial: () => Point;
  onDrag: (position: Point) => void;
  isDisabled?: () => boolean;
  minX?: number;
  minY?: number;
}

export function useDrag(options: DragOptions) {
  return function startDrag(event: MouseEvent) {
    if (options.isDisabled?.()) return;

    const startX = event.clientX;
    const startY = event.clientY;
    const initial = options.getInitial();

    const handleMove = (move: MouseEvent) => {
      const next: Point = {
        x: initial.x + (move.clientX - startX),
        y: initial.y + (move.clientY - startY),
      };

      if (options.minX !== undefined && next.x < options.minX) next.x = initial.x;
      if (options.minY !== undefined && next.y < options.minY) next.y = initial.y;

      options.onDrag(next);
    };

    const handleUp = () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };

    window.addEventListener('mousemove', handleMove);
    window.addEventListener('mouseup', handleUp);
  };
}
