<template>
  <div id="app">
    <div class="navbar">
      <div class="nav_left"><p>Christian Benjaminsson</p></div>
      <div class="nav_logo"><img src="@/assets/logo.png" id="logo" /></div>
      <div class="nav_right">
        <ul>
          <li><router-link to="/" class="routerlink">Home</router-link></li>
          <li>
            <router-link to="/contact" class="routerlink">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- <div id="navbar">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

.navbar {
  display: flex;
  height: 20%;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  align-items: center;
  list-style: none;
}

#logo {
  height: 55px;
  width: 55px;
}

.nav_left {
  text-align: left;
}

.nav_left,
.nav_right {
  flex-basis: 0%;
  flex-grow: 1;
}

.nav_right {
  text-align: right;
}

li {
  display: inline-block;
  cursor: pointer;
  color: black;
}

li:not(:last-child) {
  margin-right: 5px;
}

li:hover {
  border-bottom: 1px solid #000000;
}

.routerlink {
  color: #000000;
  text-decoration: none;
}
</style>
