<template>
  <footer>
    <a href="#app"
      ><img
        :src="withBase(isDark ? '/openhab-logo-square-dark.svg' : '/openhab-logo-square.svg')"
        class="footer-logo"
    /></a>
    <div class="legal">
      <span class="copyright"
        >Copyright © {{ year }} by the openHAB Community and the openHAB Foundation e.V.</span
      >
      <br />
      <span class="legal-links"
        ><a href="/privacy">Privacy policy</a> | <a href="/imprint">Imprint</a></span
      >
    </div>
  </footer>
</template>

<style lang="stylus">
footer
  display flex
  flex-direction column
  align-items  center
  border-top 1px solid var(--vp-c-border)
  padding 2rem
  text-align center

  .footer-logo
    width 70px
    height 70px
    filter grayscale(100%)
    opacity 0.4
  .legal
    margin-top .5rem
    font-size 10pt
    color var(--vp-c-text-3)
    a
      color var(--vp-c-text-2)

@media print
  footer
    background-color transparent
    .footer-nav
      display none
    .legal-links
      display none
    .footer-logo
      display none
</style>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import { useData, withBase } from "vitepress";

const { isDark } = useData();
const srRef = ref<any>(null);
const year = new Date().getFullYear();

onMounted(async () => {
  const ScrollReveal = (await import("scrollreveal")).default;
  const sr = ScrollReveal();
  srRef.value = sr;
  sr.reveal(".footer-logo", { scale: 0.5 });
  sr.reveal(".legal", { scale: 1.0 });
  sr.reveal(".social-icons", { duration: 1000 });
});

onUnmounted(() => {
  if (srRef.value) {
    srRef.value.clean(".footer-logo");
    srRef.value.clean(".legal");
    srRef.value.clean(".social-icons");
  }
});
</script>
