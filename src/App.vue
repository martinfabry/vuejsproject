<template>
  <div id="app">
    <!--
    <nav class="navbar navbar-expand-lg fixed-top navbar-custom">
      <a class="navbar-brand" href="#">
        <img src="./img/logo.png" width="30" height="30" alt="" />
      </a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link"
              ><router-link to="/">Domov</router-link></a
            >
          </li>
          <li
            class="nav-item dropdown"
          >
            <a class="nav-link dropdown-toggle">
              <router-link to="/football">Futbal</router-link></a
            >
            <ul class="nav navbar-custom dropdown-menu dropdown-primary">
              <li>
                <a class="dropdown-item"
                  ><router-link to="/football/laliga">La liga</router-link></a
                >
              </li>
              <li>
                <a class="dropdown-item">
                  <router-link to="/football/premierleague"
                    >Premier league</router-link
                  ></a
                >
              </li>
              <li>
                <a class="dropdown-item">
                  <router-link to="/football/bundesliga"
                    >Bundesliga</router-link
                  ></a
                >
              </li>
              <li class="nav-item">
                <a class="dropdown-item"
                  ><router-link to="/football/seriea">Serie A</router-link></a
                >
              </li>
            </ul>
          </li>
          <li
            class="nav-item dropdown"
          >
            <a class="nav-link dropdown dropdown-toggle">
              <router-link to="/hockey">Hokej</router-link></a
            >
            <ul class="nav navbar-custom dropdown-menu">
              <li>
                <a class="dropdown-item">
                  <router-link to="/hockey/nhl">NHL</router-link>
                </a>
              </li>
              <li>
                <a class="dropdown-item">
                  <router-link to="/hockey/khl">KHL</router-link>
                </a>
              </li>
             
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link dropdown"
              ><router-link to="/blog">Blog</router-link></a
            >
          </li>
        </ul>
      </div>
    </nav>
-->

  <b-navbar toggleable="lg">
      <a class="navbar-brand" href="#">
        <img src="./img/logo.png" width="40px" height="40px" alt="" />
      </a>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/">Domov</b-nav-item>
        <b-nav-item-dropdown href="/football" text="Futbal"> 
          <b-dropdown-item href="/football/laliga">La liga</b-dropdown-item>
          <b-dropdown-item href="/football/premierleague">Premier League</b-dropdown-item>
          <b-dropdown-item href="/football/bundesliga">Bundesliga</b-dropdown-item>
          <b-dropdown-item href="/football/seriea">Serie A</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown split-to="/hockey" text="Hokej" >
          <b-dropdown-item href="/hockey/nhl">NHL</b-dropdown-item>
          <b-dropdown-item href="/hockey/khl">KHL</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="/blog">Blog</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      hover_football: false,
      hover_hockey: false,
    };
  },
};
</script>