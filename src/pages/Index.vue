<template>
  <q-page>
    <br>
    <q-search
      v-model="searchModel"
      :debounce="600"
      placeholder="Например, «Скалодром»"
      icon="fas fa-search"
      float-label="Начать поиск"
    />
    <br>
    <h1>Sport</h1>
    <h3 class="beta">beta</h3>
  </q-page>
</template>

<style>
  .beta {
    color: darkviolet;
  }
</style>

<script>
export default {
  name: 'PageIndex'
}
</script>
