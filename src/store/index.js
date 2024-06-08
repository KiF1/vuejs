import { createStore } from 'vuex'

export default createStore({
  state: {
    todo: {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false,
      "imgSrc": 'https://github.com/KIF1.png',
    }
  },
  // Usado para monitorar toda vez que um estado muda
  getters: {
    titleChanged(state) {
      return state.todo.title === 'Title Changed'
    }
  },
  mutations: {
    storeTodo(state, data) {
      state.todo.title = data
    }
  },
  // mesma função do mutations, usado pois tem acesso aos getters e modules. 
  // Além de ser assyncrona. Usamos quando queremos fazer algo assyncrono, quando quermeos syncrono usamos modules
  actions: {
    storeTodo(context, data) {
      context.commit('storeTodo', data)
    }
  },
  modules: {
  }
})
