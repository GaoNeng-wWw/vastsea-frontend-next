<script lang="ts" setup>
import type { TimeLineContext } from './constants';
import { useDebounceFn } from '@vueuse/core';
import { key } from './constants';

defineEmits(['mouseEnter', 'mouseLeave']);

const active = defineModel<number | undefined>('active');

const topHeight = ref(-1);
const bottomHeight = ref(-1);
const activeIndex = ref(0);
const counter = ref(0);
const el = useTemplateRef('timeline');
const addNode = () => {
  counter.value += 1;
};
const getWidth = () => {
  return `${counter.value ? 100 / counter.value : 100}%`;
};
const onClick = (index: number) => {
  active.value = index;
};
const onWheel = useDebounceFn((ev: WheelEvent) => {
  if (!el.value) {
    return;
  }
  if (el.value.scrollWidth === el.value.clientWidth) {
    return;
  }
  const step = -ev.deltaY;
  const curX = el.value.computedStyleMap().get('transform');
  let d = step;
  if (curX instanceof CSSTransformValue) {
    const [translate] = curX as unknown as [CSSTranslate];
    d = Number.parseFloat(translate.x.add(new CSSUnitValue(step, 'px')).toString());
  }
  if (d >= 0) {
    d = 0;
  }
  if (d <= -el.value.offsetWidth) {
    d = -el.value.offsetWidth;
  }
  el.value.style.transform = new CSSTransformValue(
    [
      new CSSTranslate(
        new CSSUnitValue(d, 'px'),
        new CSSUnitValue(0, 'px'),
      ),
    ],
  ).toString();
}, 0);

provide<TimeLineContext>(key, { addNode, getWidth, onClick, activeIndex, topHeight, bottomHeight });
watch(active, () => {
  activeIndex.value = unref(active) ?? activeIndex.value;
}, { immediate: true, deep: true });
</script>

<template>
  <div class="timeline size-full px-4" @mouseenter="$emit('mouseEnter')" @mouseleave="$emit('mouseLeave')">
    <div ref="timeline" class="flex h-full transition-all duration-300" @wheel="onWheel">
      <slot />
    </div>
  </div>
</template>

<style lang="less" scoped>
.timeline {
  scrollbar-width: none;
  overflow-x: auto;
}
</style>
