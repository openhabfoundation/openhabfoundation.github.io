<script>
export default {
  name: "BoardMember",
  props: ['name', 'role', 'imgSrc', 'text'],
}
</script>

<template>
  <div class="feature board-member">
    <img class="img-responsive" :src="imgSrc" alt="">
    <div class="caption">
      <h3>{{ name }}<br>
        <small>{{ role }}</small>
      </h3>
      <p>{{ text }}</p>
      <slot />
    </div>
  </div>
</template>

<style scoped lang="stylus">
.board-member
  margin 0 20px 40px 20px
  display flex
  flex-direction column
  align-items center
  justify-content center
  text-align center
@media (min-width 860px)
  .board-member
    max-width calc(33% - 40px)
</style>
