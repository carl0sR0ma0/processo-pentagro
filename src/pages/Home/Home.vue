<template>
  <div>
    <a @click="nav">Cadastrar usuario</a>
    <h1>Ola mardita</h1>
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