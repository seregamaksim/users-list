<template>
  <article class="card-user">
    <div class="card-user__wrapper">
      <div class="card-user__name-ava">
        <div class="card-user__avatar-wrap">
          <img :src="require(`../assets/images/${user.image}.svg`)" :alt="user.name" class="card-user__avatar">
        </div>
        <p class="card-user__name">{{ user.name }}</p>
      </div>
      <p class="card-user__age"><span>{{ user.age }}</span>лет</p>
      <p class="card-user__phone"><a href="tel:+">{{ user.phone }}</a></p>
      <button @click="addToFavourite(user.id)" class="card-user__favourite" :class="{ 'card-user__favourite--active': user.favourite }">
        <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
          <path d="M512 197.816l-186.039-12.231L255.898 9.569l-70.063 176.016L0 197.816l142.534 121.026-46.772 183.589L255.898 401.21l160.137 101.221-46.772-183.589z" xmlns="http://www.w3.org/2000/svg"/>
        </svg>
      </button>
    </div>
    <!-- Если есть видео, здесь -->

  </article>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: ['user'],
  created () {
    // console.log(this.$props)
  },
  computed: {
    ...mapState(['users'])
  },
  methods: {
    addToFavourite (id) {
      const user = this.users.find(item => item.id === id)
      if (user.favourite) {
        user.favourite = false
      } else {
        user.favourite = true
      }
      console.log('user', user)
      console.log('id', id)
    }
  }
}
</script>

<style lang="scss">
  .card-user__wrapper,
  .card-user__name-ava {
    display: flex;
    align-items: center;

  }
  .card-user__name-ava {
    min-width: 300px;
  }
  .card-user__avatar-wrap {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
    background-color: var(--brandColor4);
  }
  .card-user__avatar-wrap {
    margin-right: 15px;
  }
  .card-user__name {
    font-size: 16px;
    line-height: 22px;
    color: var(--brandColor2);
  }
  .card-user__age {
    margin-right: auto;
  }
  .card-user__favourite--active {
    path {
      fill: var(--brandColor);
    }
  }
</style>
