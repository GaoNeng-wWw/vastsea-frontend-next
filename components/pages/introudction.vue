<template>
  <div class="flex size-full flex-col overflow-hidden bg-[#F8F9FB] ">
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
        <div class="absolute top-[204px] w-full pr-[127px]">
          <div class="ml-auto mr-0 w-fit text-right">
            <h2 class="font-aliShuhei text-7xl  font-normal text-default-700">
              轨道交通
            </h2>
            <p class="text-5xl font-bold leading-[86.4px] tracking-[10px] text-default-700">
              rail traffic
            </p>
            <div class="line" />
          </div>
          <div class="text-right font-sans text-[32px] font-extralight leading-[44.8px] tracking-[5px]">
            <p>
              以对轨道交通的热忱,我们志趣相投，
            </p>
            <p>旨在Minecraft中还原更仿真、</p>
            <p>更精致的轨道交通网络。</p>
          </div>
        </div>
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
            to="/#introduction-railway"
            class="mr-[19px]"
            active-class="text-[#FF5733] active"
            @mouse-enter="() => onMouseEnter('/#introduction-railway')"
            @mouse-leave="setActivePos"
          >
            轨道交通
          </ui-underline-bar-item>
          <ui-underline-bar-item to="/#urban-construction" class="mr-[21px]" @mouse-enter="() => onMouseEnter('/#urban-construction')" @mouse-leave="setActivePos">
            城市建设
          </ui-underline-bar-item>
          <ui-underline-bar-item to="/#road-traffic" @mouse-enter="() => onMouseEnter('/#road-traffic')" @mouse-leave="setActivePos">
            路面交通
          </ui-underline-bar-item>
          <ui-underline-bar-undefline class="-bottom-1 bg-[#ff5733]" />
        </ui-underline-bar>
      </client-only>
    </div>
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
