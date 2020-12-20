<template>
  <div>
    <ul class="filter-list">
      <li class="filter-list__item">
        <p class="filter-list__item-title">Сортировка</p>
        <div class="filter-list__item-btns">
          <FilterBtn btnText="ID"></FilterBtn>
          <FilterBtn btnText="Имя"></FilterBtn>
          <button @click="this.getUsersByAge">Возраст</button>
          <!-- <FilterBtn @click="this.getUsersByAge" btnText="Возраст"></FilterBtn> -->
        </div>
        <div class="filter-list__item-btns">
          <FilterBtn btnText="По возрастанию"></FilterBtn>
          <FilterBtn btnText="По убыванию"></FilterBtn>
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
    ...mapActions(['getUsersByAge'])
  }
}
</script>
