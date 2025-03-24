<template>
  <div class="size-full h-screen">
    <div class="projects">
      <div class="projects__title">
        <h1 class="font-aliShuhei">
          项目
        </h1>
        <span class="font-aliShuhei">Projects</span>
      </div>
      <div class="projects__show">
        <nuxt-img src="/images/projects/klpbbs-wj.webp" class="projects__show__image" />
        <div class="projects__show__text flex-auto">
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
          <span class="projects__show__text__desc break-words">
            为了让论坛用户能够更加简单、快速地填写问卷，苦力怕论坛 KLPBBS 与 瀚海工艺 Vastsea 团队的多位开发者共同合作，合力打造了一个无缝集成的问卷系统。通过这个系统，论坛用户可以使用已有的账号通过 KLPBBS API 快速登录，而无需重复注册或创建新的账号，极大地优化了用户体验。
          </span>
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
  &__show{
    display: flex;
    margin-left: px2vw(167.7);
    margin-top: px2vw(39, vh);
    gap: px2vw(110);
    &__image{
      flex-shrink: 0;
      width: px2vw(769, vw);
      aspect-ratio: auto;
    }
    &__text{
      margin-top: px2vw(35, vh);
      margin-right: px2vw(340px);
      &__symbols {
        display:flex;
        justify-content: end;
        font-size: px2vw(36);
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
        font-size: px2vw(20);
        font-weight: 200;
        letter-spacing: px2vw(2, vh);
        line-height: px2vw(28);
      }
    }
  }
}
</style>
