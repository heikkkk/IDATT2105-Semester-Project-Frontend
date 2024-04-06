import { defineStore } from 'pinia'

export const useQuestionStore = defineStore({
  id: 'QuestionStore',
  state: () => ({
    activeQuestionId: 0,
    genericId: -1
  }),
  actions: {
    setActiveQuestionId(newValue) {
      this.activeQuestionId = newValue;
    }
  },
  getters: {

    getActiveQuestionId() {
      return this.activeQuestionId
    },
    getGenericId() {
      this.genericId -= 1
      return this.genericId
    },
  },

  persist: {
    storage: sessionStorage
  }
})