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
        <div class="filter-list__item-btns filter-list__item-btns--full">
          <FilterBtn btnText="Таблица" @click="getChangeView('table')"></FilterBtn>
          <FilterBtn btnText="Превью" @click="getChangeView('preview')"></FilterBtn>
        </div>
      </li>
      <li class="filter-list__item filter-list__item--full">
        <p class="filter-list__item-title">Поиск</p>
        <Input placeholder="Поиск" :value="test" v-model="test" />
        {{ test }}
      </li>
    </ul>
  </div>
</template>

<script>
import FilterBtn from './FilterBtn'
import Input from './Input'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      test: ''
    }
  },
  components: {
    FilterBtn, Input
  },
  methods: {
    ...mapActions(['getUsersByAge', 'getUsersById', 'getUsersByName', 'getReverseUsers', 'getChangeView'])
    // setParent (e) {
    //   this.$emit('setParent', e.target.value)
    // }
  }
}
</script>

<style lang="scss">
  .filter-list {
    margin-bottom: 30px;
  }
  .filter-list__list {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
  }
  .filter-list__item {
    display: flex;
    flex-direction: column;
    margin-right: 25px;
    flex-grow: 1;
    &:last-child {
      margin-right: 0;
    }
  }
  .filter-list__item--full {
    width: 100%;
  }
  .filter-list__item-btns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 10px;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .filter-list__item-btns--full {
    height: 100%;
  }
  @media (max-width: 768px) {
    .filter-list__list {
      display: block;
    }
    .filter-list__item {
      margin-right: 0;
      margin-bottom: 10px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .filter-list__item-btns {
      grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    }
  }
</style>
