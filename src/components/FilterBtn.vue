<template>
  <button class="btn" v-on="$listeners">
    {{ btnText }}
  </button>
</template>

<script>

export default {
  props: {
    btnText: String,
    method: Function
  }
}
</script>

<style lang="scss">
  .btn {
    padding: 7px 15px;
    background-color: var(--brandColor);
    color: var(--brandColor3);
  }
</style>
