<script setup lang="ts">
import { computed, ref } from 'vue';
import { useTabsStore } from '@/stores/tabs';
import { useDrag } from '@/composables/useDrag';

const props = defineProps<{
  id: string;
  x?: number;
  y?: number;
}>();

const tabsStore = useTabsStore();

const tab = computed(() => tabsStore.getTabById(props.id));
const isPicture = computed(() => tab.value?.kind === 'picture');
const isPositioned = computed(() => props.x !== undefined && props.y !== undefined);

const x = ref(props.x ?? 0);
const y = ref(props.y ?? 0);

function activate() {
  if (!tab.value) return;

  if (tab.value.kind === 'link') {
    window.open(tab.value.url, '_blank');
    return;
  }

  tabsStore.openTab(tab.value.id);
}

const startDrag = useDrag({
  getInitial: () => ({ x: x.value, y: y.value }),
  onDrag: (pos) => {
    x.value = pos.x;
    y.value = pos.y;
  },
});

function onMouseDown(event: MouseEvent) {
  if (isPositioned.value) startDrag(event);
}
</script>

<template>
  <div
    v-if="tab"
    class="icon"
    :class="{ image: isPicture, positioned: isPositioned }"
    :style="isPositioned ? { top: y + 'px', left: x + 'px' } : undefined"
    @dblclick="activate"
    @mousedown="onMouseDown"
  >
    <img :src="tab.icon" :alt="tab.name" unselectable="on" />
    <div class="name">{{ tab.name }}</div>
  </div>
</template>

<style scoped lang="scss">
.icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: fit-content;
  cursor: pointer;
  user-select: none;
  gap: 8px;

  &.positioned {
    position: absolute;
  }

  &.image img {
    border: 3px solid white;
  }

  img {
    max-width: 70px;
    max-height: 70px;
  }

  .name {
    text-align: center;
    font-weight: 500;
    color: white;
    font-size: 13px;
    text-shadow: 0 0 5px black;
  }
}
</style>
