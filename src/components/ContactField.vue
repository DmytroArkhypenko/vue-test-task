<template>
<div>
  <div v-if="!disabled">
    <label>{{ theKey }}</label>
    <input
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <button v-if="!disabled"
      @click="deleteField(theKey, contactId)"
    >
      Remove the field
    </button>
  </div>
</div>
</template>

<script>
export default {
  props: {
    theKey: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    contactId: {
      type: Number,
      required: true
    },
    value: [String, Number]
  },
  methods: {
    deleteField(key, contactId) {
      let isConfirmed = confirm('Are you sure to delete field?')
      if (isConfirmed) {
        this.$store.dispatch('deleteField', {
          key,
          contactId,
        })
      }
    }
  },
  computed: {
    disabled() {
      return this.theKey === "firstName" || this.theKey == "lastName" || this.theKey === "id"
    }
  }
}
</script>

<style lang="scss">
.disabled {
  visibility: hidden;
}
</style>
