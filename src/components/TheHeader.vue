<template>
  <h1 :class="{ 'title': titleClass }">Curso</h1>
  <h1 :class="['title', { 'title': titleClass }]">{{ variant }}</h1>
  <div v-for="(object, index) in todos" :key="object.id">
    <img v-if="object.imgSrc" :src="object.imgSrc" />
    {{ index }} - {{ object.title }}
  </div>
  <input v-model="name" @keyup.enter="onKeyUp" type="text" />
  <span>{{ name }}</span>
  <button @click="onClick('message send')">Click</button>
  <form @submit="submit.prevent('message send')">
    <button @click="onClick('message send')">Click</button>
  </form>
  <span>{{ fullName }}</span>
</template>

<script>
  export default {
    data() {
      return {
        titleClass: true,
        name: 'test',
        nameTwo: 'test 2',
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
    },
    watch: {
      //sempre colocamos a varável q queremos observar
      name(newValue, oldValue){
        console.log(newValue, oldValue)
      },
      // Para observar um objeto:
      //   obj: {
      //     handler(): {
      //       Objeto alterado
      //     },
      //     deep: true => Quando qualqer coisa alterar
      //   }
    },
    props: {
      variant: {
        type: String,
        default: '',
        required: true
      }
    },
    // Valores salvos em cache
    computed: {
      fullName() {
        return `${ this.name } ${ this.nameTwo }`
      }
    },
    methods: {
      onClick(message) {
       this.$emit('close')
       this.name = message
      },
      // Verifica os valores ditados = Onchange
      onKeyUp(event){
        console.log(event.target.value)
      }
    }
}
</script>

<style scoped>
  header{
    background-color: black;
  }
</style>