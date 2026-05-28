<script setup lang="ts">
import { computed } from 'vue';
import { useTabsStore } from '@/stores/tabs';
import { desktopIcons } from '@/content';
import Icon from '@/components/Icon.vue';
import TerminalWindow from '@/components/windows/TerminalWindow.vue';
import NoteWindow from '@/components/windows/NoteWindow.vue';
import FolderWindow from '@/components/windows/FolderWindow.vue';
import ImageWindow from '@/components/windows/ImageWindow.vue';

const tabsStore = useTabsStore();

const terminal = computed(() => tabsStore.getTabById('terminal'));
const notes = computed(() => tabsStore.tabsByKind('note'));
const folders = computed(() => tabsStore.tabsByKind('folder'));
const pictures = computed(() => tabsStore.tabsByKind('picture'));
const activeTabs = computed(() => tabsStore.activeTabs);
</script>

<template>
  <main>
    <Icon
      v-for="icon in desktopIcons"
      :key="icon.id"
      :id="icon.id"
      :x="icon.x"
      :y="icon.y"
    />

    <TerminalWindow v-if="terminal && 'isOpened' in terminal && terminal.isOpened" />

    <NoteWindow v-for="note in notes" :key="note.id" :id="note.id" />
    <FolderWindow v-for="folder in folders" :key="folder.id" :id="folder.id" />
    <ImageWindow v-for="picture in pictures" :key="picture.id" :id="picture.id" />

    <div v-if="activeTabs.length > 0" class="menu">
      <div
        v-for="tab in activeTabs"
        :key="tab.id"
        class="app"
        @click="tabsStore.openTab(tab.id)"
      >
        <img :src="tab.icon" :alt="tab.name" unselectable="on" />
        <div class="name">{{ tab.name }}</div>
        <div v-if="tab.isMinimized" class="minimize" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  height: 100vh;
  width: 100vw;
  background: url(@/assets/images/wallpaper.jpg) center center fixed;
  background-size: cover;

  .menu {
    position: fixed !important;
    display: flex;
    flex-direction: row;
    bottom: 0;
    right: 0;
    left: 0;
    padding: 8px 16px 12px;
    background-color: rgba(#FFFFFF, 0.1);
    border: 1px solid rgba(#FFFFFF, 0.2);
    border-radius: 8px;
    margin: 12px auto;
    width: fit-content;
    align-items: center;
    gap: 8px;

    .app {
      height: 60px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &:hover .name {
        display: block;
        position: absolute;
        bottom: 120%;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(#000000, 0.8);
        border-radius: 4px;
        color: #FFFFFF;
        padding: 4px 8px;
        white-space: nowrap;
        text-align: center;
      }

      img {
        max-width: 60px;
        max-height: 60px;
      }

      .name {
        display: none;
      }

      .minimize {
        position: absolute;
        bottom: -8px;
        left: 0;
        right: 0;
        margin: auto;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background-color: rgba(#fff, 0.4);
      }
    }
  }
}
</style>
