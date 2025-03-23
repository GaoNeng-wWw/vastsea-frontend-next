<script setup lang="ts">
import { vElementVisibility } from '@vueuse/components';
import RailwayTraffic from '../introductions/railway-traffic.vue';
import RoadTraffic from '../introductions/road-traffic.vue';
import UrbanConstructionCopy from '../introductions/urban-construction copy.vue';

const comps: Record<string, any> = {
  '/#road-traffic': RoadTraffic,
  '/#rail-traffic': RailwayTraffic,
  '/': RailwayTraffic,
  '/#urban-construction': UrbanConstructionCopy,
};
const titles: Record<string, string> = {
  '/': '轨道交通',
  '/#rail-traffic': '轨道交通',
  '/#urban-construction': '城市建设',
  '/#road-traffic': '道路交通',
};
const router = useRouter();
const title = computed(() => titles[router.currentRoute.value.fullPath] ? titles[router.currentRoute.value.fullPath] : '');
useHead({
  title,
});
</script>

<template>
  <div v-element-visibility="() => !$route.hash ? $router.replace({ hash: '#rail-traffic' }) : ''" class="flex size-full flex-col overflow-hidden bg-[#F8F9FB]">
    <div class="relative flex size-full">
      <div class="relative top-[132px] h-[746px] w-[1179px] shrink-0">
        <nuxt-img src="/images/introduction.webp" width="1179" height="660" class="absolute -left-12 z-20" />
        <nuxt-img src="/images/introduction-train.webp" width="2816" height="471" class="absolute left-[-555px] top-[284px] z-30 max-w-none" />
        <div class="absolute bottom-0 z-10 h-[261px] w-[1128px]">
          <nuxt-img src="/images/train-line-1.webp" width="1058" height="261" class="absolute left-0" />
          <nuxt-img src="/images/train-line-2.webp" width="92" height="86" class="absolute bottom-0 right-0" />
        </div>
      </div>
      <div class="relative w-full">
        <component :is="comps[$route.fullPath]" />
      </div>
      <nuxt-img src="/images/blue-points.webp" width="371" height="718.81px" class="absolute -right-[134px] bottom-[103px]" />
    </div>
    <nuxt-link class=" absolute bottom-[439px] right-[104px] font-aliPuHui text-4xl leading-none text-primary-500">
      了解更多
    </nuxt-link>
    <div class="-ml-12 mb-[111px] flex w-[1179px] justify-end font-aliShuhei text-3xl">
      <client-only>
        <ui-underline-bar v-slot="{ onMouseEnter, setActivePos }" class="justify-end">
          <ui-underline-bar-item
            to="/#rail-traffic"
            class="mr-[19px]"
            active-class="text-[#FF5733]"
            @mouse-enter="() => onMouseEnter('/#rail-traffic')"
            @mouse-leave="setActivePos"
          >
            轨道交通
          </ui-underline-bar-item>
          <ui-underline-bar-item active-class="text-[#FF5733]" to="/#urban-construction" class="mr-[21px]" @mouse-enter="() => onMouseEnter('/#urban-construction')" @mouse-leave="setActivePos">
            城市建设
          </ui-underline-bar-item>
          <ui-underline-bar-item active-class="text-[#FF5733]" to="/#road-traffic" @mouse-enter="() => onMouseEnter('/#road-traffic')" @mouse-leave="setActivePos">
            路面交通
          </ui-underline-bar-item>
          <ui-underline-bar-undefline class="-bottom-1 bg-[#ff5733]" />
        </ui-underline-bar>
      </client-only>
    </div>
    <ui-scroll-down-tips class="fixed bottom-[37px] right-[31px] gap-[15px]" />
  </div>
</template>

<style scoped>
.line {
  position: absolute;
  right: 0;
  top: 108px;
  width: 131.05px;
  height: 0px;
  opacity: 1;
  transform: rotate(-41.6deg);
  border: 1px solid rgba(0, 0, 0, 1);
}
</style>
