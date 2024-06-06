<!-- V-show é para quando queremos apenas que o componente apareça e suma, mas ele fica apenas com display none, o v-if é quando mesmo que o componente apareça ou não, ele não aparecerá no inspecionar -->

<template>
  <TheHeader v-show="showHeader" />
  <div>Nome: {{ name }}</div>
  <img alt="Vue logo" src="./assets/logo.png">
  <div v-if="accessLevel === 'Admin'">Admin</div>
  <div v-else-if="accessLevel === 'Marketing'">Marketing</div>
  <div v-else>Suport</div>
</template>

<script>
import TheHeader from  './components/TheHeader.vue'

export default {
  name: 'App',
  components: {
    TheHeader
  },
  data(){
    return {
      showHeader: false,
      name: 'Vue.js',
      accessLevel: 'Marketing'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
