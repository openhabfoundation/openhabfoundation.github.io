<template>
  <div class="jumbotron">
    <h1 class="welcome slide-title jumbotron-title">
      <div class="jumbotron-pattern"></div>
      <span>Welcome to the<img src="/logo-white.png" alt="openHAB" class="openhab-logo" />Foundation!</span>
    </h1>

    <div style="min-height: 468px">
      <ClientOnly>
        <Parallax>
          <img src="/images/home/library.jpg" class="illustration-fadeIn" />
        </Parallax>
      </ClientOnly>
    </div>
    <div class="content jumbotron-center">

      <h2>We are a non-profit organisation with the mission to educate the public about the possibilities and benefits of free and open smart home solutions.</h2>

      <!-- <img class="illustration-fadeIn jumbotron-illustration" src="/images/smart-home-2769210_1920.jpg" alt=""> -->

      <p>More and more new technologies and devices are introduced to our living, working and business environment. Although all of them are designed to make our lives easier, we believe they have a common problem: The lack of interoperability, due to incompatible technology stacks and conflicting commercial interests. Market consolidation and cooperation between all stakeholders therefore remains a difficult challenge.</p>

      <p>In our vision, system-wide, multi-vendor interoperability can only succeed if it is free from monetary interests. Free Software is the best option to boost innovation and to make smart home technology available for everybody. Furthermore, Free Software is irreplaceable for research and teaching.</p>
    </div>

  </div>
</template>

<style lang="stylus">
.jumbotron
  .jumbotron-pattern
    position absolute
    left 0
    right 0
    bottom 0
    top 0
    //opacity 0.2
    background url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAHklEQVQYV2NkQAX/GZH4/4FsRpgAmAOSBBFwDkgAAIKuBARYEptoAAAAAElFTkSuQmCC')
    z-index -100
  .jumbotron-title
    background #aaa
    font-weight 400
    margin-top -1rem
    padding-top 8rem
    padding-bottom 2rem
    background linear-gradient(#ff660030, #ff6600ff)
    color white
    position relative
    font-family 'Open Sans', sans-serif
    font-size 28pt
    line-height 2
    //box-shadow 0px 10px 60px 0px rgba(0,0,0,0.75);
    // span
    //   border-bottom 4px solid #ff6600
    .openhab-logo
      padding-left 10px
      padding-right 10px
      margin-bottom -15px
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
      margin-top -1.5rem
  @media screen and (min-width: 768px)
    .Masthead
      height: 468px !important
      min-height: 468px !important
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
      sr.reveal('.jumbotron h2', { scale: 1.0, direction: 'up', duration: 1500 })
      sr.reveal('.jumbotron p', { scale: 1.0, direction: 'up', duration: 500 }, 300)
    }
  }
}
</script>
