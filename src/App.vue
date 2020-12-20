<template>
  <div id="app">
    <svg style="display:none;">
      <symbol id="icon-star" viewBox="0 0 512 512">
          <polygon points="512,197.816 325.961,185.585 255.898,9.569 185.835,185.585 0,197.816 142.534,318.842 95.762,502.431 255.898,401.21 416.035,502.431 369.263,318.842" fill="#ccc" style="fill: var(--brandColor4)" data-original="#000000"/>
      </symbol>
    </svg>
    <UsersList></UsersList>
  </div>
</template>

<script>
import json from './assets/data.json'
import UsersList from './components/UsersList'

export default {
  data () {
    return {
      myJson: json
    }
  },
  name: 'App',
  created () {
    // console.log('myJson', this.myJson)
  },
  mounted () {

  },
  components: {
    UsersList
  }
}
</script>

<style lang="scss">
:root {
  --brandColor: #507DBC;
  --brandColor2: #04080F;
  --brandColor3: #FFFBFE;
  --brandColor4: #D0CFCF;
}
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
