<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>
    <b-input-group class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="person-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" placeholder="User Name" v-model="user.username"></b-form-input>
    </b-input-group>
    <b-input-group size="lg">
      <b-input-group-prepend is-text>
        <b-icon icon="envelope"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="email" placeholder="me@example.com" v-model="user.email"></b-form-input>
    </b-input-group>
    <br/><button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'user-form',
  props: {
    user: {
      type: Object,
      required: false,
      default: () => {
        return {
          username: '',
          email: ''
        }
      }
    }
  },
  data () {
    return {
      errorsPresent: false
    }
  },
  methods: {
    onSubmit: function () {
      if (this.user.username === '' || this.user.email === '') {
        this.errorsPresent = true
      } else {
        this.$emit('createOrUpdate', this.user)
      }
    }
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
