<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
    <img width="250" src="../../../assets/login/logo.png" alt="Logo da Pentagro">
      <div class="card">
        <h1 class="card-header">Login</h1>
        <div class="card-body">
          <div class="form-group">
            <input
              required
              type="text"
              v-model="form.Username"
              class="form-control"
              placeholder="Login"
            >
          </div>
          <div class="form-group">
            <input
              required
              type="password"
              v-model="form.UserPassword"
              class="form-control"
              placeholder="Senha"
            >
          </div>
          <a @click="submit" class="btn btn-primary w-100">
            Entrar
          </a>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import MD5 from 'crypto-js/md5'

export default {
  data: () => ({
    form: {
      Username: '',
      UserPassword: ''
    }
  }),
  methods: {
    ...mapActions('auth', ['ActionDoLogin']),
    async submit () {
      try {
        this.form.Username = (btoa(JSON.stringify(this.form.Username)));
        this.form.UserPassword = (btoa(JSON.stringify(MD5(this.form.UserPassword).toString())));
        await this.ActionDoLogin(this.form)
        this.$router.push({ name: 'Home' })
      } catch (err) {
        alert(err.data ? err.data.message : 'Não foi possível fazer login')
      }
    }
  }
}
</script>

<style lang="scss">
  .login-page {
    background: rgba(124, 124, 124, 0.658);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .card-header {
      text-align: center;
      color: #009a9b;
      font-size: 24px;
      font-weight: 700;
    }
    .card {
      background-color: rgba(124, 124, 124, 0.13);
      width: 30%;
    }
    input {
      margin-top: 15px;
      color: #009a9b;
    }

    a {
      margin-top: 20px;
      background-color: #009a9b;
    }

    a:hover {
      background-color: #0c4e4e;
      color: white
    }
  }
  img {
    margin-bottom: 30px;
  }
</style>
