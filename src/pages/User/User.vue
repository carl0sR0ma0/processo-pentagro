<template>
  <div class="home">
    <h1>Gestão de Usuários</h1>
      <form action="post">
        <div class="form">
          <div class="col-md-4">
            <div class="form-group">
              <label for="userName">Login</label>
              <input for="userName" type="text" class="form-control" placeholder="Informe o nome de usuário">
            </div>
            <div class="form-group">
              <label for="name">Nome Completo</label>
              <input for="name" type="text" class="form-control" placeholder="Informe o nome completo do usuário">
            </div>
            <div class="form-group">
              <label for="UserPassword">Senha</label>
              <input for="UserPassword" type="password" class="form-control" placeholder="Informe a senha do usuário">
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="unitId">Unidade:</label>
              <select name="unitId" id="unitId" class="form-control">
                <option value="4">Pentagro SC</option>
                <option value="3">Pentagro IB</option>
                <option value="2">Pentagro TQ</option>
                <option value="1">Pentagro MG</option>
              </select>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input for="email" type="email" class="form-control" placeholder="Informe o email do usuário">
            </div>
            <div class="form-group">
              <label for="UserPasswordConfirmed">Confirmação da Senha:</label>
              <input for="UserPasswordConfirmed" type="password" class="form-control" placeholder="Informe a senha do usuário">
            </div>
          </div>
        </div>

        <div class="form-group">
          <input type="submit" value="Adicionar Paciente" class="btn btn-success" />
          <a @click="enviar()" class="btn btn-info">Voltar à Lista</a>
        </div>
      </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data: () => ({
    form: {
      unit: ''
    },
    listUnit: []
  }),
  methods: {
    ...mapActions('user', ['ActionGetList']),
    async enviar() {
      try {
        await this.ActionGetList()
      } catch (err) {
        alert(err.body ? err.data.message : err)
      }
    }
  }
}
</script>

<style>
  .form {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
</style>
