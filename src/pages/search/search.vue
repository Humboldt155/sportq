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
            <div class="group" style="width: 100%">
              Показать результаты:
              <br>
                <q-btn outline color="teal" label="Все" ></q-btn>
                <q-btn outline color="teal" label="Площадки" ></q-btn>
                <q-btn outline color="teal" label="Тренеры" ></q-btn>
                <q-btn outline color="teal" label="Аренда" ></q-btn>
                <q-btn outline color="teal" label="Школы" ></q-btn>
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
