<template>
  <div id="app">
    <div class="user-list" v-for="obj in myJson" :key="obj.id">
      <CardUser :user="obj"></CardUser>
    </div>
  </div>
</template>

<script>
import json from './assets/data.json'
import CardUser from './components/CardUser'

export default {
  data () {
    return {
      myJson: json
    }
  },
  name: 'App',
  created () {
    console.log('myJson', this.myJson)
  },
  mounted () {

  },
  components: {
    CardUser
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 700px;
  margin: 0 auto;
}
</style>
