import { noop } from '@vueuse/core';
import { describe, expect, it, vi } from 'vitest';
import { scrollBehavior, useFullScreenScroll } from '../useFullScreenScroll';

describe('useFullScreenScroll', () => {
  it('if is client will not return noop', () => {
    const target: any = {
      addEventListener: vi.fn(),
    };
    const { stop } = useFullScreenScroll({ target, distance: 30, scroll: scrollBehavior, client: true });
    expect(stop).not.toBe(noop);
    expect(target.addEventListener).toBeCalledTimes(4);
  });
  it('if is not client will return noop', () => {
    const target: any = {
      addEventListener: vi.fn(),
    };
    const { stop } = useFullScreenScroll({ target, distance: 30, scroll: scrollBehavior, client: false });
    expect(stop).toBe(noop);
  });
});
