<template>
  <div class="our-focus">

    <h2 class="big-title">Our Focus</h2>

    <div class="home">
      <div class="features focus">

      <div class="feature slide-focus">
        <div class="focus-icon-container dim">
            <img class="focus-icon" src="./icons/open-source.svg" />
        </div>
        <h2>Free Software</h2>
        <p>Free Software is <a target="_blank" href="https://en.wikipedia.org/wiki/Gratis_versus_libre">free as in speech, not free as in beer</a>. We believe that the software that builds the backbone of smart homes must not be closed or restricted, but that everybody must have the freedom to modify and enhance it. We therefore fully support and help to spread the ideal of Free software as proclaimed by the <a target="_blank" href="https://www.fsf.org/">Free Software Foundation (FSF)</a>.</p>
      </div>

      <div class="feature slide-focus smarthome">
        <div class="focus-icon-container">
            <img class="focus-icon" src="./icons/home.svg" />
        </div>
        <h2>Smart Home</h2>
        <p><a target="_blank" href="https://en.wikipedia.org/wiki/Home_Automation">Smart Homes</a> are our passion - and therefore we strive to make its benefits better known to the public and also to educate people about associated problems and risks. We specifically believe that smart homes must not mandatorily depend on cloud services, but should work offline as well. This not only assures the independency from the internet, but also addresses data privacy concerns.</p>
      </div>

      <div class="feature slide-focus openhab">
        <div class="focus-icon-container">
            <img class="focus-icon" src="./icons/openhab.png" />
        </div>
        <h2>openHAB</h2>
        <p><a target="_blank" href="https://www.openhab.org">openHAB</a> is one of the most popular open source software solutions for smart homes. It leaves full control and utmost flexibility to the user and is able to serve as an integration point for most smart home products on the market. It focuses on local integration, following the principle of an "Intranet of Things" and has a huge active community of users and developers</p>
      </div>

      </div>
    </div>

    <div style="text-align: center">
      <router-link class="link-button white" to="/about/">About the Foundation ➜</router-link>
    </div>
  </div>
</template>

<style lang="stylus">
  .our-focus
    background #2196f3
    color white
    padding-bottom 2rem

    .big-title
      padding-top 2.5rem
      border none
      color white
    .home
      .feature
        p
          color #fff
        h2
          color #eee
        a
          color #cdece4
          &:hover
            color #ffffff
            text-decoration underline
    .focus-icon-container
      position absolute
      z-index -100
      opacity 0.4
      width 100%
      text-align center
      &.dim
        opacity 0.2

      .focus-icon
        margin-top 6rem
        width 200px
        filter grayscale(50%) sepia(30%)
    @media (max-width 859px)
      .focus-icon-container
        position inherit
        opacity 1
        &.dim
          opacity 0.4
        .focus-icon
          margin-top 0
          width 30%
      p
        margin-bottom 3rem
.link-button.white
  border-color white
  color white
  &:hover
    background white
    color #2196f3
</style>

<script>
export default {
  mounted () {
    if (this.$sr) {
      const sr = this.$sr
      sr.reveal('.slide-focus', { scale: 1.0 }, 200)
    }
  }
}
</script>
