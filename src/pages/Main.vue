<template>
    <q-page padding>
      <q-card>
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
        <!--<br>-->
        <!--<br>-->
          <!--<q-tabs inverted v-model="searchTabsModel">-->
            <!--<q-tab name="xtab-1" slot="title" label="Указать место"></q-tab>-->
            <!--<q-tab name="xtab-2" slot="title" label="Рядом со мной" />-->

            <!--<q-tab-pane name="xtab-1">Tab One</q-tab-pane>-->
            <!--<q-tab-pane name="xtab-2">Tab Two</q-tab-pane>-->
          <!--</q-tabs>-->
        <!--<q-search-->
            <!--clearable-->
            <!--icon="fas fa-map-marker-alt"-->
            <!--v-model="place"-->
            <!--color="primary"-->
            <!--float-label="Где"-->
            <!--placeholder="Страна, Населенный пункт или Место">-->
            <!--<q-autocomplete-->
              <!--:static-data="{field: 'value', list: placeOptions}"-->
              <!--:min-characters="1"-->
              <!--@selected="place"-->
            <!--/>-->
          <!--</q-search>-->
        <!--<br>-->
        <!--<q-btn>-->
          <!--Найти {{ searchObject }} по {{ searchModel }} в {{ place }}-->
        <!--</q-btn>-->
        </q-card-main>
        <q-list style="max-width: 600px;">
          <q-btn
            link
            icon="fas fa-map-marker-alt"
            label="где: москва"
            color="primary"
            size="sm"
            outline
            :key="layoutTypes1.label"
            @click.native="layoutTypes1.show()"
            v-ripple.mat
          >
          </q-btn>&nbsp;&nbsp;&nbsp;&nbsp;<q-btn
            link
            icon="fas fa-sliders-h"
            label="фильтры"
            color="primary"
            size="sm"
            outline
            :key="layoutTypes.label"
            @click.native="layoutTypes.show()"
            v-ripple.mat
          >&nbsp;&nbsp;
            <q-chip small dense square color="primary">
              4
            </q-chip>
          </q-btn>
        </q-list>
        <q-modal v-model="layoutFilters" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
           <q-modal-layout>
            <q-toolbar slot="header">
              <q-btn
                flat
                round
                dense
                @click="layoutFilters = false"
                icon="fas fa-arrow-left"
              />
              <q-toolbar-title>
                Фильтры

              </q-toolbar-title>
            </q-toolbar>

            <div class="layout-padding">
              <p class="caption">
                Цена
              </p>
              <q-slider
                v-model="sliderValue"
                :min="0"
                :max="30"
                :step="2"
                label="Цена"
                snap
              />
              <br>
              <br>
              <p class="caption">
                Только с отзывами
              </p>
              <q-toggle v-model="checked" />
              <br>
              <br>
              <br>
              <p class="caption">
                Цена
              </p>
              <q-option-group
                color="secondary"
                type="radio"
                v-model="group"
                :options="[
                  { label: 'Option 1', value: 'op1' },
                  { label: 'Option 2', value: 'op2' },
                  { label: 'Option 3', value: 'op3' }
                ]"
              />
              <br>
              <br>
              <q-btn color="primary" @click="layoutFilters = false" label="Применить" />
            </div>
          </q-modal-layout>
        </q-modal>
        <q-modal v-model="layoutPlaces" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
           <q-modal-layout>
             <q-toolbar slot="header">
              <q-btn
                flat
                round
                dense
                @click="layoutPlaces = false"
                icon="reply"
              />
              <q-toolbar-title>
                Фильтры

              </q-toolbar-title>
            </q-toolbar>
              <q-btn color="primary" @click="layoutPlaces = false" label="Применить" />
          </q-modal-layout>
        </q-modal>
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
      group: ['opt1'],
      checked: true,
      sliderValue: 10,
      searchModel: '',
      layoutFilters: false,
      layoutPlaces: false,
      layoutTypes: {
        label: 'Basic',
        show: () => { this.layoutFilters = true }
      },
      layoutTypes1: {
        label: 'Basic',
        show: () => { this.layoutPlaces = true }
      },
      place: '',
      searchObject: 'Все результаты',
      placeOptions: [{ label: 'Москва', value: 'Москва' }],
      searchTabsModel: 'xtab-1'
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
