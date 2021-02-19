<template>
  <div class="filter-list">
    <ul class="filter-list__list">
      <li class="filter-list__item">
        <p class="filter-list__item-title">Сортировка</p>
        <div class="filter-list__item-btns">
          <FilterBtn btnText="ID"  @click="this.getUsersById"></FilterBtn>
          <FilterBtn btnText="Имя" @click="this.getUsersByName"></FilterBtn>
          <FilterBtn btnText="Возраст" @click="this.getUsersByAge"></FilterBtn>
        </div>
        <div class="filter-list__item-btns">
          <FilterBtn btnText="По возрастанию" @click="getReverseUsers('up')"></FilterBtn>
          <FilterBtn btnText="По убыванию" @click="getReverseUsers('down')"></FilterBtn>
        </div>
      </li>
      <li class="filter-list__item">
        <p class="filter-list__item-title">Вид</p>
        <div class="filter-list__item-btns">
          <FilterBtn btnText="Таблица"></FilterBtn>
          <FilterBtn btnText="Превью"></FilterBtn>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import FilterBtn from './FilterBtn'
import { mapActions } from 'vuex'
export default {
  components: {
    FilterBtn
  },
  methods: {
    ...mapActions(['getUsersByAge', 'getUsersById', 'getUsersByName', 'getReverseUsers'])
  }
}
</script>

<style lang="scss">
  .filter-list {
    margin-bottom: 30px;
  }
  .filter-list__list {
    display: flex;
    justify-content: space-between;
  }
</style>
