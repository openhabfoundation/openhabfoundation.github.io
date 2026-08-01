<template>
  <div class="features">
    <div class="slide-membership-type">
      <div class="feature panel">
        <div class="panel-body">
          <img class="img-rounded" src="/images/puzzle-1019766_Individual_250px.jpg" alt="">
        </div>
        <div class="panel-heading">
          <h4>Sustaining Member</h4>
          <p>For people who just want to show their appreciation.</p>
          <span class="price">1<sub>&euro;</sub></span>
          <span class="period">per month<sup><a href="#fees">*</a></sup></span>
          <a href="/forms/Membership-Application-Form-Individual.pdf" class="join-us-button" target="_blank">Join
            Now!</a>
        </div>
      </div>
    </div>
    <div class="slide-membership-type">
      <div class="feature panel">
        <div class="panel-body">
          <img class="img-rounded" src="/images/puzzle-1020388_supporter_250px.jpg" alt="">
        </div>
        <div class="panel-heading">
          <h4>Ordinary Member</h4>
          <p>For individuals who want to support financially or to actively engage themselves.</p>
          <span class="price">5<sub>&euro;</sub></span>
          <span class="period">per month<sup><a href="#fees">*</a></sup></span>
          <a href="/forms/Membership-Application-Form-Individual.pdf" class="join-us-button" target="_blank">Join
            Now!</a>
        </div>
      </div>
    </div>
    <div class="slide-membership-type">
      <div class="feature panel">
        <div class="panel-body">
          <img class="img-rounded" src="/images/shops-1014037_business_250px.jpg" alt="">
        </div>
        <div class="panel-heading">
          <h4>Legal Entity</h4>
          <p>For companies and organisations that share our vision.</p>
          <span class="price">25<sub>&euro;</sub></span>
          <span class="period">per month<sup><a href="#fees">*</a></sup></span>
          <a href="/forms/Membership-Application-Form-LegalEntity.pdf" class="join-us-button">Join Now!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.slide-membership-type {
  flex-grow: 1;
  flex-basis: calc(30% - 2rem);
}

.slide-membership-type .panel {
  h4 {
    font-weight: 600;
    line-height: 1.25;
    font-size: 14pt;
  }

  p {
    height: 6rem;
  }

  .price {
    width: 100%;
    font-size: 36pt;

    sub {
      vertical-align: top;
    }
  }

  .period {
    padding-left: 5px;
    a {
      text-decoration: none;
    }
  }
}
</style>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(async () => {
  const ScrollReveal = (await import('scrollreveal')).default
  ScrollReveal().reveal('.slide-membership-type', {
    delay: 200,
    distance: '20px',
    origin: 'bottom',
    duration: 1000,
    scale: 1.0,
    interval: 300
  });
})
</script>
