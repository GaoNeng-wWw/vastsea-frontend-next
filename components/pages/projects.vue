<template>
  <div class="projects">
    <div class="projects__title font-aliShuhei">
      <h1>
        项目
      </h1>
      <p>Projects</p>
    </div>
    <div class="projects__info">
      <div class="projects__info__wrapper">
        <img class="projects__info__wrapper__image" src="/images/projects/klpbbs-wj.webp">
        <div class="projects__info__wrapper__text space-y-[25px]">
          <div class="projects__info__wrapper__text__stacks flex justify-end gap-2">
            <div class="w-fit rounded px-2 py-1 text-white" style="background-color: rgba(255, 87, 51, 1);">
              Next.js
            </div>
            <div class="w-fit rounded px-2 py-1 text-white" style="background-color: rgba(95, 77, 60, 1);">
              Rust
            </div>
          </div>
          <p class="title text-right font-aliShuhei font-normal leading-none tracking-[10px] text-primary-500">
            苦力怕论坛调查问卷系统
          </p>
          <p class="desc leading-7 tracking-[2px]">
            为了让论坛用户能够更加简单、快速地填写问卷，苦力怕论坛 KLPBBS 与 瀚海工艺 Vastsea 团队的多位开发者共同合作，合力打造了一个无缝集成的问卷系统。通过这个系统，论坛用户可以使用已有的账号通过 KLPBBS API 快速登录，而无需重复注册或创建新的账号，极大地优化了用户体验。
          </p>
        </div>
      </div>
    </div>
    <div class="projects__timeline">
      timeline-WIP
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("~/assets/css/f.less");
.projects {
  &__title {
    h1 {
      font-size: px2vw(72);
      font-weight: 400;
    }
    p {
      font-size: px2vw(36);
      font-weight: 400;
    }
    padding-left: px2vw(67px);
    margin-bottom: px2vw(39, vh);
  }
  &__info {
    &__wrapper {
      &__image {
        width: px2vw(769);
        height: 100%;
      }
      &__text {
        .title {
          font-size: px2vw(36);
        }
        .desc {
          font-size: px2vw(20);
        }
        display: flex;
        flex-direction: column;
        justify-content: center;
        flex: 1;
        width: 100%;
      }
      display: flex;
      gap: px2vw(110px);
      width: 100%;
      height: 100%;
    }
    padding-left: px2vw(167.7);
    padding-right: px2vw(350);
    width: 100%;
    height: px2vw(541, vh);
    // flex: 1 1 auto;
  }
  &__timeline {
    width: 100%;
    max-height: px2vw(199px, vh);
    height: 100%;
    // height: 100%;
    flex: 1 0 0;
  }
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding-top: px2vw(122px);
  background: #fff;
}
</style>
