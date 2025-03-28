<script setup lang="ts">
import { techStackList, type TechStackKey } from '~/constants/techStack';

defineProps<{
  name: TechStackKey;
}>();
</script>

<template>
  <div class="tech-stack-card w-fit rounded px-2 py-1 text-white flex items-center gap-2" :style="{ background: techStackList[name].color }">
    <component :is="techStackList[name].icon" class="w-4 h-4 fill-current animate-spin [animation-duration:2s]" />
    <span class="text-sm leading-none">{{ techStackList[name].title }}</span>
  </div>
</template>