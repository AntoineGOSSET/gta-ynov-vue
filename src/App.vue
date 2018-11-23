<template>
  <div id="app">
    

  <b-navbar toggleable="md" type="dark" variant="info"> 
    <!-- variant pour changer le couleur de fond -->

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand to="/">GTA-Ynov-vue</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">
    <b-navbar-nav>
      <b-nav-item to="/salarie_info" v-if="this.$root.isLoggin == true">Information salarie</b-nav-item>
      <b-nav-item to="/salarie_calendar" v-if="this.$root.isLoggin == true">Planning salarie</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">


      <b-nav-item to="/login" v-if="this.$root.isLoggin == false">Connexion</b-nav-item>

      <b-nav-item-dropdown right v-if="this.$root.isLoggin == true">
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>Utilisateur</em>
        </template>
        <b-dropdown-item to="/Salarie_info">Fiche d'indentité</b-dropdown-item>
        <b-dropdown-item v-on:click="logout()">Déconnexion</b-dropdown-item>
      </b-nav-item-dropdown>
    </b-navbar-nav>

  </b-collapse>
  </b-navbar>
    <router-view/>
  </div>

  



</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
export default {
  created : function(){
      this.user = this.$root.getLoggedUser()
    },
  methods : {
    logout : function (){
          this.user = ""
          console.log("logout")
          this.$root.logout()
          this.$root.isLoggin = false
          this.$router.push('login')
    }
  },

}
</script>
