<script setup lang="ts">
import { computed } from 'vue';
import { useTabsStore } from '@/stores/tabs';
import TabbedWindow from './TabbedWindow.vue';

const props = defineProps<{ id: string }>();

const tabsStore = useTabsStore();

const note = computed(() => {
  const tab = tabsStore.getTabById(props.id);
  return tab?.kind === 'note' ? tab : undefined;
});

function onInput(event: Event) {
  const target = event.target as HTMLElement;
  tabsStore.updateNoteContent(props.id, target.innerHTML);
}
</script>

<template>
  <TabbedWindow v-if="note?.isOpened" :id="id">
    <div
      class="note"
      :innerHTML="note.content"
      contenteditable="true"
      @input="onInput"
    />
  </TabbedWindow>
</template>

<style scoped lang="scss">
@use '@/assets/styles/shared.scss' as *;

.note {
  background-color: rgb(45, 34, 31);
  color: rgba(#FFFFFF, 0.8);
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;

  @include hide-scrollbar;
  @include rich-text-deep;
}
</style>
