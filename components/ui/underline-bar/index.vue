<script lang="ts" setup>
import type { Context } from './constant';
import { KEY, UNDERLINE_KEY } from './constant';

const props = defineProps<{
  class?: string;
}>();

const pos = reactive({
  left: 0,
  width: 0,
});
const ctx: Context = {
  map: new Map(),
};
const router = useRouter();
provide(KEY, ctx);
provide(UNDERLINE_KEY, pos);
const getInfoByLink = (path: string) => {
  const el = ctx.map.get(path);
  if (!el) {
    return { width: 0, left: 0 };
  }
  const { offsetWidth, offsetLeft } = el;
  return { width: offsetWidth, left: offsetLeft };
};
const onMouseEnter = (path: string) => {
  const el = ctx.map.get(path);
  if (!el) {
    return;
  }
  const link = el.getAttribute('href');
  if (!link) {
    return;
  }
  const { width, left } = getInfoByLink(link);
  pos.left = left;
  pos.width = width;
};
const setActivePos = () => {
  onMouseEnter(router.currentRoute.value.fullPath);
};

onMounted(() => {
  setActivePos();
});
</script>

<template>
  <div class="relative flex w-full" :class="[props.class]">
    <slot :on-mouse-enter="onMouseEnter" :set-active-pos="setActivePos" />
  </div>
</template>
