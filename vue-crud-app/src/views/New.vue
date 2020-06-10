<template>
  <div>
    <h2>add new user</h2>
    <user-form @createOrUpdate="createOrUpdate"></user-form>
  </div>
</template>

<script>
import userForm from '../components/UserForm.vue';
import { api } from '../helpers/Helpers';

export default {
  name: 'new-user',
  components: {
    'user-form': userForm
  },
  methods: {
    createOrUpdate: async function(user) {
      const res = await api.createuser(user);
      this.flash('user created', 'success');
      this.$router.push(`/users/${res._id}`);
    }
  }
};
</script>