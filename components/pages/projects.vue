<script lang="ts" setup>
import { vIntersectionObserver } from '@vueuse/components';

const { pause, resume } = useRootContext();

const onIntersectionObserver = ([entry]: IntersectionObserverEntry[]) => {
  if (entry.isIntersecting) {
    pause();
    return;
  }
  resume();
};

pause();
</script>

<template>
  <div class="projects">
    <div class="projects__title font-aliShuhei">
      <h1 v-intersection-observer="onIntersectionObserver">
        项目
      </h1>
      <p>Projects</p>
    </div>
    <div class="projects__info">
      <div class="projects__info__wrapper">
        <img class="projects__info__wrapper__image" src="/images/projects/klpbbs-wj.webp">
        <div class="projects__info__wrapper__text space-y-[25px]">
          <div class="projects__info__wrapper__text__stacks flex justify-end gap-2">
            <div class="w-fit rounded px-2 py-1 text-white" style="background-color: rgba(255, 87, 51, 1);">
              Next.js
            </div>
            <div class="w-fit rounded px-2 py-1 text-white" style="background-color: rgba(95, 77, 60, 1);">
              Rust
            </div>
          </div>
          <p class="title text-right font-aliShuhei font-normal leading-none tracking-[10px] text-primary-500">
            苦力怕论坛调查问卷系统
          </p>
          <p class="desc leading-7 tracking-[2px]">
            为了让论坛用户能够更加简单、快速地填写问卷，苦力怕论坛 KLPBBS 与 瀚海工艺 Vastsea 团队的多位开发者共同合作，合力打造了一个无缝集成的问卷系统。通过这个系统，论坛用户可以使用已有的账号通过 KLPBBS API 快速登录，而无需重复注册或创建新的账号，极大地优化了用户体验。
          </p>
        </div>
      </div>
    </div>
    <div class="projects__timeline">
      <client-only>
        <ui-timeline :active="1">
          <ui-timeline-item :index="1">
            <template #bottomLabel="{ isActive }">
              <p :data-active="isActive ? isActive : undefined" class="text-center font-aliShuhei text-[20px] data-[active=true]:text-primary-500">
                苦力怕论坛调查问卷系统
              </p>
              <p class="text-center font-aliShuhei text-[20px]">
                KLPBBS | SURVEY
              </p>
            </template>
          </ui-timeline-item>
          <ui-timeline-item :index="2">
            <template #topLabel="{ isActive }">
              <p :data-active="isActive ? isActive : undefined" class="text-center font-aliShuhei text-[20px] data-[active=true]:text-primary-500">
                苦力怕论坛调查问卷系统
              </p>
              <p class="text-center font-aliShuhei text-[20px]">
                KLPBBS | SURVEY
              </p>
            </template>
          </ui-timeline-item>
          <ui-timeline-item :index="3">
            <template #bottomLabel="{ isActive }">
              <p :data-active="isActive ? isActive : undefined" class="text-center font-aliShuhei text-[20px] data-[active=true]:text-primary-500">
                苦力怕论坛调查问卷系统
              </p>
              <p class="text-center font-aliShuhei text-[20px]">
                KLPBBS | SURVEY
              </p>
            </template>
          </ui-timeline-item>
        </ui-timeline>
      </client-only>
    </div>
    <img src="/images/blue-points.webp" class="projects__bg--blue-points">
  </div>
</template>

<style scoped lang="less">
@import url("~/assets/css/f.less");

@keyframes leftToRight {
  0% {
    left: var(--x1);
  }
  85% {
    opacity: 1;
  }
  100% {
    left: var(--x2);
    opacity: 0;
  }
}

.projects {
  overflow-x: hidden;
  &__title {
    h1 {
      font-size: px2vw(72);
      font-weight: 400;
    }
    p {
      font-size: px2vw(36);
      font-weight: 400;
    }
    padding-left: px2vw(67px);
  }
  &__info {
    &__wrapper {
      &__image {
        aspect-ratio: 3 / 2;
        width: px2vw(769);
        // height: px2vw(541, vh);
      }
      &__text {
        .title {
          font-size: px2vw(36);
        }
        .desc {
          font-size: px2vw(20);
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        width: 100%;
      }
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: px2vw(110px);
      width: 100%;
      height: 100%;
    }
    padding-inline: px2vw(167.7);
    padding-top: px2vw(39, vh);
    width: 100%;
    height: calc(px2vw(541, vh) - px2vw(145, vh));
    flex: 1 0 content;
  }
  &__timeline{
    width: 100%;
    min-height: px2vw(200, vh);
    height: fit-content;
  }
  &__bg {
    &--blue-points {
      position: absolute;
      top: px2vw(196,vh);
      right: px2vw(-169, vw);
      width: px2vw(371);
      height: px2vw(817, vh);
    }
  }
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  padding-top: px2vw(122px);
  background: #fff;
}
</style>
