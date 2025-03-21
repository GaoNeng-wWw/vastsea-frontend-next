<script lang="ts" setup>
import type { Context } from './constant';
import { KEY } from './constant';

const router = useRouter();

const pos = reactive({
  left: 0,
  width: 0,
});
const context: Context = {
  map: new Map(),
};

provide(KEY, context);
const getInfoByLink = (path: string) => {
  const el = context.map.get(path);
  if (!el) {
    return { width: 0, left: 0 };
  }
  const { offsetWidth, offsetLeft } = el;
  return { width: offsetWidth, left: offsetLeft };
};
function onMouseEnter(path: string) {
  const el = context.map.get(path);
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
}
const setActivePos = () => {
  const path = router.currentRoute.value.path;
  onMouseEnter(path);
};
onMounted(() => {
  setActivePos();
});
</script>

<template>
  <div class="relative ml-auto mr-0 flex h-[53px] w-[655px]">
    <div class="absolute ml-10 flex-shrink-0">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="114.1865234375" height="53.220001220703125" viewBox="0 0 114.1865234375 53.220001220703125" fill="none">
        <path fill="#EDEDED" d="M113.741 14.0759L104.648 45.2959C103.281 49.9913 98.9775 53.22 94.087 53.22L58.3403 53.22L36.3403 53.22L11.0192 53.22C-0.0579529 53.22 -4.18868 38.6953 5.23072 32.8662L55.6802 1.6462C57.4191 0.57007 59.4237 -7.15398e-15 61.4687 -6.90354e-15L103.18 0C110.511 0 115.791 7.0368 113.741 14.0759Z" />
      </svg>
      <icon-logo class="absolute right-[27px] top-1/2 z-20 ml-[11px] h-[35px] w-[27px] -translate-y-1/2 text-lg leading-none mix-blend-multiply" />
    </div>
    <div class="ml-auto flex h-full w-[calc(100%_-_114px)] items-center bg-default-200">
      <div class="relative z-10 flex shrink-0 grow-0 items-center">
        <nav-bar-item
          to="/" class="ml-[25px] mr-5 text-lg leading-none" active-class="text-primary-500 text-normal"
          @mouse-enter="() => onMouseEnter('/')"
          @mouse-leave="setActivePos"
        >
          首页
        </nav-bar-item>
        <nav-bar-item
          to="/bbs" class="mr-[14px] text-lg font-medium leading-none"
          active-class="text-primary-500"
          @mouse-enter="() => onMouseEnter('/bbs')"
          @mouse-leave="setActivePos"
        >
          论坛
        </nav-bar-item>
        <nav-bar-item
          to="/sponsor" class="mr-[19px] text-lg font-medium leading-none"
          active-class="text-primary-500"
          @mouse-enter="() => onMouseEnter('/sponsor')"
          @mouse-leave="setActivePos"
        >
          捐赠
        </nav-bar-item>
        <nav-bar-item
          to="/join" class="text-lg font-medium leading-none"
          active-class="text-primary-500"
          @mouse-enter="() => onMouseEnter('/join')"
          @mouse-leave="setActivePos"
        >
          加入我们
        </nav-bar-item>
        <div class="absolute -bottom-1 h-[3px] bg-primary-500 transition-all duration-500" :style="{ width: `${pos.width}px`, left: `${pos.left}px` }" />
      </div>
    </div>
    <div class="absolute right-0 top-2 z-20">
      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="76" height="31" viewBox="0 0 76 31" fill="none">
        <rect x="38" y="0" width="38" height="5" fill="#4BA0B5" fill-opacity="0.78" />
        <rect x="19" y="13" width="57" height="5" fill="#4BA0B5" fill-opacity="0.78" />
        <rect x="0" y="26" width="76" height="5" fill="#4BA0B5" fill-opacity="0.78" />
      </svg>
    </div>
  </div>
</template>
