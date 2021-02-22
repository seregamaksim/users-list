<template>
  <input class="input" type="text" name="search" :value="value" v-on:input="$emit('input', $event.target.value)" :placeholder="placeholder">
</template>

<script>
export default {
  props: ['placeholder', 'value']
}
</script>

<style lang="scss">
  .input {
    width: 100%;
    appearance: none;
    border-radius: 5px;
    border: 1px solid var(--brandColor4);
    padding: 10px;
  }
</style>
