export interface DesktopIcon {
  id: string;
  x: number;
  y: number;
}

export const desktopIcons: DesktopIcon[] = [
  { id: 'terminal', x: 16, y: 16 },
  { id: 'personal', x: 16, y: 144 },
  { id: 'experiences', x: 16, y: 272 },
  { id: 'projects', x: 16, y: 400 },
  { id: 'trash', x: 144, y: 16 },
];
