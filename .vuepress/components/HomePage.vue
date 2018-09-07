<template>
  <div class="homepage">
    <Jumbotron />

    <div class="content">
      <div style="text-align: center">
        <router-link class="link-button big" to="/join/">Join Us Today ➜</router-link>
      </div>
    </div>

    <div class="after-jumbotron">
      <OurFocus />
      <ServicesForThePublic />

      <div class="content">
        <h2 class="big-title">Our Supporters</h2>

        <OurMembers />

        <div style="text-align: center">
          <router-link class="link-button" to="/members/">Learn More About Them ➜</router-link>
        </div>
      </div>

      <Footer />            
    </div>

  </div>

</template>

<style lang="stylus">
@keyframes fadeIn {
  0% {
    // transform translateY(10px)
    opacity: 0;
  }

  70% {
    // transform translateY(10px)
    opacity: 0;
  }

  100% {
    // transform translateY(0)
    opacity: 0.5;
  }
}

.homepage .content {
  padding-top: 0;
}

img.illustration-fadeIn {
  animation: 2s ease-out 0s 1 fadeIn;
}

h1.welcome {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
  font-size: 36pt;
  text-align: center;
}

.focus {
  .feature {
    text-align: center;

    h2 {
      font-family: 'Open Sans', sans-serif;
      font-weight: bold;
      font-size: 16pt;
    }
  }
}

.after-jumbotron {
  position: absolute;
  left: 0;
  right: 0;
}

.link-button {
  margin: 2rem;
  display: inline-block;
  text-align: center;
  color: #ff6600;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border: 2px solid #ff6600;

  &.big {
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #ff6600;
    color: white;
    text-decoration: none !important;
  }
}
</style>
