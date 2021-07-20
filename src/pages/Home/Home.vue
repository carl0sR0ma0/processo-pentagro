<template>
  <div class="home">
    <a class="btn btn-primary" @click="nav">Cadastrar usuario</a>
  </div>
</template>

<script>
export default {
  data: () => ({
  }),
  methods: {
    nav() {
      this.$router.push({ name: 'user' })
    }
  }
}
</script>
<style>
  .home {
    background: rgba(124, 124, 124, 0.658);
    height: 100vh;
  }
</style>