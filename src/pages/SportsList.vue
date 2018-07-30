<template>
  <q-page>
    База видов спорта
    {{ SportsList }}
  </q-page>
</template>

<script>
export default {
  name: 'SportsList',
  data () {
    return {

    }
  },
  computed: {
    SportsList: {
      get () {
        return this.$store.state.sport.SportsList
      }
    }
  }
}
</script>

<style scoped>

</style>
