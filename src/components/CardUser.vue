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
      <button class="card-user__favourite"></button>
    </div>
    <!-- Если есть видео, здесь -->

  </article>
</template>

<script>
export default {
  props: ['user'],
  created () {
    // console.log(this.$props)
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
    background-color: #ccc;
  }
  .card-user__avatar-wrap {
    margin-right: 15px;
  }
  .card-user__name {
    font-size: 16px;
    line-height: 22px;
    color: #333;
  }
  .card-user__age {
    margin-right: auto;
  }
</style>
