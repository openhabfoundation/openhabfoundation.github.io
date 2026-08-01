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
            <p>We are operating an <a href="https://demo.openhab.org/" target="_blank">openHAB demo server</a>, which gives an easy first impression of it.</p>
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
        <a class="link-button" href="/contact">Get in Touch ➜</a>
      </div>

      <a href="/imprint#icon-attribution" style="font-size: 8pt; color: #bbb; display: block; text-align: right">Icons from Flaticon</a>
    </div>

  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const srRef = ref<any>(null)

onMounted(async () => {
  const ScrollReveal = (await import('scrollreveal')).default
  const sr = ScrollReveal()
  srRef.value = sr
  sr.reveal('.services .service', { scale: 1.0 })
})

onUnmounted(() => {
  if (srRef.value) {
    srRef.value.clean('.services .service')
  }
})
</script>

<style lang="stylus">
.services-container {
  background: #eef;
  color: #2c3e50 !important;

  .big-title {
    margin-top: 0;
    padding-top: 2.5rem;
    border: 0;
    color: #2c3e50 !important;
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
    text-align: center;
    color: #2c3e50 !important;

    .service-icon-container {
      margin-bottom: 1.25rem;
    }

    .service-icon {
      width: 150px;
    }

    .service-heading {
      font-weight: 600;
      font-size: 1.25rem;
      margin-top: 0;
      margin-bottom: 1rem;
      text-align: center;
      color: #2c3e50 !important;
    }

    p {
      margin-top: 0;
      margin-bottom: 4rem;
      text-align: center;
      color: #2c3e50 !important;
    }

    a {
      color: #ff6600 !important;
      &:hover {
        color: #cc5200 !important;
        text-decoration: underline;
      }
    }
  }
}
</style>


