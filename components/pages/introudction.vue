<script setup lang="ts">
import { vElementVisibility } from '@vueuse/components';
import RailwayTraffic from '../introductions/railway-traffic.vue';
import RoadTraffic from '../introductions/road-traffic.vue';
import UrbanConstructionCopy from '../introductions/urban-construction copy.vue';

const comps: Record<string, any> = {
  '/': RailwayTraffic,
  '/#road-traffic': RoadTraffic,
  '/#rail-traffic': RailwayTraffic,
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
  <div
    v-element-visibility="() => !$route.hash ? $router.replace({ hash: '#rail-traffic' }) : ''"
    class="introduction relative flex h-screen w-full flex-col overflow-hidden bg-[#F8F9FB]"
  >
    <div class="introduction__wrapper flex size-full">
      <div class="introduction__wrapper__image relative shrink-0">
        <div class="introduction__wrapper__image__bg">
          <nuxt-img src="/images/introduction-train-6.png" class="introduction__wrapper__image__bg__train" />
        </div>
        <div class="absolute bottom-0 z-10 h-[7.962962962962962962962962962963vh] w-[58.75vw]">
          <nuxt-img src="/images/train-line-1.webp" width="1058" class="absolute bottom-0 left-0 h-[7.962962962962962962962962962963vh] w-[55.104166666666666666666666666667vw]" />
          <nuxt-img src="/images/train-line-2.webp" width="92" height="86" class="absolute bottom-0 right-0 h-[7.962962962962962962962962962963vh] w-[4.7916666666666666666666666666667vw]" />
        </div>
      </div>
      <div class="relative w-full">
        <component :is="comps[$route.fullPath]" />
      </div>
      <nuxt-img src="/images/blue-points.webp" width="371" height="718.81px" class="absolute -right-[6.979166667vw] bottom-[8.813888vh] h-[66.556481vh] w-[19.32291667vw] " />
    </div>
    <div class="-ml-12 mb-[10.277777777777777777777777777778vh] flex w-[58.75vw] justify-end font-aliShuhei text-3xl">
      <client-only>
        <ui-underline-bar v-slot="{ onMouseEnter, setActivePos }" hash-match class="justify-end">
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
    <ui-scroll-down-tips class="fixed bottom-[3.4259259259259259259259259259259vh] right-[1.6145833333vw] z-50 gap-[15px]" />
  </div>
</template>

<style scoped lang="less">
.introduction {
  &__wrapper__image {
    position: absolute;
    flex: 1;
    /* 1323 */
    width: 68.90625vw;
    /* 746px */
    height: 68.703703703703703703703703703704vh;
    /* 132px */
    margin-top: 12.22222vh;
    &__bg{
      position: relative;
      // 1128px
      width: 58.75vw;
      // 660px
      height: 61.111111111111111111111111111111vh;
      background-image: url("/images/introduction.webp");
      background-repeat: no-repeat;
      background-size:cover;
      &__train{
        position: absolute;
        // width: 2816px;
        width: 146.66666666666666666666666666667vw;
        // height: 471px;
        height: 43.611111111111111111111111111111vh;
        // left: -555px;
        left: -28.90625vw;
        bottom: -9.259259vh;
        z-index: 10;
        max-width: unset;
      }
    }
  }
}
</style>
