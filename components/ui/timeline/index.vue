<script lang="ts" setup>
import type { TimeLineContext } from './constants';
import { key } from './constants';

const active = defineModel<number | undefined>('active');

const topHeight = ref(-1);
const bottomHeight = ref(-1);
const activeIndex = ref(0);
const counter = ref(0);
const addNode = () => {
  counter.value += 1;
};
const getWidth = () => {
  return `${counter.value ? 100 / counter.value : 100}%`;
};
const onClick = (index: number) => {
  activeIndex.value = index;
};
provide<TimeLineContext>(key, { addNode, getWidth, onClick, activeIndex, topHeight, bottomHeight });
watch(active, () => {
  activeIndex.value = unref(active) ?? activeIndex.value;
}, { immediate: true, deep: true });
</script>

<template>
  <div class="flex size-full">
    <slot />
  </div>
</template>
