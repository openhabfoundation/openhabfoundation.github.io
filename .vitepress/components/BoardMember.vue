<script setup lang="ts">
import { withBase } from "vitepress";

defineProps<{
  name: string;
  role: string;
  imgSrc: string;
  text: string;
}>();
</script>

<template>
  <div class="board-member">
    <img class="img-responsive" :src="withBase(imgSrc)" alt="" />
    <div class="caption">
      <h3>
        {{ name }}<br />
        <small>{{ role }}</small>
      </h3>
      <p>{{ text }}</p>
      <div class="social-icons">
        <slot />
      </div>
    </div>
  </div>
</template>

<style>
.board-member {
  margin: 0 20px 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  .social-icons {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.board-member {
  max-width: 300px;
  @media (min-width: 640px) {
    max-width: calc(50% - 40px);
  }
  @media (min-width: 860px) {
    max-width: calc(33% - 40px);
  }
}
</style>
