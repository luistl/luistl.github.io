<script setup lang="ts">
import { onMounted, ref } from 'vue';
import TabbedWindow from './TabbedWindow.vue';
import {
  terminalIntroMessages,
  TERMINAL_INTRO_DELAY_MS,
  TERMINAL_LINE_DELAY_MS,
} from '@/content';

const TERMINAL_ID = 'terminal';
const messages = ref<string[]>([]);

function focusInput() {
  const input = document.querySelector<HTMLElement>('.console-input');
  input?.focus();
}

function onEnter(event: KeyboardEvent) {
  const target = event.target as HTMLElement;
  messages.value.push(target.innerText);
  target.innerText = '';
  event.preventDefault();
}

async function playIntro() {
  for (const message of terminalIntroMessages) {
    messages.value.push(message);
    await new Promise((resolve) => setTimeout(resolve, TERMINAL_LINE_DELAY_MS));
  }
}

onMounted(() => {
  setTimeout(playIntro, TERMINAL_INTRO_DELAY_MS);
});
</script>

<template>
  <TabbedWindow :id="TERMINAL_ID">
    <div class="terminal" @click="focusInput">
      <div v-for="(message, index) in messages" :key="index" class="row">
        <span class="console-prefix">> ~</span>
        <span class="console-message" v-html="message" />
      </div>

      <div class="row">
        <span class="console-prefix">> ~</span>
        <span
          class="console-input"
          contenteditable="true"
          @keydown.enter="onEnter"
        />
      </div>
    </div>
  </TabbedWindow>
</template>

<style scoped lang="scss">
@use '@/assets/styles/shared.scss' as *;

.terminal {
  background-color: black;
  border: 1px solid rgb(46, 46, 46);
  padding: 4px 6px;
  color: rgba(#FFFFFF, 0.8);
  display: flex;
  flex-direction: column;

  @include hide-scrollbar;
  @include rich-text-deep;

  .row {
    .console-prefix {
      font-weight: 600;
      color: rgb(0, 255, 0);
      margin-right: 6px;
      float: left;
      user-select: none;
    }

    .console-input {
      outline: none;
      min-width: 100px;
      word-break: break-all;
    }

    .console-message {
      word-break: break-all;
    }
  }
}
</style>
