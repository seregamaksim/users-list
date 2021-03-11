<template>
  <div id="app">
    <FilterTab ></FilterTab>
    <div class="filter-list__item filter-list__item--full">
      <p class="filter-list__item-title">Поиск</p>
      <!-- <Input placeholder="Поиск" :value="test" v-model="test" /> -->
      <input class="input" type="text" name="search" @input="filteredUsers($event.target.value)" v-model="test" placeholder="Поиск">
      <!-- <input class="input" type="text" name="search" v-model="test" placeholder="Поиск"> -->
      <code>{{ test }}</code>
    </div>
    <UsersList></UsersList>
  </div>
</template>

<script>
import UsersList from './components/UsersList'
import FilterTab from './components/FilterTab'
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      test: ''
      // testText: this.filteredUsers(this.test)
    }
  },
  name: 'App',
  methods: {
    ...mapActions(['getFilteredUsers'])
  },
  computed: {
    ...mapGetters(['allUsers', 'filteredUsers'])
  },
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
