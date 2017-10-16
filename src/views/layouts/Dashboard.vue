<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
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
    //
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
