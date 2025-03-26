<script lang="ts" setup>
const { stop, pause, start, resume } = useFullScreenScroll({ target: window, distance: 30, scroll: scrollBehavior });

createRootContext({ stop, pause, start, resume });
</script>

<template>
  <div class="size-full">
    <pages-introudction />
    <pages-projects />
  </div>
</template>
