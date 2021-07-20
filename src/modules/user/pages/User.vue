<template>
  <div class="home">
    <div class="logo">
      <img class="i-logo" src="../../../assets/logo.png" alt="logo vue">
      <h1>Gestão de Usuários</h1>
    </div>
      <form action="post">
        <div class="form">
          <div class="col-md-4">
            <div class="form-group">
              <label for="userName">Login</label>
              <input for="userName" v-model="form.userName" type="text" class="form-control" placeholder="Informe o nome de usuário">
            </div>
            <div class="form-group">
              <label for="name">Nome Completo</label>
              <input for="name" v-model="form.name" type="text" class="form-control" placeholder="Informe o nome completo do usuário">
            </div>
            <div class="form-group">
              <label for="UserPassword">Senha</label>
              <input for="UserPassword" v-model="form.UserPassword" type="password" class="form-control" placeholder="Informe a senha do usuário">
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="unitId">Unidade:</label>
              <select @click="carregarLista" v-model="form.unitId" class="form-control">
                <option v-for="list in options" :value="list.id">{{list.name}}</option>
              </select>
            </div>
            <div class="form-group">
              <label for="email">Email:</label>
              <input for="email" v-model="form.email" type="email" class="form-control" placeholder="Informe o email do usuário">
            </div>
            <div class="form-group">
              <label for="UserPasswordConfirmed">Confirmação da Senha:</label>
              <input for="UserPasswordConfirmed" type="password" class="form-control" placeholder="Informe a senha do usuário">
            </div>
          </div>
        </div>

        <div class="form-group">
          <input @click="enviarForm()" value="Salvar" class="btn btn-success" />
        </div>
      </form>
  </div>
  
</template>

<script>
import { mapActions } from 'vuex'
import MD5 from 'crypto-js/md5'

export default {
  name: 'Home',
  data: () => ({
    form: {
      userName: '',
      name: '',
      UserPassword: '',
      email: '',
      improveTeamMember: true,
      supervisor: true,
      receiveAutonomousWarning: false,
      loginExpiration: 4,
      disabled: false,
      system: 'G',
      unitId: null
    },
    listUnit: [],
  }),
  methods: {
    ...mapActions('user', ['ActionGetList']),
    async carregarLista() {
      try {
        const dados = await this.ActionGetList()
        this.listUnit = dados.productionUnitList
      } catch (err) {
        alert(err.body ? err.data.message : err)
      }
    },
    ...mapActions('user', ['ActionSendUser']),
    async enviarForm() {
      try {
        this.form.UserPassword = (btoa(JSON.stringify(MD5(this.form.UserPassword).toString())));
        await this.ActionSendUser(this.form)
      } catch (err) {
        alert(err.body ? err.data.message : err)
      }
    }
  },
  computed:{
    options(){
      return Object.keys(this.listUnit).map(k => {
        let o = this.listUnit[k]
        return o
      })
    }
  }
}

</script>

<style lang="scss">
  .home {
    background: rgba(124, 124, 124, 0.658);
    height: 100vh;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .i-logo {
    width: 64px;
    margin-top: 72px;
  }

  .logo h1 {
    margin-top: 70px;
    margin-left: 15px;
  }

  .form {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .btn {
    margin-top: 20px;
    margin-left: 152px;
  }
</style>
