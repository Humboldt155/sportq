<template>
    <q-page>
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
    </q-page>
</template>

<script>
export default {
  name: 'searchAll'
}
</script>

<style scoped>

</style>
