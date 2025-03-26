export interface RootContext {
  stop: () => void;
  pause: () => void;
  resume: () => void;
  start: () => void;
}
export const ROOT_KEY = Symbol('ROOT');
export const useRootContext = () => inject<RootContext>(ROOT_KEY)!;
export const createRootContext = (ctx: RootContext) => provide(ROOT_KEY, ctx);
