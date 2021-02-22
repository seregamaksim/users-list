<template>
  <div>
    <div class="user-list" :class="currentPreview ? 'user-list--preview' : ''">
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
      // users: ''
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
    // border: 1px solid var(--brandColor4);
    box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.24);
  }
  .user-list--preview {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row dense;
    gap: 10px;
    .user-list__item {
      border-bottom: 1px solid var(--brandColor4);
    }
  }
  .user-list__item {
    border: 1px solid var(--brandColor4);
    border-bottom: 0;
    &:last-child {
      border-bottom: 0;
    }
  }
  @media (max-width: 600px) {
    .user-list--preview {
      display: block;
      gap: 0;
    }
    .user-list__item {
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
</style>
