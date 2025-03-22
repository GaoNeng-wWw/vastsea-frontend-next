<script lang="ts" setup>
import type { Context } from './constant';
import { KEY } from './constant';

const props = defineProps<{
  to: string;
  activeClass?: string;
  class?: string;
}>();
defineEmits<{
  mouseEnter: [MouseEvent];
  mouseLeave: [MouseEvent];
}>();
const router = useRouter();
const el = useTemplateRef('el');
const ctx = inject<Context>(KEY);

const isActive = computed(() => router.currentRoute.value.fullPath.endsWith(props.to) || router.currentRoute.value.path.endsWith(props.to));

onMounted(() => {
  if (!el.value) {
    return;
  }
  if (!ctx) {
    return;
  }
  ctx.map.set(props.to, el.value);
  ctx.map.set(`/${props.to}`, el.value);
});
</script>

<template>
  <a
    ref="el"
    :href="props.to"
    :class="[props.class, isActive ? props.activeClass : '']"
    :data-active="isActive"
    @mouseenter="(ev) => $emit('mouseEnter', ev)"
    @mouseleave="(ev) => $emit('mouseLeave', ev)"
  >
    <slot />
  </a>
</template>
