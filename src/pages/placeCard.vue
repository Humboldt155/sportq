<template>
  <q-page>
    {{ placeInfo.name }}<br>
    {{ placeInfo.description }}<br>
    {{ placeInfo.rating }}<br>
    {{ placeInfo.photoUrl }}<br>
    {{ placeInfo.companyLogo }}<br>
    {{ placeInfo.companyPhoto }}<br>
    {{ placeInfo.contacts }}<br>
    {{ placeInfo.rating }}<br>
    {{ placeInfo.photoUrl }}<br>
    {{ placeInfo.prices }}<br>
    {{ placeInfo.sports }}<br>
    {{ placeInfo.trainers }}<br>
    {{ placeInfo.area }}<br>
    {{ placeInfo.inventory }}<br>
    {{ placeInfo.workingTime }}<br>
    {{ placeInfo.attributes }}
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
