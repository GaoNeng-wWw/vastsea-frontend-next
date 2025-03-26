export interface TimeLineContext {
  addNode: () => void;
  getWidth: () => string;
  onClick: (index: number) => void;
  activeIndex: Ref<number>;
  topHeight: Ref<number>;
  bottomHeight: Ref<number>;
}

export const key = Symbol('TimeLine');
