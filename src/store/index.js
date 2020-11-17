import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const contacts = JSON.parse(localStorage.getItem('contacts10') || '[]')

export default new Vuex.Store({
  state: {
    contacts: JSON.parse(localStorage.getItem('contacts10') || '[]'),
  },
  mutations: {
    ADD_CONTACT(state, { firstName, lastName }) {
      state.contacts.push({
        firstName: firstName,
        lastName:lastName,
        id: Date.now()
      })
      localStorage.setItem('contacts10', JSON.stringify(state.contacts))
    },
    DELETE_CONTACT(state, { id }) {
      let index = state.contacts.findIndex(item => item.id === id)
      state.contacts.splice(index, 1)
      localStorage.setItem('contacts10', JSON.stringify(state.contacts))
    },
    DELETE_FIELD(state, { key, contactId }) {
      const contact = state.contacts.find(contact => contact.id == contactId)
      delete contact[`${key}`]
      localStorage.setItem('contacts10', JSON.stringify(state.contacts))
    },
    ADD_FIELD(state, { contact, fieldName, fieldValue }) {
      let index = state.contacts.findIndex(item => item.id === contact.id)
      state.contacts[index][`${fieldName}`] = fieldValue
      localStorage.setItem('contacts10', JSON.stringify(state.contacts))
    },
    DECLINE_CHANGES(state, { contact, updatedContact }) {
      let index = state.contacts.findIndex(item => item.id === contact.id)
      state.contacts[index] = updatedContact
      localStorage.setItem('contacts10', JSON.stringify(state.contacts))
    },
    UPDATE_CHANGES(state, { updatedContact }) {
      let index = state.contacts.findIndex(item => item.id === updatedContact.id)
      state.contacts[index] = updatedContact
    },
    UNDO(state) {
      state = null
      localStorage.setItem('contacts10', JSON.stringify(state.contacts))
    }
  },
  actions: {
    addContact({commit}, { firstName, lastName }) {
      commit("ADD_CONTACT", { firstName, lastName });
    },
    deleteContact({commit}, { id }) {
      commit("DELETE_CONTACT", { id });
    },
    deleteField({commit}, { key, contactId }) {
      commit("DELETE_FIELD", { key, contactId });
    },
    addField({commit}, { contact, fieldName, fieldValue }) {
      commit("ADD_FIELD", { contact, fieldName, fieldValue });
    },
    declineCanges({commit}, { contact, updatedContact }) {
      commit("DECLINE_CHANGES", { contact, updatedContact });
    },
    updateChanges({commit}, { updatedContact }) {
      commit("UPDATE_CHANGES", { updatedContact });
    },
    undo({commit}) {
      commit("UNDO");
    },
  },
  modules: {},
  getters: {
    contacts: s => s.contacts,
    contactById: s => id => s.contacts.find(c => c.id === id)
  }
})
