<template>
  <div class="timeline-items relative flex w-full flex-col">
    <div class="timeline-item__top" />
    <div class="timeline-item__wrapper">
      <div class="timeline-item__wrapper__circle" />
      <div>
        <p>xxxxxxxxxxx</p>
        <p>xxxxxxxxxxx</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("~/assets/css/f.less");
.timeline-items {
  &:first-child{
    ::before {
      display: none;
    }
  }
  &:last-child {
    ::after{
      display: none;
    }
  }
}
.timeline-item {
  &__top {
    height: px2vw(82);
  }
  &__wrapper {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    &__circle {
      width: px2vw(30);
      height: px2vw(30);
      border-radius: 100%;
      margin: 0 auto;
      background: hsla(var(--primary-500));
    }
    // &::before,
    // &::after{
    //   position: absolute;
    //   top: px2vw(15);
    //   width: 50%;
    //   height: px2vw(15);
    //   background: hsla(var(--primary-500));
    //   content: "";
    //   transform: translate(0, -50%);
    // }
    // &::before {
    //   left: 0;
    // }
    // &::after {
    //   right: 0;
    // }
  }
}
</style>
