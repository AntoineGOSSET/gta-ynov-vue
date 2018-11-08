<template>
  <div id="app">
    

  <b-navbar toggleable="md" type="dark" variant="info"> 
    <!-- variant pour changer le couleur de fond -->

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand to="/">GTA-Ynov-vue</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item to="/about">About</b-nav-item>
      
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">


      <b-nav-item to="/login">Connexion</b-nav-item>

      <b-nav-item-dropdown right>
        <!-- Using button-content slot -->
        <template slot="button-content">
          <em>Utilisateur</em>
        </template>
        <b-dropdown-item href="#">Profile</b-dropdown-item>
        <b-dropdown-item href="#">Déconnexion</b-dropdown-item>
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
