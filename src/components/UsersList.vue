<template>
  <div>
    <div class="user-list" >
      <CardUser class="user-list__item" v-for="obj in allUsers" :key="obj.id" :user="obj"></CardUser>
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
    ...mapGetters(['allUsers', 'currentPreview'])
  },
  components: {
    CardUser
  }
}
</script>

<style lang="scss">
  .user-list {
    border: 1px solid var(--brandColor4);
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.24);
  }
  .user-list__item {
    border-bottom: 1px solid var(--brandColor4);
    &:last-child {
      border-bottom: 0;
    }
  }
</style>
