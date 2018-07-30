<template>
  <q-layout>
    <q-layout-header>
      <q-toolbar :inverted="$q.theme === 'ios'" color="primary" >
        <q-btn
          @click="drawer = !drawer"
          flat
          round
          dense
          icon="fas fa-bars"
        />
        <q-toolbar-title>
          SPORT
          <span slot="subtitle">beta</span>
        </q-toolbar-title>
        <q-btn flat round icon="fas fa-search" to="/search" />
        <q-btn flat round icon="far fa-bookmark" to="/bookmarks" />
        <q-btn flat round icon="far fa-comment-alt" to="/notifications" />
        <q-btn flat round icon="far fa-user" to="/profile" />
      </q-toolbar>
      <!-- Left Side Drawer -->
      <q-layout-drawer side="left" v-model="drawer">
        <q-list no-border link inset-separator>
          <q-list-header>SPORT</q-list-header>
          <q-item to="/search">
            <q-item-side icon="fas fa-search" />
            <q-item-main label="Поиск"/>
          </q-item>
          <q-item to="/bookmarks">
            <q-item-side icon="far fa-bookmark" />
            <q-item-main label="Закладки"/>
          </q-item>
          <q-item to="/notifications">
            <q-item-side icon="far fa-comment-alt" />
            <q-item-main label="Уведомления"/>
          </q-item>
          <q-item to="/feedback">
            <q-item-side icon="far fa-envelope" />
            <q-item-main label="Сообщить о проблеме"/>
          </q-item>
          <q-item to="/schedule">
            <q-item-side icon="far fa-calendar-alt" />
            <q-item-main label="Мои занятия"/>
          </q-item>
          <q-item to="/sportslist">
            <q-item-side icon="fas fa-question" />
            <q-item-main label="База видов спорта"/>
          </q-item>
          <q-item to="/profile">
            <q-item-side icon="far fa-user" />
            <q-item-main label="Профиль"/>
          </q-item>
          <q-item to="/settings">
            <q-item-side icon="fas fa-cog" />
            <q-item-main label="Настройки"/>
          </q-item>
        </q-list>
      </q-layout-drawer>
    </q-layout-header>
    <q-page-container>

      <!--
        Here it's where Vue Router injects children
        Page components.

        <router-view/> tag below can be replaced by an
        actual page content should you wish to do so.
      -->
      <router-view />
      <!--
        First child of QPageContainer must be a QPage,
        so make sure that your layout route children components
        encapsulate a QPage.
      -->

    </q-page-container>
  </q-layout>

</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      drawer: true
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>

</style>
