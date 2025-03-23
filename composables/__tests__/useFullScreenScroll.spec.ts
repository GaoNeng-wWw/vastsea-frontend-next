import { noop } from '@vueuse/core';
import { describe, expect, it, vi } from 'vitest';
import { scrollBehavior, useFullScreenScroll } from '../useFullScreenScroll';

describe('useFullScreenScroll', () => {
  it('should Call', () => {
    vi.spyOn(import.meta, 'client', 'get').mockReturnValue(true);
    const { stop } = useFullScreenScroll({ target: null as any, distance: 30, scroll: scrollBehavior });
    expect(stop).not.toBe(noop);
  });
});
