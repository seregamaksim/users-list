<template>
  <div id="app">
    <FilterTab ></FilterTab>
    <UsersList></UsersList>
  </div>
</template>

<script>
import UsersList from './components/UsersList'
import FilterTab from './components/FilterTab'

export default {
  data () {
    return {
      // myJson: json
    }
  },
  name: 'App',
  components: {
    UsersList, FilterTab
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
  margin-top: 60px;
  max-width: 85vw;
  margin: 0 auto;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
button {
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
}

img ,video {
  display: block;
  max-width: 100%;
  height: auto;
}

</style>
