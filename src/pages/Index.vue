<template>
  <q-page>
    Главная страница
    <br>
    Поиск
    <br>
    Новые площадки для "Сноуборд"
    <br>
    Тренеры
    <br>
  </q-page>
</template>

<style>
  .beta {
    color: darkviolet;
  }
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      searchModel: ''
    }
  }
}
</script>
