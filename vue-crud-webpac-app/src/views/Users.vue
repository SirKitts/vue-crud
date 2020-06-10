<template>
  <div>
    <h2>list</h2>
    <table id="users" class="ui celled compact table">
      <thead>
        <tr>
          <th>User</th>
          <th>Email</th>
          <th>Info</th>
          <th>Edit</th>
          <th>Delete</th>
          <th colspan="3"></th>
        </tr>
      </thead>
      <tr v-for="(user, i) in users" :key="i">
        <td>{{ user.username }}</td>
        <td>{{ user.email }}</td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'show', params: { id: user._id }}">
            <b-icon icon="info-square" aria-hidden="true"></b-icon>
          </router-link>
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit', params: { id: user._id }}">
            <b-icon icon="pen" aria-hidden="true"></b-icon>
          </router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(user._id)">
          <a :href="`/users/${user._id}`">
            <b-icon icon="trash" aria-hidden="true"></b-icon>
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/Helpers'
export default {
  name: 'users',
  data () {
    return {
      users: []
    }
  },
  methods: {
    async onDestroy (id) {
      const sure = window.confirm('Are you sure?')
      if (!sure) return
      await api.deleteuser(id)
      this.flash('user deleted sucessfully!', 'success')
      const newusers = this.users.filter(user => user._id !== id)
      this.users = newusers
    }
  },
  async mounted () {
    this.users = await api.getusers()
  }
}
</script>
