<template>
  <div class="jumbotron">
    <div style="height: 260px; min-height: 260px; overflow: hidden; position: relative;">
      <div class="jumbotron-filter">
        <div class="jumbotron-pattern"></div>
      </div>
      <h1 class="welcome jumbotron-title">
        <span class="title-segment">Welcome to the</span>
        <span class="title-segment logo-segment"><img src="/logo-white.png" alt="openHAB" class="openhab-logo" /></span>
        <span class="title-segment">Foundation!</span>
      </h1>
      <ClientOnly>
        <Parallaxy :speed="0">
          <img src="/images/home/library.jpg" />
        </Parallaxy>
      </ClientOnly>
    </div>
    <div class="content jumbotron-center">

      <h2>We are a non-profit organisation with the mission to educate the public about the possibilities and benefits of free and open smart home solutions.</h2>

      <p>More and more new technologies and devices are introduced to our living, working and business environment. Although all of them are designed to make our lives easier, we believe they have a common problem: The lack of interoperability, due to incompatible technology stacks and conflicting commercial interests. Market consolidation and cooperation between all stakeholders therefore remains a difficult challenge.</p>

      <p>In our vision, system-wide, multi-vendor interoperability can only succeed if it is free from monetary interests. Free Software is the best option to boost innovation and to make smart home technology available for everybody. Furthermore, Free Software is irreplaceable for research and teaching.</p>
    </div>

  </div>
</template>

<style lang="stylus">
@keyframes slideIn2
  0%
    transform translateY(30px)
    opacity 0
  40%
    transform translateY(10px)
    opacity 0
  70%
    transform translateY(0)
    opacity 1

.jumbotron
  position relative
  min-height 260px
  overflow hidden

  .jumbotron-filter
    position absolute
    left 0
    right 0
    top 0
    height 260px
    background linear-gradient(#ff6600ff, #ff660000)
    z-index 2
    pointer-events none

  .jumbotron-pattern
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    height 260px
    opacity 0.2
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHklEQVQYV2NkQAX/GZH4/4FsRpgAmAOSBBFwDkgAAIKuBARYEptoAAAAAElFTkSuQmCC')
    z-index 3

  .jumbotron-title
    margin 0
    font-weight 400
    width 100%
    height 260px
    padding 0 2.5rem
    box-sizing border-box
    color white
    position absolute
    top 0
    left 0
    right 0
    display flex
    flex-direction row
    flex-wrap wrap
    justify-content center
    align-items center
    z-index 4
    font-family 'Open Sans', sans-serif
    font-size 34pt
    line-height 1.4
    text-shadow 0 0 15px #333
    user-select none
    animation 1.5s ease-out 0s 1 slideIn2
    pointer-events none
    text-align center

    .title-segment
      display inline-block
      white-space nowrap

    .openhab-logo
      display inline-block !important
      height 50px
      width auto
      padding-left 10px
      padding-right 10px
      margin-bottom -16px
      vertical-align baseline
      filter drop-shadow(0 0 10px #333)

  @media (max-width: 859px)
    .jumbotron-title
      flex-direction column
      margin-top 0
      padding 0 1.5rem
      font-size 30pt
      line-height 1.25
      .title-segment
        display block
        white-space normal
        margin 0.3rem 0
      .logo-segment
        margin-top 0.8rem
        margin-bottom 0.4rem
        display flex
        justify-content center
        align-items center
      .openhab-logo
        height 42px
        margin-bottom 0
        padding 0

  @media (max-width: 480px)
    .jumbotron-title
      margin-top 0
      padding 0 1rem
      font-size 28pt
      line-height 1.2
      .title-segment
        display block
        white-space normal
        margin 0.3rem 0
      .logo-segment
        margin-top 0.7rem
        margin-bottom 0.35rem
        display flex
        justify-content center
        align-items center
      .openhab-logo
        height 38px
        margin-bottom 0
        padding 0

  .jumbotron-center
    text-align center
    max-width 1024px
    margin 0 auto
    padding 3.5rem 2.5rem 1rem

    h2
      font-family 'Open Sans', sans-serif
      font-weight 300
      font-size 1.65rem
      line-height 1.4
      border 0
      margin-top 3.5rem
      margin-bottom 2rem

    p
      font-family 'Open Sans', sans-serif
      font-size 1rem
      line-height 1.7
      font-weight 300
      margin-bottom 1.5rem
      text-align center

  .jumbotron-illustration
    transform none
    margin-bottom 8rem

  .jumbotron-hero-container
    position relative !important
    height 260px !important
    min-height 260px !important
    overflow hidden !important

  .Masthead
  div[class*="parallaxy"]
  div[class*="Parallaxy"]
    position absolute !important
    top 0 !important
    left 0 !important
    right 0 !important
    bottom 0 !important
    height 260px !important
    min-height 260px !important
    max-height 260px !important
    width 100% !important
    overflow hidden !important
    z-index 1

    img
      height 100% !important
      min-height 260px !important
      width 100% !important
      min-width 100% !important
      object-fit cover !important
      object-position center center !important
      vertical-align top !important
      margin 0 !important
      padding 0 !important
</style>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import Parallaxy from '@lucien144/vue3-parallaxy'

const srRef = ref<any>(null)

onMounted(async () => {
  const ScrollReveal = (await import('scrollreveal')).default
  const sr = ScrollReveal()
  srRef.value = sr
  sr.reveal('.slide-title span', { scale: 1.0, direction: 'up', duration: 1500 })
  sr.reveal('.jumbotron h2', { scale: 1.0, direction: 'up', duration: 500, delay: 800 })
  sr.reveal('.jumbotron p', { scale: 1.0, direction: 'up', duration: 500, delay: 1000 }, 300)
})

onUnmounted(() => {
  if (srRef.value) {
    srRef.value.clean('.slide-title span')
    srRef.value.clean('.jumbotron h2')
    srRef.value.clean('.jumbotron p')
  }
})
</script>


