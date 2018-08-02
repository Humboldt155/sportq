<template>
  <q-page>
    <q-card>
      <q-card-media>
        <img src="../../src/assets/gold_gym_main.jpg">
      </q-card-media>
      <q-card-title>
        {{ placeInfo.name }}<br>
        <q-rating disable slot="subtitle" v-model="placeInfo.rating" max="5" icon="fas fa-star"/>
        <div slot="right" class="row items-center">
          <q-icon name="fas fa-map-marker-alt" />
          {{ placeInfo.distance }}
        </div>
      </q-card-title>
      <q-card-main>
        <p class="text-faded">Время работы: {{ placeInfo.workingTime }}</p>
        <p>{{ placeInfo.description }}</p>

      </q-card-main>
      <q-list>
          <q-collapsible icon="fas fa-users" label="Тренеры" collapse-icon="fas fa-angle-down">
              <q-item v-for="trainer in placeInfo.trainers" :key="trainer.name">
                <q-item-side>
                  <q-item-tile avatar image="../../src/assets/logo.png">
                    <img src="../../src/assets/logo.png" width="40" height="40">
                  </q-item-tile>
                </q-item-side>
                <q-item-main :label="trainer.name" />
                <q-item-tile>
                    {{ trainer.rating }}
                  </q-item-tile>
              </q-item>
          </q-collapsible>

          <q-collapsible icon="fas fa-dumbbell" label="Оборудование" collapse-icon="fas fa-angle-down">
            <div v-for="invent in placeInfo.inventory" :key="invent.name">
              {{ invent }}
            </div>
          </q-collapsible>

          <q-collapsible icon="fas fa-wifi" label="Удобства" collapse-icon="fas fa-angle-down">
            <div v-for="att in placeInfo.attributes" :key="att.name">
              {{ att }}
            </div>
          </q-collapsible>

          <q-collapsible icon="fas fa-dollar-sign" label="Цены" collapse-icon="fas fa-angle-down">
            <div v-for="price in placeInfo.prices" :key="price.name">
              {{ price }}
            </div>
          </q-collapsible>
          <q-collapsible icon="fas fa-dumbbell" label="Виды спорта" collapse-icon="fas fa-angle-down">
            <div v-for="sport in placeInfo.sports" :key="sport.name">
              {{ sport }}
            </div>
          </q-collapsible>
        </q-list>
    </q-card>
    <div><span class="text-faded">Сайт: </span>{{ placeInfo.contacts.web }}</div>
    <div><span class="text-faded">Телефон: </span>{{ placeInfo.contacts.telephone }}</div>
    <div><span class="text-faded">Адрес: </span>{{ placeInfo.contacts.address }}</div>
    <div><span class="text-faded">facebook: </span>{{ placeInfo.contacts.facebook }}</div>
    <div><span class="text-faded">vk: </span>{{ placeInfo.contacts.vk }}</div>
    <div><span class="text-faded">instagram: </span>{{ placeInfo.contacts.instagram }}</div>
    <br>
  </q-page>
</template>

<script>
export default {
  name: 'placeCard',
  data () {
    return {
    }
  },
  computed: {
    placeInfo: {
      get () {
        return this.$store.state.place.currentPlace
      }
    }
  }
}
</script>

<style scoped>

</style>
