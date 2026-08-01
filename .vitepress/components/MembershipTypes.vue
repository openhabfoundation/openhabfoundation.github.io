<template>
  <div class="features">
    <div class="slide-membership-type">
      <div class="feature panel">
        <div class="panel-body">
          <img class="img-rounded" src="/images/puzzle-1019766_Individual_250px.jpg" alt="" />
        </div>
        <div class="panel-heading">
          <h4>Sustaining Member</h4>
          <p>For people who just want to show their appreciation.</p>
          <div class="price-container">
            <span class="price">1<sub>&euro;</sub></span>
            <span class="period"
              >per month<sup><a href="#fees">*</a></sup></span
            >
          </div>
          <a
            href="/forms/Membership-Application-Form-Individual.pdf"
            class="join-us-button"
            target="_blank"
            >Join Now!</a
          >
        </div>
      </div>
    </div>
    <div class="slide-membership-type">
      <div class="feature panel">
        <div class="panel-body">
          <img class="img-rounded" src="/images/puzzle-1020388_supporter_250px.jpg" alt="" />
        </div>
        <div class="panel-heading">
          <h4>Ordinary Member</h4>
          <p>For individuals who want to support financially or to actively engage themselves.</p>
          <div class="price-container">
            <span class="price">5<sub>&euro;</sub></span>
            <span class="period"
              >per month<sup><a href="#fees">*</a></sup></span
            >
          </div>
          <a
            href="/forms/Membership-Application-Form-Individual.pdf"
            class="join-us-button"
            target="_blank"
            >Join Now!</a
          >
        </div>
      </div>
    </div>
    <div class="slide-membership-type">
      <div class="feature panel">
        <div class="panel-body">
          <img class="img-rounded" src="/images/shops-1014037_business_250px.jpg" alt="" />
        </div>
        <div class="panel-heading">
          <h4>Legal Entity</h4>
          <p>For companies and organisations that share our vision.</p>
          <div class="price-container">
            <span class="price">25<sub>&euro;</sub></span>
            <span class="period"
              >per month<sup><a href="#fees">*</a></sup></span
            >
          </div>
          <a href="/forms/Membership-Application-Form-LegalEntity.pdf" class="join-us-button"
            >Join Now!</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.features {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch !important;
  justify-content: center;
}

.slide-membership-type {
  flex: 1 1 calc(30% - 2rem);
  max-width: 280px;
  margin: 1rem;
  display: flex;
  align-self: stretch;
}

.slide-membership-type .panel {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0;
  box-sizing: border-box;

  .panel-body {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
      display: block;
      margin: 0 auto;
    }
  }

  .panel-heading {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0.5rem 0;
  }

  h4 {
    font-weight: 600;
    line-height: 1.25;
    font-size: 14pt;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1.5rem;
  }

  .price-container {
    margin-top: auto;
  }

  .price {
    display: block;
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

  .join-us-button {
    margin: 1rem auto 0.5rem;
  }
}

@media (max-width: 859px) {
  .features {
    flex-direction: column;
    align-items: center !important;
  }

  .slide-membership-type {
    flex: 1 1 100%;
    width: 100%;
    max-width: 400px;
    margin: 1rem 0;
  }
}
</style>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(async () => {
  const ScrollReveal = (await import("scrollreveal")).default;
  ScrollReveal().reveal(".slide-membership-type", {
    delay: 200,
    distance: "20px",
    origin: "bottom",
    duration: 1000,
    scale: 1.0,
    interval: 300,
  });
});
</script>
