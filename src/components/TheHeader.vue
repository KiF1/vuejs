<template>
  <div v-for="(object, index) in todos" :key="object.id">
    <img v-if="object.imgSrc" :src="object.imgSrc" />
    {{ index }} - {{ object.title }}
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        todos: [
          {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false,
            "imgSrc": 'https://github.com/KIF1.png',
          },
          {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
          },
          {
            "userId": 1,
            "id": 3,
            "title": "fugiat veniam minus",
            "completed": false
          },
          {
            "userId": 1,
            "id": 4,
            "title": "et porro tempora",
            "completed": true
          },
          {
            "userId": 1,
            "id": 5,
            "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
            "completed": false
          },
        ]
      }
    }
}
</script>

<style scoped>
  header{
    background-color: black;
  }
</style>