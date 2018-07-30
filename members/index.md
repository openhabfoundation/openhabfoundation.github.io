---
title: Organization Members
---

<h2 class="big-title">Organization Members</h2>

[Join the Foundation](/join/) and help us make a difference!
<br />
<br />
<hr />
<br />


<ul class="member-list">
<li v-for="page in $site.pages.filter((p) => p.frontmatter.layout === 'MemberPage')" class="member">
    <a :href="page.frontmatter.link" target="_blank" class="member-link"><img class="member-image" :src="'/logos/' + page.frontmatter.logo" /></a>
    <div class="member-info">
    <router-link :to="page.path"><h3 class="member-title">{{page.title}}</h3></router-link>
    <p v-html="page.excerpt"></p>
    </div>
</li>
</ul>

<style lang="stylus">
.member-list
  list-style none
  .member
    clear both
    display flex
    margin-bottom 2rem
    .member-link
      display flex
      height 8rem
      width 128px
      margin-right 2rem
    .member-image
      max-height 8em
      max-width 8em
      margin-left 1rem
      margin-right 1rem
      object-fit contain
    .member-info
      margin-left 1rem
      .member-title
        margin-bottom 0
        font-family 'Open Sans', sans-serif
      .member-location
        font-family 'Open Sans', sans-serif
        font-weight bold

@media (max-width 719px)
  .member
    flex-wrap wrap
</style>
