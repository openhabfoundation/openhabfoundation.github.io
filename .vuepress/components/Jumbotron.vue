<template>
  <div class="jumbotron">
    <div style="min-height: 480px">
      <div class="jumbotron-filter">
        <div class="jumbotron-pattern"></div>
      </div>
      <h1 class="welcome jumbotron-title">
        <span>Welcome to the<img src="/logo-white.png" alt="openHAB" class="openhab-logo" />Foundation!</span>
      </h1>
      <ClientOnly>
        <Parallax>
          <img src="/images/home/jumbotron.jpg" />
        </Parallax>
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
  min-height 480px
  .jumbotron-filter
    position absolute
    left 0
    right 0
    top 4rem
    height 480px
    background linear-gradient(#ff6600ff, #ff660050)

  .jumbotron-pattern
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    opacity 0.3
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHklEQVQYV2NkQAX/GZH4/4FsRpgAmAOSBBFwDkgAAIKuBARYEptoAAAAAElFTkSuQmCC')
    //z-index -100
  .jumbotron-title
    margin-top 0
    font-weight 400
    width 100%
    padding-bottom 2rem
    margin-top 4rem
    //background linear-gradient(#ff6600ff, #ff660050)
    color white
    position absolute
    font-family 'Open Sans', sans-serif
    font-size 31pt
    line-height 2
    text-shadow 0 0 10px #333
    user-select none
    animation 1.5s ease-out 0s 1 slideIn2
    .openhab-logo
      padding-left 10px
      padding-right 10px
      margin-bottom -15px
      filter drop-shadow(0 0 10px #333)
  .jumbotron-center
    text-align center
  .jumbotron-illustration
    transform none
    margin-bottom 8rem
  h2
    font-family 'Open Sans', sans-serif
    font-weight 300
    border 0
  .Masthead
      height 480px !important
      min-height 480px !important
      img
        filter grayscale()
</style>

<script>
import Parallax from 'vue-parallaxy'

export default {
  components: {
    Parallax
  },
  mounted () {
    if (this.$sr) {
      const sr = this.$sr
      sr.reveal('.slide-title span', { scale: 1.0, direction: 'up', duration: 1500 })
      sr.reveal('.jumbotron h2', { scale: 1.0, direction: 'up', duration: 500, delay: 800 })
      sr.reveal('.jumbotron p', { scale: 1.0, direction: 'up', duration: 500, delay: 1000 }, 300)
    }
  }
}
</script>
