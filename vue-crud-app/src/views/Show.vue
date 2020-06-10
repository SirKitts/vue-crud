<template>
  <div>
    <h2>Show user</h2>

    <b-input-group class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="person-fill"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="text" readonly placeholder="User Name" v-model="user.username"></b-form-input>
    </b-input-group>

    <b-input-group size="lg">
      <b-input-group-prepend is-text>
        <b-icon icon="envelope"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="email" readonly placeholder="me@example.com" v-model="user.email"></b-form-input>
    </b-input-group>

    <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
        Edit user
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/Helpers';
export default {
  name: 'show',
  data() {
    return {
      user: ''
    };
  },
  async mounted() {
    this.user = await api.getuser(this.$route.params.id);
  }
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>