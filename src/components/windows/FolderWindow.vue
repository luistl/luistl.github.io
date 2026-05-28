<script setup lang="ts">
import { computed } from 'vue';
import { useTabsStore } from '@/stores/tabs';
import TabbedWindow from './TabbedWindow.vue';
import Icon from '../Icon.vue';

const props = defineProps<{ id: string }>();

const tabsStore = useTabsStore();

const folder = computed(() => {
  const tab = tabsStore.getTabById(props.id);
  return tab?.kind === 'folder' ? tab : undefined;
});
</script>

<template>
  <TabbedWindow v-if="folder?.isOpened" :id="id">
    <div class="folder">
      <div class="icons">
        <div v-for="file in folder.files" :key="file" class="icon">
          <Icon :id="file" />
        </div>
      </div>
    </div>
  </TabbedWindow>
</template>

<style scoped lang="scss">
@use '@/assets/styles/shared.scss' as *;

.folder {
  background-color: rgb(45, 34, 31);
  border: 1px solid black;
  color: rgba(#FFFFFF, 0.8);
  display: flex;
  flex-wrap: wrap;
  height: 100%;

  @include hide-scrollbar;

  .icons {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    row-gap: 12px;
    height: fit-content;
    width: 100%;
    padding: 16px 8px;

    .icon {
      display: flex;
      justify-content: center;

      :deep(img) {
        max-width: 50px !important;
        max-height: 50px;
      }
    }
  }
}
</style>
