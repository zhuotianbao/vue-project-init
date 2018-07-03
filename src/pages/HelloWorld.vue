<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>username：{{ username }}</h1>
    <h1>age：{{ age }}</h1>
    <!-- <loading></loading> -->
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: '',
      age: ''
    }
  },
  computed: {
    ...mapState({
      userinfo: state => state.userInfo.userinfo
    })
  },
  mounted () {
    this.getUserInfo().then(res => {
      this.username = res.data.name
      this.age = res.data.age
    })
    this.getcity()
  },
  methods: {
    ...mapActions([
      'getUserInfo',
      'getcity'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
