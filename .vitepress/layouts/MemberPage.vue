<script setup lang="ts">
import { useData, withBase } from "vitepress";

const { page, frontmatter } = useData();

const formatPhone = (phone: string) => {
  return phone ? phone.replace(/ /g, "").replace(/-/g, "") : "";
};
</script>

<template>
  <div class="vp-doc member-page-container">
    <a :href="withBase('/members/')" class="back-link">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="icon"
      >
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      &nbsp; Members
    </a>

    <div class="member-page-content">
      <aside class="member-details">
        <h1 class="member-name-mobile">{{ page.title }}</h1>

        <img
          v-if="frontmatter.logo"
          class="member-logo"
          :src="withBase('/images/members/' + frontmatter.logo)"
          :alt="frontmatter.title"
        />

        <div class="member-contact">
          <ul>
            <li v-if="frontmatter.address1">
              <address>{{ frontmatter.address1 }}</address>
            </li>
            <li v-if="frontmatter.address2">
              <address>{{ frontmatter.address2 }}</address>
            </li>
            <li v-if="frontmatter.address3">
              <address>{{ frontmatter.address3 }}</address>
            </li>
            <li v-if="frontmatter.address4">
              <address>{{ frontmatter.address4 }}</address>
            </li>
            <li v-if="frontmatter.city">
              <address>{{ frontmatter.city }}</address>
            </li>
            <li v-if="frontmatter.country">
              <address>{{ frontmatter.country }}</address>
            </li>

            <li v-if="frontmatter.phone">
              <a :href="'tel:' + formatPhone(frontmatter.phone)">{{ frontmatter.phone }}</a>
            </li>

            <li v-if="frontmatter.email">
              <a :href="'mailto:' + frontmatter.email">{{ frontmatter.email }}</a>
            </li>

            <li v-if="frontmatter.web">
              <a :href="frontmatter.web" target="_blank" rel="noopener">{{ frontmatter.web }}</a>
            </li>

            <li v-if="frontmatter.twitter">
              Twitter:
              <a :href="'https://twitter.com/' + frontmatter.twitter" target="_blank" rel="noopener"
                >@{{ frontmatter.twitter }}</a
              >
            </li>

            <li v-if="frontmatter.github">
              GitHub:
              <a
                :href="'https://github.com/' + frontmatter.github"
                target="_blank"
                rel="noopener"
                >{{ frontmatter.github }}</a
              >
            </li>
          </ul>
        </div>
        <hr class="mobile-separator" />
      </aside>

      <div class="member-content">
        <h1 class="member-name">{{ page.title }}</h1>
        <Content class="vp-doc" />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Page Container, mimics Vuepress doc layout */
.member-page-container {
  max-width: 1152px;
  margin: 0 auto;
  padding: 20px;
}

/* Back Link */
.back-link {
  margin-bottom: 1rem;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
}

/* Page Content */
.member-page-content {
  display: flex;
  flex-direction: column;
}

.member-content {
  min-width: 0;
  width: 100%;
}

.member-details {
  width: 100%;
}

.member-logo {
  background-color: white;
  padding: 0.5rem;
  width: 240px;
  max-width: 100%; /* Safety for mobile */
  object-fit: contain;
}

.member-contact ul {
  line-height: 1.5;
  list-style: none;
  padding-left: 0;
}

/* Desktop Styles */
@media (min-width: 720px) {
  .member-page-content {
    flex-direction: row-reverse;
  }

  aside.member-details {
    margin-left: 4rem;
    min-height: 60vh;
    border-left: 1px solid #ddd;
    padding-left: 1rem;
    max-width: 300px;
  }

  .member-name {
    text-align: left;
    display: block;
  }

  .member-name-mobile {
    display: none;
  }

  .mobile-separator {
    display: none;
  }
}

/* Mobile Styles */
@media (max-width: 719px) {
  .member-page-content {
    flex-direction: column;
  }

  .member-details {
    padding-top: 0.5rem;
    margin-bottom: 0;
  }

  .member-name-mobile {
    text-align: left;
    display: block;
    font-size: 1.8rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  .member-name {
    display: none;
  }

  .member-logo {
    margin-bottom: 1rem;
  }

  .mobile-separator {
    display: block;
    margin: 1rem 0 0.5rem 0;
    border: 0;
    border-top: 1px solid var(--vp-c-divider);
  }
}
</style>
