<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <b-button-group>
            <b-button variant="outline-primary">
              <router-link to="/users" style="text-decoration: none; color: inherit;">
                <b-icon icon="people-fill"></b-icon> List Users
              </router-link>
            </b-button>
            <b-button variant="outline-primary">
              <router-link to="/users/new" style="text-decoration: none; color: inherit;">
                <b-icon icon="person-fill"></b-icon> New User
              </router-link>
            </b-button>
            <!--b-button variant="outline-primary">
              <b-icon icon="inbox-fill"></b-icon> Messages
            </b-button-->
          </b-button-group>
        </div>
      </div>
    </div>

    <div class="ui text container">
      <div class="ui one column grid">
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app > div.navbar {
  margin-bottom: 1.5em;
}
</style>
