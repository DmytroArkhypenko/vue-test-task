<template>
  <div class="conact_info">
    <p>{{contact.firstName}} {{contact.lastName}}</p>

      <ContactField
        v-for="(value, key) in contact"
        :key="key"
        :theKey="key"
        :value="value"
        :contactId="contact.id"
        v-model="contact[`${key}`]"
      />

    <div class="add_attribute">
      <label>Add attribute to the contact</label>
      <input
        v-model="newFieldName"
        required
      />
      <input
        v-model="newFieldValue"
        required
      />
      <button
        @click="addFieldToContact"
      >
        Add
      </button>
    </div>
    <div>
      <button
        @click="cancelChanges"
        :disabled="!canUndo"
      >
        Cancel Edited data
      </button>
      <button
        @click="undo"
        :disabled="!canUndo"
      >
        Rollback
      </button>
      <button @click="saveChanges">
        Save
      </button>
    </div>
  </div>
</template>

<script>
import ContactField from '@/components/ContactField.vue'
import { UndoMixin } from '../mixins/UndoMixin.js'

import { mapGetters } from 'vuex'

export default {
  mixins: [UndoMixin],
  components: {
    ContactField
  },
  data() {
    return {
      newFieldName: '',
      newFieldValue: '',
      contactFieldsInitialState: {}
    }
  },
  created() {
    this.contactFieldsInitialState = JSON.parse(
      JSON.stringify(this.contact)
    )
  },
  computed: {
    contact() {
      return this.$store.getters.contactById(+this.$route.params.id)
    },
    },
  methods: {
    addFieldToContact() {
      if (this.newFieldName && this.newFieldValue) {
        this.$store.dispatch('addField', {
          contact: this.contact,
          fieldName: this.newFieldName,
          fieldValue: this.newFieldValue
        })
        this.newFieldName = ''
        this.newFieldValue = ''
      } else {
        alert('Fill the Fields')
      }
    },
    saveChanges() {
        this.$store.dispatch('updateChanges', { updatedContact: this.contact })
    },
    cancelChanges() {
      let isConfirmed = confirm(
        'Are you sure to decline cheanges?'
      )
      if (isConfirmed) {
        this.$store.dispatch('declineCanges', {
          updatedContact: JSON.parse(
            JSON.stringify(this.contactFieldsInitialState)
          ),
          contact: this.contact
        })
      }
    }
  }
}
</script>

<style lang="scss">
.contact-info {
  position: fixed;
  top: 100px;
  left: 100px;

}

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    margin-left: 8px;
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
    margin-top: 8px;
    margin-left: 10px;
    border: 2px solid transparent;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 8px 0;
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


</style>
