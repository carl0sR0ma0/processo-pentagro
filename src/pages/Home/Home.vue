<template>
  <div>
    <a @click="nav">Cadastrar usuario</a>
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