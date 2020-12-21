<template>
  <button class="btn">
    {{ btnText }}
  </button>
</template>

<script>

export default {
  props: {
    btnText: String,
    method: String
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
