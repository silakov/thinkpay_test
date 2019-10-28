<template>
  <v-app>
    <v-app-bar app>
      <router-link to="/"><img alt="Vue logo" src="@/assets/logo.png" height="56px"></router-link>
      <v-divider
        class="mx-4"
        vertical
      ></v-divider>
      <a href="https://www.linkedin.com/in/igor-silakov-92854285" class="display-2 font-weight-bold white--text">Silakov's task</a>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style lang="css">
  a {
    text-decoration: none;
  }
</style>
