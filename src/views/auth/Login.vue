<template>
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-4-desktop is-6-tablet">
              <h2 class="brand-text">Rekognizo</h2>
              <div class="box">
                <label class="label">Email</label>
                <p class="control">
                  <input class="input" type="text" placeholder="hola@correo.org" v-model="form.email">
                </p>
                <label class="label">Contraseña</label>
                <p class="control">
                  <input class="input" type="password" placeholder="●●●●●●●" v-model="form.password">
                </p>
                <hr>
                <p class="control has-text-centered">
                  <button class="button is-primary" @click="login">Conectar</button>
                  <button class="button is-danger" @click="getUser">Usuario</button>
                </p>
              </div>
              <p class="has-text-centered">
                <!-- <a href="register.html">Registra una cuenta</a>
                | -->
                <a href="javascript:void(0)">¿Olvidaste la contraseña?</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
import jwtDecode from 'jwt-decode'
// import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: null,
        password: null
      }
    }
  },
  watch: {
    attr (val, oldVal) {
      //
    }
  },
  methods: {
    login () {
      // var vm = this
      this.$http.post('/api/jwt/login', this.form)
        .then(response => {
          console.log(this.form.email)
          var tokens = response.data
          this.$auth.setTokens(tokens)
          this.axios.defaults.headers.common.Authorization = this.$auth.getAuthorizationHeader()
        })
        .catch(error => {
          console.log(error.response.data)
        })
    },
    getUser () {
      this.$http.get('/api/auth/user')
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error.response.data)
        })
    }
  },
  created () {
    //
  },
  mounted () {
    console.log(API_URL)
    var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJoY2duZWZkUU5nSE5MaVhkZ1ZHNTllNDBjODZhZjBhYjUuNDg1MjkwMzYiLCJpYXQiOjE1MDgxMTc2MzgsIm5iZiI6MTUwODExNzYzOCwiZXhwIjoxNTA4MTIxMjM4LCJ1c2VyX2lkIjoxLCJydGkiOiI1b1c3bmJ0ZXg3ckRRNTllNDBjODZhZTVlOTQuNzY5MDYzODYiLCJydGQiOjEyMDk2MDB9.08vAT_361vE9cVDv0J88AecuUXNoiRuUpfMC6uejTpc'
    console.log(jwtDecode(token))
    // console.log('auth state:', this.$auth.isAuthenticated())
    this.$auth.destroyTokens()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.brand-text {
  font-size: 150%;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  margin-bottom: 10px;
}
</style>
