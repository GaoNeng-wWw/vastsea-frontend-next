<template>
  <div class="relative size-full h-screen">
    <div class="projects flex flex-col">
      <div class="projects__title h-fit flex-shrink-0 flex-grow-0">
        <h1 class="font-aliShuhei">
          项目
        </h1>
        <span class="font-aliShuhei">Projects</span>
      </div>
      <div class="projects__wrapper flex-shrink-1">
        <div class="projects__show">
          <nuxt-img src="/images/projects/klpbbs-wj.webp" class="projects__show__image" />
          <div class="projects__show__text">
            <div class="projects__show__date absolute">
              <h2 class="projects__show__date__dateday">
                07/30
              </h2>
              <h2 class="projects__show__date__year">
                2024
              </h2>
            </div>
            <div class="projects__show__text__symbols">
              <div class="projects__show__text__symbols__symbol projects__show__text__symbols__symbol--border">
                N
              </div>
              <div class="projects__show__text__symbols__symbol projects__show__text__symbols__symbol--fill">
                R
              </div>
            </div>
            <h2 class=" projects__show__text__title font-aliShuhei text-primary-500">
              苦力怕论坛问卷系统
            </h2>
            <span class="projects__show__text__desc text-wrap">
              为了让论坛用户能够更加简单、快速地填写问卷，苦力怕论坛 KLPBBS 与 瀚海工艺 Vastsea 团队的多位开发者共同合作，合力打造了一个无缝集成的问卷系统。通过这个系统，论坛用户可以使用已有的账号通过 KLPBBS API 快速登录，而无需重复注册或创建新的账号，极大地优化了用户体验。
            </span>
          </div>
        </div>
        <div class="projects__timeline">
          <div class="projects__timeline__items-wrapper" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
@import url("~/assets/css/f.less");
.projects {
  width: 100%;
  height: 100%;
  background: #fff;
  &__title{
    padding-top: px2vw(122,vh);
    padding-left: px2vw(67);
    h1 {
      font-size: px2vw(72);
    }
    span{
      font-size: px2vw(36);
    }
  }
  &__wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: auto;
  }
  &__timeline {
    &__items-wrapper {
      height: 100%;
      width: 100%;
      background: #000;
    }
    width: 100%;
    height: px2vw(199);
    flex-shrink: 0;
    flex-grow: 1;
    flex-basis: auto;
    background: red;
    padding-right: px2vw(68);
    padding-left: px2vw(129);
    margin-top: px2vw(45, vh);
  }
  &__show{
    display: flex;
    margin-left: px2vw(167.7);
    margin-top: px2vw(39, vh);
    gap: px2vw(110);
    height: px2vw(541, vh);
    &__date{
      position: absolute;
      top: px2vw(167px);
      color: rgba(166, 166, 166, 0.54);
      font-family: 楷体;
      font-weight: 400;
      letter-spacing: px2vw(10);

      &__dateday{
        font-size: px2vw(100px);
      }
      &__year {
        font-size: px2vw(72px);
      }
    }
    &__image{
      flex: 0 0 auto;
      width: 40.052083333333336vw;
      max-width: unset;
      aspect-ratio: auto;

    }
    &__text{
      display: flex;
      flex: 0 1 auto;
      flex-direction: column;
      margin-top: 3.2407407407407405vh;
      margin-right: 17.708333333333336vw;
      &__symbols {
        display:flex;
        justify-content: end;
        font-size: px2vw(36, vh);
        gap: 15px;
        &__symbol{
          &--border {
            display: flex;
            align-items: center;
            justify-content: center;
            border: 5px solid #000;
            border-radius: 10px;
            padding: px2vw(4px, vh) px2vw(8px);
          }
          &--fill {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #000;
            color: white;
            border-radius: 10px;
            padding: px2vw(4px, vh) px2vw(16px);
          }
        }
      }
      &__title{
        margin-bottom: px2vw(25);
        font-size: px2vw(36);
        font-weight: 400;
        text-align: right;
      }
      &__desc{
        flex-grow: 0;
        font-size: px2vw(20);
        font-weight: 200;
        letter-spacing: px2vw(2, vh);
        line-height: px2vw(28);
        overflow: auto;
      }
    }
  }
}
</style>
