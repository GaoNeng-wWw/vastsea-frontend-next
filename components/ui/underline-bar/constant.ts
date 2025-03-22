export const KEY = Symbol('UnderLinebar');
export const UNDERLINE_KEY = Symbol('Underline');
export interface Context {
  map: Map<string, HTMLAnchorElement>;
}
export interface UnderlineContext {
  left: number;
  width: number;
}
