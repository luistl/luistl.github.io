<script setup lang="ts">
import { computed } from 'vue';
import { useTabsStore } from '@/stores/tabs';
import { MIN_WINDOW_SIZE } from '@/stores/defaults';
import { isWindowedTab } from '@/types/tab';
import { useDrag } from '@/composables/useDrag';
import { useResize } from '@/composables/useResize';

const props = defineProps<{ id: string }>();

const tabsStore = useTabsStore();

const tab = computed(() => {
  const found = tabsStore.getTabById(props.id);
  return found && isWindowedTab(found) ? found : undefined;
});

const isSelected = computed(() => tabsStore.selectedTabId === props.id);

const startDrag = useDrag({
  getInitial: () => ({ x: tab.value?.x ?? 0, y: tab.value?.y ?? 0 }),
  onDrag: ({ x, y }) => tabsStore.updatePosition(props.id, { x, y }),
  isDisabled: () => tab.value?.isFullscreen ?? true,
  minX: 0,
  minY: 0,
});

const startResize = useResize({
  getInitial: () => ({ width: tab.value?.width ?? 0, height: tab.value?.height ?? 0 }),
  onResize: ({ width, height }) => tabsStore.updateSize(props.id, { width, height }),
  isDisabled: () => tab.value?.isFullscreen ?? true,
  minWidth: MIN_WINDOW_SIZE.width,
  minHeight: MIN_WINDOW_SIZE.height,
});
</script>

<template>
  <div
    v-if="tab"
    class="tab"
    :class="{ fullscreen: tab.isFullscreen, minimize: tab.isMinimized }"
    :style="{
      width: tab.width + 'px',
      height: tab.height + 'px',
      top: tab.y + 'px',
      left: tab.x + 'px',
      zIndex: isSelected ? 1000000 : 100,
    }"
    @mousedown="tabsStore.selectTab(id)"
  >
    <div class="header" @mousedown="startDrag" @dblclick="tabsStore.fullscreenTab(id)">
      <div class="buttons">
        <div class="button close" @click="tabsStore.closeTab(id)" />
        <div class="button minimize" @click="tabsStore.minimizeTab(id)" />
        <div class="button fullscreen" @click="tabsStore.fullscreenTab(id)" />
      </div>

      <div class="title">{{ tab.name }}</div>
    </div>

    <slot />

    <div class="resize" @mousedown="startResize" />
  </div>
</template>

<style scoped lang="scss">
.tab {
  font-family: 'Inter', sans-serif;
  display: grid;
  position: absolute;
  grid-template-rows: 28px 1fr;
  min-width: 300px;
  min-height: 200px;
  border-radius: 10px;
  overflow: hidden;
  font-size: 13px;
  box-shadow: 0 0 8px 4px rgba(0, 0, 0, 0.4);

  &.fullscreen {
    position: fixed;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    border-radius: 0;
    width: 100vw !important;
    height: 100vh !important;
    z-index: 1000;
    transition: width 0.1s ease, height 0.1s ease, top 0.1s ease-in-out, left 0.1s ease-in-out;

    .header {
      border-radius: 0;
      border: 0;
    }
  }

  &.minimize {
    display: none;
    transition: width 0.1s ease, height 0.1s ease, top 0.1s ease, left 0.1s ease;
  }

  .header {
    font-weight: 600;
    display: flex;
    background-color: rgb(64, 57, 55);
    color: rgb(186, 179, 178);
    height: 28px;
    padding: 0 8px;
    border: 1px solid rgb(114, 107, 104);
    border-radius: 10px 10px 0 0;
    user-select: none;
    position: relative;

    .buttons {
      display: flex;
      position: absolute;
      top: 0;
      bottom: 0;
      align-items: center;
      justify-content: center;
      gap: 8px;

      .button {
        width: 12px;
        height: 12px;
        border-radius: 50%;

        &.close { background-color: rgb(236, 106, 95); }
        &.minimize { background-color: rgb(234, 183, 77); }
        &.fullscreen { background-color: rgb(97, 197, 84); }
      }
    }

    .title {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
    }
  }

  .resize {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    cursor: nwse-resize;
  }
}
</style>
