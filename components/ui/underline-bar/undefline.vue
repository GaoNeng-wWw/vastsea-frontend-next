<script lang="ts" setup>
import type { UnderlineContext } from './constant';
import { UNDERLINE_KEY } from './constant';

const props = defineProps<{ class?: string }>();
const pos = inject<UnderlineContext>(UNDERLINE_KEY);
</script>

<template>
  <div class="absolute h-[3px] duration-500" :class="props.class" :style="{ width: `${pos?.width}px`, left: `${pos?.left}px` }" />
</template>
