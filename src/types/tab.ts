export type TabKind = 'app' | 'folder' | 'picture' | 'note' | 'link';

export interface TabBase {
  id: string;
  name: string;
  icon: string;
  kind: TabKind;
}

export interface WindowState {
  isOpened: boolean;
  isMinimized: boolean;
  isFullscreen: boolean;
  width: number;
  height: number;
  previousWidth: number;
  previousHeight: number;
  x: number;
  y: number;
}

export interface AppTab extends TabBase, WindowState {
  kind: 'app';
}

export interface FolderTab extends TabBase, WindowState {
  kind: 'folder';
  files: string[];
}

export interface PictureTab extends TabBase, WindowState {
  kind: 'picture';
  src: string;
}

export interface NoteTab extends TabBase, WindowState {
  kind: 'note';
  content: string;
  tmpContent: string;
}

export interface LinkTab extends TabBase {
  kind: 'link';
  url: string;
}

export type WindowedTab = AppTab | FolderTab | PictureTab | NoteTab;
export type Tab = WindowedTab | LinkTab;

export type AppContent = Omit<AppTab, keyof WindowState | 'kind'>;
export type FolderContent = Omit<FolderTab, keyof WindowState | 'kind'>;
export type PictureContent = Omit<PictureTab, keyof WindowState | 'kind'>;
export type NoteContent = Omit<NoteTab, keyof WindowState | 'kind' | 'tmpContent'>;
export type LinkContent = Omit<LinkTab, 'kind'>;

export function isWindowedTab(tab: Tab): tab is WindowedTab {
  return tab.kind !== 'link';
}
