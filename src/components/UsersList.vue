<template>
  <div>
    <div class="user-list" v-for="obj in allUsers" :key="obj.id">
      <CardUser :user="obj"></CardUser>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import CardUser from './CardUser'

export default {
  data () {
    return {
      // myJson: this.getUsers()
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    ...mapActions(['getUsers'])
  },
  computed: {
    ...mapGetters(['allUsers'])
  },
  components: {
    CardUser
  }
}
</script>
