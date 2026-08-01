<script setup lang="js">
import { data as members } from "../loaders/members.data.mts";
import { withBase } from "vitepress";
import { onMounted } from "vue";

onMounted(async () => {
  const ScrollReveal = (await import("scrollreveal")).default;
  ScrollReveal().reveal(".member", {
    delay: 100,
    distance: "20px",
    origin: "bottom",
    duration: 500,
    scale: 1.0,
    interval: 150,
  });
});
</script>

<template>
  <ul class="member-list">
    <li v-for="page in members" :key="page.url" class="member">
      <a :href="page.link" target="_blank" class="member-link">
        <img
          class="member-image"
          :src="withBase('/images/members/' + page.logo)"
          :alt="page.title"
        />
      </a>

      <div class="member-info">
        <a :href="withBase(page.url)">
          <h3 class="member-title">{{ page.title }}</h3>
        </a>

        <div v-if="page.excerpt" v-html="page.excerpt"></div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.member-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.member {
  clear: both;
  display: flex;
  margin-bottom: 2.5rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid var(--vp-c-divider);
  align-items: flex-start;
}

.member:last-child {
  border-bottom: none;
  margin-bottom: 1.5rem;
}

.member-link {
  display: flex;
  height: 8rem;
  width: 8rem;
  flex-shrink: 0; /* Prevents shrinking on small screens */
  margin-right: 2rem;
  align-items: center;
  justify-content: center;
  background-color: white;
}

.member-image {
  padding: 0.5rem;
  max-height: 8em;
  max-width: 8em;
  object-fit: contain;
}

.member-info {
  margin-left: 1rem;
}

.member-title {
  margin-top: 0;
  margin-bottom: 0.5rem;
}

@media (max-width: 719px) {
  .member {
    flex-wrap: wrap;
  }

  .member-link {
    margin-right: 0;
    margin-bottom: 1rem;
    width: 100%;
  }
}
</style>
