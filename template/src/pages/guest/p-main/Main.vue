<template>
    <div>
        <img src="../../../assets/logo.png">
        <h1>{{ msg }}</h1>
        <c-main-links :essential="'Essential Links'" :ecosystem="'Ecosystem'"></c-main-links>
    </div>
</template>

<style lang="sass">
    /*@import "./Main"*/
</style>

<script>
  import cMainLinks from 'components/guest/c-main-links/MainLinks.vue'

  export default {
    components: {
      cMainLinks,
    },

    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
  }
</script>
