<template>

  <!-- Content Row -->
  <div>

    <div class="content" style="min-height: 80vh">
      ← <router-link to="/members/">Members</router-link>

      <aside class="member-details">
        <h1 class="member-name-mobile">{{ $page.title }}</h1>
        <!-- Preview Image -->
        <img v-if="$page.frontmatter.logo" class="member-logo" :src="'/logos/' + $page.frontmatter.logo" :alt="$page.frontmatter.name">

        <div class="member-contact">
          <ul>
            <li v-if="$page.frontmatter.address1"><address>{{ $page.frontmatter.address1 }}</address></li>
            <li v-if="$page.frontmatter.address2"><address>{{ $page.frontmatter.address2 }}</address></li>
            <li v-if="$page.frontmatter.address2"><address>{{ $page.frontmatter.address3 }}</address></li>
            <li v-if="$page.frontmatter.address4"><address>{{ $page.frontmatter.address4 }}</address></li>
            <li v-if="$page.frontmatter.city"><address>{{ $page.frontmatter.city }}</address></li>
            <li v-if="$page.frontmatter.country"><address>{{ $page.frontmatter.country }}</address></li>

            <li v-if="$page.frontmatter.phone"><a :href="'tel:' + $page.frontmatter.phone.replace(/ /g, '').replace(/-/g, '')">{{ $page.frontmatter.phone }}</a></li>
            <li v-if="$page.frontmatter.email"><a :href="'mailto:' + $page.frontmatter.email">{{ $page.frontmatter.email }}</a></li>
            <li v-if="$page.frontmatter.web"><a :href="$page.frontmatter.web">{{ $page.frontmatter.web }}</a></li>
            <li v-if="$page.frontmatter.twitter">Twitter: <a :href="'https://twitter.com/' + $page.frontmatter.twitter">@{{ $page.frontmatter.twitter }}</a></li>
            <li v-if="$page.frontmatter.github">GitHub: <a :href="'https://github.com/' + $page.frontmatter.github">{{ $page.frontmatter.github }}</a></li>
          </ul>
        </div>
        <hr class="mobile-separator" />
      </aside>

      <h1 class="member-name">{{ $page.title }}</h1>

      <Content></Content>
    </div>

    <Footer />
  </div>
</template>

<style lang="stylus">
@media (min-width: 720px)
  aside.member-details
    float right
    margin-top 3rem
    margin-left 4rem
    min-height 70vh
    border-left 1px solid #ddd
    padding-left 1rem
  .member-name
    font-family 'Open Sans', sans-serif
    width calc(100% - 400px)
  .member-name-mobile
    display none
  .mobile-separator
    display none

@media (max-width: 719px)
  .member-details
    padding-top 1rem
  .member-name-mobile
    font-family 'Open Sans', sans-serif
    display inherit
  .member-name
    display none

.member-logo
  width 240px

.member-contact
  ul
    list-style none
    padding-left 0
</style>
