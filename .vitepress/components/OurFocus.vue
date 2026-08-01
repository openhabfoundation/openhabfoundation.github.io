<template>
  <div class="our-focus">

    <h2 class="big-title">Our Focus</h2>

    <div class="home">
      <div class="features focus">

      <div class="feature slide-focus">
        <div class="focus-icon-container dim">
            <img class="focus-icon" :src="openSourceIcon" alt="" />
        </div>
        <h2>Free Software</h2>
        <p>Free Software is <a target="_blank" href="https://en.wikipedia.org/wiki/Gratis_versus_libre">free as in speech, not free as in beer</a>. We believe that the software that builds the backbone of smart homes must not be closed or restricted, but that everybody must have the freedom to modify and enhance it. We therefore fully support and help to spread the ideal of Free software as proclaimed by the <a target="_blank" href="https://www.fsf.org/">Free Software Foundation (FSF)</a>.</p>
      </div>

      <div class="feature slide-focus smarthome">
        <div class="focus-icon-container">
            <img class="focus-icon" :src="homeIcon" alt="" />
        </div>
        <h2>Smart Home</h2>
        <p><a target="_blank" href="https://en.wikipedia.org/wiki/Home_Automation">Smart Homes</a> are our passion - and therefore we strive to make its benefits better known to the public and also to educate people about associated problems and risks. We specifically believe that smart homes must not mandatorily depend on cloud services, but should work offline as well. This not only assures the independency from the internet, but also addresses data privacy concerns.</p>
      </div>

      <div class="feature slide-focus openhab">
        <div class="focus-icon-container">
            <img class="focus-icon" :src="withBase(isDark ? '/openhab-logo-square-dark.svg' : '/openhab-logo-square.svg')" alt="" />
        </div>
        <h2>openHAB</h2>
        <p><a target="_blank" href="https://www.openhab.org">openHAB</a> is one of the most popular open source software solutions for smart homes. It leaves full control and utmost flexibility to the user and is able to serve as an integration point for most smart home products on the market. It focuses on local integration, following the principle of an "Intranet of Things" and has a huge active community of users and developers</p>
      </div>

      </div>
    </div>

    <div style="text-align: center">
      <a class="link-button white" href="/about">About the Foundation ➜</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useData, withBase } from 'vitepress'
import openSourceIcon from './icons/open-source.svg'
import homeIcon from './icons/home.svg'

const { isDark } = useData()

const srRef = ref<any>(null)

onMounted(async () => {
  const ScrollReveal = (await import('scrollreveal')).default
  const sr = ScrollReveal()
  srRef.value = sr
  sr.reveal('.slide-focus', { scale: 1.0 }, 200)
})

onUnmounted(() => {
  if (srRef.value) {
    srRef.value.clean('.slide-focus')
  }
})
</script>

<style lang="stylus">
  .our-focus
    background #2196f3
    color white
    padding-bottom 2rem

    html.dark &
      background #14385c

      .link-button.white:hover
        color #14385c

    .big-title
      padding-top 2.5rem
      border none
      color white

    .home
      max-width 1140px
      margin 0 auto
      padding 0 1.5rem
      box-sizing border-box

      .features.focus
        display flex
        flex-wrap wrap
        justify-content space-between
        border-top none
        margin-top 0
        padding 0

        .feature
          position relative
          overflow hidden
          text-align center
          background transparent
          border none
          flex 1 1 calc(33.333% - 1.5rem)
          margin 0.75rem
          padding 1.25rem 1rem
          box-sizing border-box

          &:hover
            transform none

          h2, p, a
            position relative
            z-index 2

          h2
            font-family 'Open Sans', sans-serif
            font-weight 600
            font-size 1.35rem
            color #ffffff
            margin-top 1rem
            margin-bottom 1rem

          p
            color #fff
            font-size 1rem
            line-height 1.6
            margin-bottom 1.5rem

          a
            color #cdece4
            &:hover
              color #ffffff
              text-decoration underline

          .focus-icon-container
            position absolute
            top 0
            left 0
            right 0
            bottom 0
            z-index 1
            display flex
            align-items center
            justify-content center
            opacity 0.4
            pointer-events none
            width 100%
            text-align center
            &.dim
              opacity 0.2

            .focus-icon
              width 160px
              max-width 80%
              filter grayscale(50%) sepia(30%)

    @media (max-width 859px)
      .home
        padding 0 1.5rem
        .features.focus .feature
          flex 1 1 100%
          margin 0.5rem 0 2rem
          padding 0.5rem
          .focus-icon-container
            position relative
            opacity 1
            margin-bottom 0.75rem
            &.dim
              opacity 0.4
            .focus-icon
              width 24%
          p
            margin-bottom 1.25rem

.link-button.white
  border-color white
  color white
  &:hover
    background white
    color #2196f3
</style>


