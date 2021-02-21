<template>
  <article class="card-user" :class="{ 'card-user--preview': currentPreview, 'card-user--video': user.video && currentPreview}">
    <div class="card-user__wrapper">
      <div class="card-user__name-ava">
        <div class="card-user__avatar-wrap">
          <img :src="require(`../assets/images/${user.image}.svg`)" :alt="user.name" class="card-user__avatar">
        </div>
        <p class="card-user__name">{{ user.name }}</p>
      </div>
      <p class="card-user__age"><span>{{ user.age }}</span>лет</p>
      <p class="card-user__phone"><a href="tel:+">{{ user.phone }}</a></p>
      <p class="card-user__phrase" v-show="currentPreview">{{ user.phrase }}</p>
      <button @click="addToFavourite(user.id)" class="card-user__favourite" :class="{ 'card-user__favourite--active': user.favourite }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="25" height="25">
          <path d="M512 197.816l-186.039-12.231L255.898 9.569l-70.063 176.016L0 197.816l142.534 121.026-46.772 183.589L255.898 401.21l160.137 101.221-46.772-183.589z" xmlns="http://www.w3.org/2000/svg"/>
        </svg>
      </button>
    </div>
    <div class="card-user__video-wrap" v-if="user.video && currentPreview">
      <video class="card-user__video" width="100%" :src="require(`../assets/videos/${user.video}.mp4`)" controls preload="none"></video>
    </div>

  </article>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['user'],
  created () {
    // console.log(this.$props)
  },
  computed: {
    ...mapGetters(['allUsers', 'currentPreview'])
  },
  methods: {
    addToFavourite (id) {
      const user = this.allUsers.find(item => item.id === id)
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

<style lang="scss" scope>
  .card-user__wrapper,
  .card-user__name-ava {
    display: flex;
    align-items: center;

  }
  .card-user__wrapper {
    // padding-top: 10px;
    // padding-bottom: 10px;
    padding: 10px;
  }
  .card-user__name-ava {
    min-width: 250px;
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
    margin-left: auto;
    margin-right: auto;
  }
  .card-user__favourite {
    width: 25px;
    height: 25px;
    cursor: pointer;
    path {
      fill: var(--brandColor4);
      transition: all 0.3s ease-out;
    }
  }
  .card-user__favourite--active,
  .card-user__favourite:hover {
    path {
      fill: var(--brandColor2);
    }
  }
  .card-user__phone {
    font-size: 16px;
    line-height: 22px;
    color: var(--brandColor2);
    margin-right: 30px;
    a {
      color: var(--brandColor2);
      text-decoration: none;
    }
  }
  .card-user--preview {
    width: 50%;
    .card-user__wrapper {
      flex-direction: column;
      align-items: flex-start;
      position: relative;
    }
    .card-user__favourite {
      position: absolute;
      top: 15px;
      right: 15px;
    }
    .card-user__age,
    .card-user__phone {
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
  .card-user--video {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
</style>
