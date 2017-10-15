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
                  <input class="input" type="text" placeholder="hola@correo.org">
                </p>
                <label class="label">Contraseña</label>
                <p class="control">
                  <input class="input" type="password" placeholder="●●●●●●●">
                </p>
                <hr>
                <p class="control has-text-centered">
                  <button class="button is-primary">Conectar</button>
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
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Example'
    }
  },
  watch: {
    attr (val, oldVal) {
      //
    }
  },
  methods: {
    func () {
      //
    }
  },
  created () {
    //
  },
  mounted () {
    console.log('auth state:', this.$auth.isAuthenticated())
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
