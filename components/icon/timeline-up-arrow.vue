<script setup lang="ts">
defineProps<{
  leftColor?: string;
  rightColor?: string;
}>();
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="19" viewBox="0 0 16 19" fill="none">
    <path d="M8 0L8 8L0 8L8 0Z" :fill="$props.leftColor" />
    <path d="M8 0L8 8L16 8L8 0Z" :fill="$props.rightColor" />
    <rect x="0" y="8" width="8" height="11" :fill="$props.leftColor" />
    <rect x="8" y="8" width="8" height="11" :fill="$props.rightColor" />
  </svg>
</template>
