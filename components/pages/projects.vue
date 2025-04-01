<script lang="ts" setup>
import { vIntersectionObserver } from '@vueuse/components';

const projectsData = useProjects();
const active = ref(0);
const actvieProject = computed(() => projectsData[active.value]);
const { pause, resume } = useRootContext();

let allowScroll = true;
const onIntersectionObserver = ([entry]: IntersectionObserverEntry[]) => {
  if (entry.isIntersecting) {
    pause();
    return;
  }
  resume();
};
const onMouseEnter = () => {
  allowScroll = false;
};
const onMouseLeave = () => {
  allowScroll = true;
};
onMounted(() => {
  if (!import.meta.client) {
    return;
  }
  window.addEventListener('wheel', (ev) => {
    ev.stopPropagation();
    if (!allowScroll) {
      ev.preventDefault();
    }
  }, { passive: false });
});
</script>

<template>
  <div class="projects">
    <div class="projects__title font-aliShuhei">
      <h1>
        项目
      </h1>
      <p>Projects</p>
    </div>
    <div class="projects__info">
      <div class="projects__info__wrapper">
        <div class="projects__info__wrapper__text items-start space-y-[25px]">
          <div class="projects__info__wrapper__text__stacks flex justify-start gap-2">
            <ui-tech-stack-card
              v-for="tech in actvieProject.techStack"
              :key="tech"
              :name="tech"
            />
          </div>
          <p class="title text-right font-aliShuhei font-normal leading-none tracking-[10px] text-primary-500">
            {{ actvieProject.title[0] }}
          </p>
          <p class="desc leading-7 tracking-[2px]">
            {{ actvieProject.desc }}
          </p>
        </div>
        <img class="projects__info__wrapper__image" :src="actvieProject.image">
      </div>
    </div>
    <div class="projects__timeline">
      <client-only>
        <ui-timeline v-model:active="active" v-intersection-observer="onIntersectionObserver" @mouse-enter="onMouseEnter" @mouse-leave="onMouseLeave">
          <ui-timeline-item v-for="(project, idx) of projectsData" :key="idx" :index="idx">
            <template v-if="(idx + 1) % 2 !== 0" #topLabel="{ isActive }">
              <div class="flex min-h-[80px] flex-col items-center justify-start">
                <p :data-active="isActive ? isActive : undefined" class="text-center font-aliShuhei text-[20px] data-[active=true]:text-primary-500">
                  {{ project.title[0] }}
                </p>
                <p class="text-center font-aliShuhei text-[20px]">
                  {{ project.title[1] }}
                </p>
              </div>
            </template>
            <template v-if="(idx + 1) % 2 === 0" #bottomLabel="{ isActive }">
              <div class="flex min-h-[80px] flex-col items-end justify-start">
                <p :data-active="isActive ? isActive : undefined" class="text-center font-aliShuhei text-[20px] data-[active=true]:text-primary-500">
                  {{ project.title[0] }}
                </p>
                <p class="text-center font-aliShuhei text-[20px]">
                  {{ project.title[1] }}
                </p>
              </div>
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
    height: fit-content;
    margin-top: px2vw(74, vh);
    display: flex;
    flex-direction: column;
    justify-content: end;
  }
  &__info {
    &__wrapper {
      &__image {
        aspect-ratio: 3 / 2;
        height: 100%;
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
      justify-content: space-around;

      gap: px2vw(110px);
      width: 100%;
      height: 100%;
    }
    padding-inline: px2vw(167.7);
    padding-block: px2vw(39, vh);
    width: 100%;
    height: calc(px2vw(541, vh) - px2vw(145, vh) - px2vw(39, vh) - px2vw(39, vh));
    flex: 1 0;
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
  height: 100vh;
  background: #fff;
}
</style>
