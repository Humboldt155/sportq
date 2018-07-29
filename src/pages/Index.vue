<template>
  <q-page>
    <br>
    <q-search
      label="Начать поиск"
      color="secondary"
      clearable
      v-model="searchModel"
      :debounce="600"
      placeholder="Например, «Скалодром»"
      icon="fas fa-search"
    >
      <q-popover no-focus="true">
          <div class="group" style="width: 100%; text-align: center;">
            Показать результаты:
            <br>
              <q-btn outline color="teal" label="Все" @click="clickHandler1"></q-btn>
              <q-btn outline color="teal" label="Площадки" @click="clickHandler2"></q-btn>
              <q-btn outline color="teal" label="Тренеры" @click="clickHandler3"></q-btn>
              <q-btn outline color="teal" label="Аренда" @click="clickHandler3"></q-btn>
              <q-btn outline color="teal" label="Школы" @click="clickHandler3"></q-btn>
            <br>
            <br>
          </div>
        </q-popover>
    </q-search>
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
  name: 'PageIndex',
  data () {
    return {
      searchModel: ''
    }
  }
}
</script>
