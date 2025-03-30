import { noop } from '@vueuse/core';

export interface UseFullScreenScroll {
  target: Ref<HTMLElement | null>;
  distance: number;
  scroll?: Behavior;
  client?: boolean;
}
export type Behavior = (distance: number, target: HTMLElement | null) => void;
export const scrollBehavior: Behavior = (distance: number, target: HTMLElement | null) => {
  if (!target) {
    return;
  }
  const top = target.offsetHeight;
  if (distance < 0) {
    target.scrollTo({ top: -top, behavior: 'smooth' });
  }
 else {
    target.scrollTo({ top, behavior: 'smooth' });
  }
};

export function useFullScreenScroll({ target, distance = 0, scroll = scrollBehavior, client = import.meta.client }: UseFullScreenScroll) {
  const touchInfo = reactive({
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 },
  });
  if (!client) {
    return { stop: noop, pause: noop, resume: noop, start: noop };
  }
  const allow = ref(true);
  let stopController = new AbortController();
  const stop = () => {
    stopController.abort();
    stopController = new AbortController();
  };
  const start = () => {
    if (!target.value) {
      return;
    }
    target.value.addEventListener('touchstart', (ev) => {
      if (!allow.value) {
        return;
      }
      ev.preventDefault();
      if (!ev.targetTouches.length) {
        return;
      }
      const [point] = ev.targetTouches;
      touchInfo.start.x = point.pageX;
      touchInfo.start.y = point.pageY;
    }, { signal: stopController.signal, passive: false });
    target.value.addEventListener('touchend', (ev) => {
      if (!allow.value) {
        return;
      }
      ev.preventDefault();
      if (!ev.targetTouches.length) {
        return;
      }
      const [point] = ev.targetTouches;
      touchInfo.end.x = point.pageX;
      touchInfo.end.y = point.pageY;
      const d = touchInfo.end.y - touchInfo.start.y;
      if (!allow.value) {
        return;
      }
      if (d >= distance) {
        scrollBehavior(d, target.value);
      }
    }, { signal: stopController.signal });
    target.value.addEventListener('keydown', (ev) => {
      if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
        if (!allow.value) {
          return;
        }
        ev.preventDefault();
        const dis = ev.key === 'ArrowDown' ? 1 : -1;
        scroll(dis, target.value);
      }
    });
    target.value.addEventListener('wheel', (ev) => {
      if (!allow.value) {
        return;
      }
      ev.preventDefault();
      if (Math.abs(ev.deltaY) >= distance) {
        scroll(ev.deltaY, target.value);
      }
    }, { passive: false });
  };
  const resume = () => {
    allow.value = true;
  };
  const pause = () => {
    allow.value = false;
  };
  watch(target, () => {
    if (!target.value) {
      return;
    }
    if (!import.meta.client) {
      return;
    }
    start();
  }, { immediate: true });
  return { stop, pause, resume, start };
}
