<template>
  <div class="member-logos">
    <a
      v-for="member in members"
      :key="member.url"
      :href="withBase(member.url)"
      class="logo-container"
    >
      <img
        :src="withBase('/images/members/' + member.logo)"
        :title="member.title"
        :alt="member.title"
        class="member-logo"
      />
    </a>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { withBase } from 'vitepress'
import { data as members } from '../loaders/members.data.mts'

const srRef = ref<any>(null)

onMounted(async () => {
  const ScrollReveal = (await import('scrollreveal')).default
  const sr = ScrollReveal()
  srRef.value = sr
  sr.reveal('.member-logo', {})
})

onUnmounted(() => {
  if (srRef.value) {
    srRef.value.clean('.member-logo')
  }
})
</script>

<style lang="stylus">
.member-logos {
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25rem;

  .logo-container {
    width: 180px;
    height: 140px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    border-radius: var(--border-radius-md, 8px);
    box-sizing: border-box;

    .member-logo {
      margin: auto;
      max-height: 110px;
      max-width: 150px;
      object-fit: contain;
    }
  }

  @media (max-width: 768px) {
    & {
      padding: 0;
      gap: 0.75rem;

      .logo-container {
        width: calc(33.333% - 0.5rem);
        height: 110px;
        padding: 10px;
        background-color: #ffffff;
        border-radius: var(--border-radius-sm, 4px);
        box-sizing: border-box;

        .member-logo {
          max-height: 85px;
          max-width: 85px;
        }
      }
    }
  }
}
</style>


