<script lang="ts" setup>
const container = useTemplateRef('container');
const { stop, pause, start, resume } = useFullScreenScroll({ target: container, distance: 30, scroll: scrollBehavior });

createRootContext({ stop, pause, start, resume });
</script>

<template>
  <div id="container" ref="container" class="size-full overflow-y-auto overflow-x-hidden">
    <pages-introudction />
    <pages-projects />
  </div>
</template>
