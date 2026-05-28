import type { TabKind, WindowState } from '../types/tab';

export const DEFAULT_WINDOW_SIZE = {
  width: 600,
  height: 400,
} as const;

export const MIN_WINDOW_SIZE = {
  width: 300,
  height: 172,
} as const;

const POSITION_BY_KIND: Record<Exclude<TabKind, 'link'>, { x: number; y: number }> = {
  app: { x: 200, y: 150 },
  folder: { x: 100, y: 100 },
  picture: { x: 140, y: 140 },
  note: { x: 160, y: 160 },
};

export function defaultWindowState(kind: Exclude<TabKind, 'link'>): WindowState {
  const { x, y } = POSITION_BY_KIND[kind];

  return {
    isOpened: false,
    isMinimized: false,
    isFullscreen: false,
    width: DEFAULT_WINDOW_SIZE.width,
    height: DEFAULT_WINDOW_SIZE.height,
    previousWidth: DEFAULT_WINDOW_SIZE.width,
    previousHeight: DEFAULT_WINDOW_SIZE.height,
    x,
    y,
  };
}
