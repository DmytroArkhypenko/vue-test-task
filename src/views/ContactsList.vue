<template>
<div>
    <div class="new-employee-form">
      <div v-if="!isFormOpened" >
      <p>Press button to open the form to fill your contact book</p>
      <button
        @click="openForm"
      >
        Open
      </button>
      </div>
      <div v-if="isFormOpened">
        <form @submit.prevent="addContact">
          <div>
            <label for="first-name">Type first name</label>
            <input
              name="first-name"
              v-model="firstName"
              required
            />
            <label for="last-name">Type the last name</label
            >
            <input
              name="last-name"
              v-model="lastName"
              required
            />
          </div>
          <div>
            <button
              type="button"
              @click="closeForm"
            >Exit adding mode
            </button>
            <button type="submit">Add Contact</button>
          </div>
        </form>
      </div>
    </div>

  <div>
    <table v-if="contacts.length">
      <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last name</th>
        <th>Open</th>
        <th>Remove</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="(contact, idx) of contacts"
          :key="contact.id"
      >
        <td>{{idx + 1}}</td>
        <td>{{contact.firstName}}</td>
        <td>{{contact.lastName}}</td>

        <td>
          <router-link tag="button" :to="'/contact/' + contact.id">
            Open details
          </router-link>
        </td>
        <td>
          <button @click="deleteContact(contact.id, contact.firstName, contact.lastName)">Remove</button>
        </td>
      </tr>
      </tbody>
    </table>
    <p v-else>Your contact book is empty now</p>
  </div>
</div>
</template>

<script>

export default {
  data: function() {
    return {
      isFormOpened: false,
      firstName: '',
      lastName: '',
    }
  },
  methods: {
    openForm: function() {
      this.isFormOpened = true
    },
    closeForm: function() {
      this.isFormOpened = false
    },
    addContact:function() {
      this.$store.dispatch('addContact', {
        firstName: this.firstName,
        lastName: this.lastName
      })
      this.firstName = ''
      this.lastName = ''
    },
    deleteContact(id, firstName, lastName) {
      debugger;
      let isConfirmed = confirm(`Are you sure to delete the contact ${firstName + lastName}?`)
      if (isConfirmed) {
        this.$store.dispatch('deleteContact', { id })
      }
    }
  },
  computed: {
    contacts () {
    return this.$store.state.contacts
  }
  }
}
</script>

<style lang="scss">

.new-employee-form {
  background: #f5f5f5;
  align-self: flex-start;
  color: #808080;
  border-top: #e25644 solid 54px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 24px;
  display: flex;
  flex-direction: column;
  width: 300px;
  position: fixed;
  right: 10px;
  top: 10px;
  margin-left: 24px;

  &:before {
    position: absolute;
    content: "New Contact";
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    top: -36px;
  }

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 8px;
    input {
      width: 150px;
      box-sizing: border-box;
      border: 1px solid #808080;
      border-radius: 4px;
      color: #808080;
      padding: 4px;
      outline-color: #808080;
    }
  }

  button {
    margin-top: 16px;
    margin-right: 10px;
    border: 2px solid transparent;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 8px;
    background: #e25644;
    color: #fff;
    font-family: Roboto, sans-serif;
    font-size: 14px;
    cursor: pointer;
    transition: 0.25s ease color, 0.25s ease background, 0.25s ease border;
    font-weight: 700;

    &:hover {
      border: 2px solid #e25644;
      background: #fff;
      color: #e25644;
    }
  }
}

body {
  background-image: linear-gradient(45deg, #4ebd36, #7e7cf9);
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 100px;
  font-family: Roboto, sans-serif;
  margin: 0;
  box-sizing: border-box;
}

table {
  min-width: 600px;
  max-width: 1000px;
  margin-right: 400px;
  position: fixed;
  left: 100px;
  top: 100px;
}

tr {
  background: #fff;
  color: #808080;
}

tr:nth-child(2n + 1) {
  background: #f5f5f5;
}

thead tr:first-child {
  background: #e25644;
  color: #fff;
}

tfoot tr:first-child {
  background: #f5f5f5;
}

td,
th {
  text-align: left;
  padding: 18px;
}

thead th:hover {
  color: #fff400;
  cursor: pointer;
}

thead tr th:first-child {
  border-top-left-radius: 10px;
}

thead tr th:last-child {
  border-top-right-radius: 10px;
}

tfoot tr th:first-child {
  border-bottom-left-radius: 10px;
}

tfoot tr th:last-child {
  border-bottom-right-radius: 10px;
}

tbody tr:hover {
  background: #f5f5f5;
  color: #585858;
  cursor: pointer;
}

tr.active {
  background: #cbcbcb;
  color: #585858;

  &:hover {
    background: #cbcbcb;
    color: #585858;
  }
}
</style>
