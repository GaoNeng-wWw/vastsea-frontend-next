import { noop } from '@vueuse/core';

export interface UseFullScreenScroll {
  target: Window;
  distance?: number;
  scroll: Behavior;
}
export type Behavior = (distance: number, target: Window) => void;
export const scrollBehavior: Behavior = (distance: number, target: Window) => {
  const top = window.innerHeight;
  if (distance < 0) {
    target.scrollTo({ top: -top, behavior: 'smooth' });
  } else {
    target.scrollTo({ top, behavior: 'smooth' });
  }
};

export function useFullScreenScroll({ target, distance = 30, scroll = scrollBehavior }: UseFullScreenScroll) {
  const touchInfo = reactive({
    start: { x: 0, y: 0 },
    end: { x: 0, y: 0 },
  });
  if (!import.meta.client) {
    return { stop: noop, pause: noop, resume: noop };
  }
  const allow = ref(true);
  let stopController = new AbortController();
  const stop = () => {
    stopController.abort();
    stopController = new AbortController();
  };
  const resume = () => {
    allow.value = true;
  };
  const pause = () => allow.value = false;
  target.addEventListener('touchstart', (ev) => {
    ev.preventDefault();
    if (!ev.targetTouches.length) {
      return;
    }
    const [point] = ev.targetTouches;
    touchInfo.start.x = point.pageX;
    touchInfo.start.y = point.pageY;
  }, { signal: stopController.signal, passive: false });
  target.addEventListener('touchend', (ev) => {
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
      scrollBehavior(d, target);
    }
  }, { signal: stopController.signal });
  target.addEventListener('keydown', (ev) => {
    if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
      ev.preventDefault();
      if (!allow.value) {
        return;
      }
      const dis = ev.key === 'ArrowDown' ? 1 : -1;
      scroll(dis, target);
    }
  });
  target.addEventListener('wheel', (ev) => {
    ev.preventDefault();
    if (!allow.value) {
      return;
    }
    if (Math.abs(ev.deltaY) >= distance) {
      scroll(ev.deltaY, target);
    }
  }, { passive: false });
  return { stop, pause, resume };
}
