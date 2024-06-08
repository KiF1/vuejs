<template>
  <h1>{{ $store.state.todo.title }}</h1>
  <h1>{{ $store.getters.titleChanged }}</h1>
  <button :onClick="changeTitleTodo">click</button>
</template>

<script>
  export default{
    created() {
      if(this.$route.params.id !== '10'){
        this.$router.push({
          name: 'home'
        })
      }
    },
    methods: {
      changeTitleTodo() {
        const newTitle = 'Title Changed';
        // this.$store.commit('storeTodo', newTitle)
        this.$store.dispatch('storeTodo', newTitle)
      }
    },
  }
</script>