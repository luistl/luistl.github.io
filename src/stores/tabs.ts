import { defineStore } from 'pinia';
import { apps, folders, notes, pictures, links } from '../content';
import type {
  AppTab,
  FolderTab,
  LinkTab,
  NoteTab,
  PictureTab,
  Tab,
  TabKind,
  WindowedTab,
} from '../types/tab';
import { defaultWindowState } from './defaults';

const INITIAL_OPEN_TAB_ID = 'terminal';

function buildTabs(): Tab[] {
  const appTabs: AppTab[] = apps.map((content) => ({
    ...content,
    kind: 'app',
    ...defaultWindowState('app'),
    isOpened: content.id === INITIAL_OPEN_TAB_ID,
  }));

  const folderTabs: FolderTab[] = folders.map((content) => ({
    ...content,
    kind: 'folder',
    ...defaultWindowState('folder'),
  }));

  const pictureTabs: PictureTab[] = pictures.map((content) => ({
    ...content,
    kind: 'picture',
    ...defaultWindowState('picture'),
  }));

  const noteTabs: NoteTab[] = notes.map((content) => ({
    ...content,
    kind: 'note',
    tmpContent: '',
    ...defaultWindowState('note'),
  }));

  const linkTabs: LinkTab[] = links.map((content) => ({
    ...content,
    kind: 'link',
  }));

  return [...appTabs, ...folderTabs, ...pictureTabs, ...noteTabs, ...linkTabs];
}

function isWindowed(tab: Tab): tab is WindowedTab {
  return tab.kind !== 'link';
}

interface TabsState {
  tabs: Tab[];
  selectedTabId: string;
}

export const useTabsStore = defineStore('tabs', {
  state: (): TabsState => ({
    tabs: buildTabs(),
    selectedTabId: INITIAL_OPEN_TAB_ID,
  }),

  getters: {
    getTabById:
      (state) =>
      (id: string): Tab | undefined =>
        state.tabs.find((tab) => tab.id === id),

    tabsByKind:
      (state) =>
      <K extends TabKind>(kind: K) =>
        state.tabs.filter((tab) => tab.kind === kind) as Extract<Tab, { kind: K }>[],

    activeTabs: (state): WindowedTab[] =>
      state.tabs.filter(
        (tab): tab is WindowedTab => isWindowed(tab) && (tab.isOpened || tab.isMinimized),
      ),
  },

  actions: {
    selectTab(id: string) {
      this.selectedTabId = id;
    },

    openTab(id: string) {
      const tab = this.getTabById(id);
      if (!tab || !isWindowed(tab)) return;

      tab.isOpened = true;
      tab.isMinimized = false;
      this.selectTab(id);
    },

    closeTab(id: string) {
      const tab = this.getTabById(id);
      if (!tab || !isWindowed(tab)) return;

      tab.isOpened = false;

      if (tab.kind === 'note' && tab.tmpContent) {
        tab.content = tab.tmpContent;
      }
    },

    minimizeTab(id: string) {
      const tab = this.getTabById(id);
      if (!tab || !isWindowed(tab)) return;

      tab.isMinimized = !tab.isMinimized;
    },

    fullscreenTab(id: string) {
      const tab = this.getTabById(id);
      if (!tab || !isWindowed(tab)) return;

      tab.isFullscreen = !tab.isFullscreen;

      if (tab.isFullscreen) {
        tab.previousWidth = tab.width;
        tab.previousHeight = tab.height;
        tab.width = window.innerWidth;
        tab.height = window.innerHeight;
      } else {
        tab.width = tab.previousWidth;
        tab.height = tab.previousHeight;
      }
    },

    updateSize(id: string, size: { width: number; height: number }) {
      const tab = this.getTabById(id);
      if (!tab || !isWindowed(tab)) return;

      tab.width = size.width;
      tab.height = size.height;
    },

    updatePosition(id: string, position: { x: number; y: number }) {
      const tab = this.getTabById(id);
      if (!tab || !isWindowed(tab)) return;

      tab.x = position.x;
      tab.y = position.y;
    },

    updateNoteContent(id: string, content: string) {
      const tab = this.getTabById(id);
      if (!tab || tab.kind !== 'note') return;

      tab.tmpContent = content;
    },
  },
});
