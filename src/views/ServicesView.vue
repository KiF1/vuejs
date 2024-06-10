<template>
  <h1>{{ fullName }}</h1>
</template>

<script>
import { computed, ref, watch } from 'vue';

export default {
  // context === Atributos que o componente recebe
  // setup(props , context) {
  setup(props , { slots, emit }) {
    const user = ref({ first_name: 'John', last_name: 'Snow' });
    const fullName = computed(() => {
      return `${user.value.first_name} ${user.value.last_name}`
    }) 
    
    watch(
      // () => user.value.first_name
      user, () => {
      console.log('Toda vez que alterar user atualiza')
    }, { deep: true })

    return { user, fullName }
  }
}
</script>