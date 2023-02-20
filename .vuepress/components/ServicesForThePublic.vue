<template>
  <div class="services-container">
    <h2 class="big-title">Our Services for the Public</h2>

    <div class="content">
      <div class="services">
      <div class="service">
        <div class="service-body">
          <div class="service-icon-container">
          <img class="service-icon" src="./icons/001-question.svg" />
          </div>
          <h4 class="service-heading">Consultancy</h4>
            <p>We are running the <a href="http://community.openhab.org/">openHAB Forum</a>, where we answer questions and provide support.</p>
          </div>
        </div>
        <div class="service">
          <div class="service-body">
            <div class="service-icon-container">
              <img class="service-icon" src="./icons/004-server-1.svg" />
            </div>
            <h4 class="service-heading">Infrastructure &amp; Marketing</h4>
            <p>We run the <a href="https://www.openhab.org/">openHAB official website</a> and maintain the <a href="https://openhab.ci.cloudbees.com/" target="_blank">build server</a>.</p>
          </div>
        </div>
        <div class="service">
          <div class="service-body">
            <div class="service-icon-container">
              <img class="service-icon" src="./icons/005-book.svg" />
            </div>
            <h4 class="service-heading">Reference Documentation</h4>
            <p>As documentation is often scarce, we help on providing a detailed <a href="https://www.openhab.org/docs/" target="_blank">user reference</a>.</p>
          </div>
        </div>
        <div class="service">
          <div class="service-body">
            <div class="service-icon-container">
              <img class="service-icon" src="./icons/003-cloud.svg" />
            </div>
            <h4 class="service-heading">Online Demo</h4>
            <p>We are operating an <a href="https://demo.openhab.org:8443/" target="_blank">openHAB demo server</a>, which gives an easy first impression of it.</p>
          </div>
        </div>
        <div class="service">
          <div class="service-body">
            <div class="service-icon-container">
              <img class="service-icon" src="./icons/006-manual.svg" />
            </div>
            <h4 class="service-heading">Services</h4>
            <p>We are providing guidance and references when professional services are required.</p>
          </div>
        </div>
        <div class="service">
          <div class="service-body">
            <div class="service-icon-container">
              <img class="service-icon" src="./icons/007-app.svg" />
            </div>
            <h4 class="service-heading">Reference Apps &amp; Plugins</h4>
            <p>We publish apps and plugins in various third-party app stores for reference.</p>
          </div>
        </div>
        <div class="service">
          <div class="service-body">
            <div class="service-icon-container">
              <img class="service-icon" src="./icons/002-server.svg" />
            </div>
            <h4 class="service-heading">Proof-of-Concepts</h4>
            <p>We are running <a href="http://www.myopenhab.org" target="_blank">myopenHAB.org</a> to show case the <a href="https://github.com/openhab/openhab-cloud#openhab-cloud" target="_blank">openHAB Cloud</a> features.</p>
          </div>
        </div>
        <div class="service">
          <div class="service-body">
            <div class="service-icon-container">
              <img class="service-icon" src="./icons/008-speaker.svg" />
            </div>
            <h4 class="service-heading">Events</h4>
            <p>Local events are the best way to spread the word - we help and provide speakers.</p>
          </div>
        </div>
        <div class="service">
          <div class="service-body">
            <div class="service-icon-container">
              <img class="service-icon" src="./icons/009-writer.svg" />
            </div>
            <h4 class="service-heading">Blogging</h4>
            <p>Our members regularly <a href="https://www.openhab.org/blog/" target="_blank">blog about smart home</a> topics to share their insights.</p>
          </div>
        </div>
      </div>

      <div style="text-align: center">
        <router-link class="link-button" to="/contact/">Get in Touch ➜</router-link>
      </div>

      <router-link to="/imprint.html#icon-attribution" style="font-size: 8pt; color: #bbb; display: block; text-align: right">Icons from Flaticon</router-link>
    </div>

  </div>
</template>

<style lang="stylus">
.services-container {
  background: #eef;

  .big-title {
    margin-top: 0;
    padding-top: 2.5rem;
    border: 0;
  }
}

.services {
  display: flex;
  flex-wrap: wrap;

  .service {
    flex-grow: 1;
    width: 33%;
  }

  @media (max-width: 859px) {
    .service {
      width: 100%;
    }
  }

  .service-body {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    .service-icon {
      width: 150px;
      // padding-top: 5rem;
    }

    .service-heading {
      font-family: 'Open Sans', sans-serif;
      font-weight: bold;
      font-size: 14pt;
    }

    p {
      margin-bottom: 5rem;
    }
  }
}
</style>

<script>
export default {
  mounted () {
    if (this.$sr) {
      const sr = this.$sr
      sr.reveal('.services .service', { scale: 1.0 }) //, 100)
    }
  }
}
</script>

