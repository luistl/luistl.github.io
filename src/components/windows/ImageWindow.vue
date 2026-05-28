<script setup lang="ts">
import { computed } from 'vue';
import { useTabsStore } from '@/stores/tabs';
import TabbedWindow from './TabbedWindow.vue';

const props = defineProps<{ id: string }>();

const tabsStore = useTabsStore();

const picture = computed(() => {
  const tab = tabsStore.getTabById(props.id);
  return tab?.kind === 'picture' ? tab : undefined;
});
</script>

<template>
  <TabbedWindow v-if="picture?.isOpened" :id="id">
    <div class="image">
      <img
        unselectable="on"
        class="img"
        :src="picture.src"
        :alt="picture.name"
        :style="{ width: picture.width + 'px', height: (picture.height - 26) + 'px' }"
      />
    </div>
  </TabbedWindow>
</template>

<style scoped lang="scss">
.image {
  background-color: rgb(45, 34, 31);
  color: rgba(#FFFFFF, 0.8);
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  width: 100%;

  img {
    width: 100%;
    min-width: 300px;
    min-height: 172px;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }
}
</style>
