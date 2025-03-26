<script lang="ts" setup>
import type { TimeLineContext } from './constants';
import { key } from './constants';

const { topLabel, bottomLabel, index } = defineProps<{
  topLabel?: string;
  bottomLabel?: string;
  index: number;
}>();
const ctx = inject<TimeLineContext>(key);
const activeIndex = computed(() => ctx?.activeIndex.value ?? -1);
const bottom = useTemplateRef('bottom');
const top = useTemplateRef('top');

const topHeight = computed(() => ctx?.topHeight.value);
const bottomHeight = computed(() => ctx?.bottomHeight.value);

onMounted(() => {
  if (!ctx) {
    return;
  }
  ctx.addNode();
  if (top.value) {
    ctx.topHeight.value = Math.max(ctx.topHeight.value, top.value.offsetHeight);
  }
  if (bottom.value) {
    ctx.bottomHeight.value = Math.max(ctx.bottomHeight.value, bottom.value.offsetHeight);
  }
});
</script>

<template>
  <div class="timeline-items relative flex w-full flex-col" :style="{ width: ctx?.getWidth() }" @click="() => ctx?.onClick(index)">
    <div class="timeline-item__wrapper">
      <div ref="top" :style="{ height: `${topHeight}px` }">
        <slot :is-active="index <= activeIndex" name="topLabel">
          <p>{{ topLabel }}</p>
        </slot>
      </div>
      <div
        class="timeline-item__wrapper__node" :class="{
          'timeline-item__wrapper__node--active': index <= activeIndex,
        }"
      >
        <div class="icon" />
        <div class="line">
          <icon-right-arrow-group
            class="arrow-group" :class="{
              'arrow-group--active': index === activeIndex,
            }"
          />
        </div>
      </div>
      <div ref="bottom" :style="{ height: `${bottomHeight}px` }">
        <slot :is-active="index <= activeIndex" name="bottomLabel">
          <p>{{ bottomLabel }}</p>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("~/assets/css/f.less");
.timeline-items {
  &:first-child{
    ::before {
      display: none;
    }
  }
  &:last-child {
    ::after{
      display: none;
    }
  }
  &:last-child {
    .timeline-item__wrapper__node .line {
      display: none;
    }
  }
}
@keyframes leftToRight {
  0% {
    left: 0;
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  to {
    left: 100%;
    opacity: 0;
  }
}
.timeline-item {
  &__top {
    height: px2vw(82);
  }
  &__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__node {
      .icon {
        width: px2vw(30);
        height: px2vw(30);
        border-radius: 100%;
        margin: 0 auto;
        background: #fff;
        border: 4px solid #A6A6A6;
        position: relative;
        z-index: 10;
        transition: all .5s ease-in-out;
      }
      .line {
        position: absolute;
        top: calc(50% - 15px / 2);
        left: 50%;
        width: calc(100% - 15px / 2);
        height: 15px;
        background: hsla(var(--primary-500));
        .arrow-group {
          &--active {
            transform: translate(-50%, -50%);
            animation-name: leftToRight;
            animation-duration: 5s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          opacity: 0;
          position: absolute;
          top: 50%;
          transform: translate(0%, -50%);
        }
      }
      position: relative;
      width: 100%;
      &--active {
        .icon {
          background: hsla(var(--primary-500));
          border-width: 0;
          border-color: hsla(var(--primary-500));
        }
      }
    }
  }
}
</style>
