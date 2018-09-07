<template>
  <div class="member-logos">
    <router-link :to="page.path" v-for="page in $site.pages.filter((p) => p.frontmatter.layout === 'MemberPage')" :key="page.path" class="logo-container">
      <img :src="'/logos/' + page.frontmatter.logo" :title="page.title" class="member-logo" />
    </router-link>
  </div>
</template>

<style lang="stylus">
.member-logos {
  padding: 0 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .logo-container {
    width: 180px;
    height: 200px;
    padding: 10px;
    display: flex;

    .member-logo {
      margin: auto;
      max-height: 120px;
      max-width: 120px;
      object-fit: contain;
    }
  }

  @media (max-width: 768px) {
    & {
      padding: 0;

      .logo-container {
        width: 90px;
        height: 100px;
        padding: 10px;

        .member-logo {
          max-height: 90px;
          max-width: 90px;
        }
      }
    }
  }
}
</style>

<script>
export default {
  mounted() {
    if (this.$sr) {
      const sr = this.$sr
      sr.reveal('.member-logo', {})
    }
  }
}
</script>

