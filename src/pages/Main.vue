<template>
    <q-page padding>
      <q-card>
        <q-card-title>
          Поиск
        </q-card-title>
        <q-card-main>

          <q-search
            clearable
            v-model="searchModel"
            color="primary"
            icon="fas fa-search"
            float-label="Вид спорта"
            placeholder="Например, «Воркаут»">
            <q-autocomplete
              :static-data="{field: 'value', list: SearchSportsList}"
              :min-characters="1"
              @selected="selected"
            />
          </q-search>
          <br>
          <!--разбить на опции-->
          <q-btn-toggle
            size="sm"
            v-model="searchObject"
            toggle-color="primary"
            :options="[{label: 'Все', value: 'Все результаты'}]"
          />
          <q-btn-toggle
            size="sm"
            v-model="searchObject"
            toggle-color="primary"
            :options="[{label: 'Тренеры', value: 'Тренеров'}]"
          />
          <q-btn-toggle
            size="sm"
            v-model="searchObject"
            toggle-color="primary"
            :options="[{label: 'Клубы', value: 'Школы и Клубы'}]"
          />
          <q-btn-toggle
            size="sm"
            v-model="searchObject"
            toggle-color="primary"
            :options="[{label: 'Площадки', value: 'Открытые площадки'}]"
          />
          <q-btn-toggle
            size="sm"
            v-model="searchObject"
            toggle-color="primary"
            :options="[{label: 'Аренда', value: 'Аренду снаряжения'}]"
          />
          <q-btn-toggle
            size="sm"
            v-model="searchObject"
            toggle-color="primary"
            :options="[{label: 'События', value: 'События'}]"
          />
        <br>
        <br>
        <q-search
            clearable
            icon="fas fa-map-marker-alt"
            v-model="place"
            color="primary"
            float-label="Где"
            placeholder="Страна, Населенный пункт или Место">
            <q-autocomplete
              :static-data="{field: 'value', list: placeOptions}"
              :min-characters="1"
              @selected="place"
            />
          </q-search>
        <br>
        <q-btn>
          Найти {{ searchObject }} по {{ searchModel }} в {{ place }}
        </q-btn>
        </q-card-main>
      </q-card>
    </q-page>
</template>

<script>
export default {
  name: 'searchAll',
  data () {
    return {
      // Property name that will be used by filter() to filter the array of objects below.
      selected: '',
      searchModel: '',
      place: '',
      searchObject: 'Все результаты',
      placeOptions: [{ label: 'Москва', value: 'Москва' }]
    }
  },
  computed: {
    SearchSportsList: {
      get () {
        this.$store.commit('sport/updateSearchSportsList')
        return this.$store.state.sport.SearchSportsList
      }
    }
  }
}
</script>

<style scoped>

</style>
