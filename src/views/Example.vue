<template>
  <div>
    <p>login</p>
  </div>
</template>

<script>
export default {
  name: 'Example',
  props: {
    example: {
      type: String,
      required: true
    }
  },
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
