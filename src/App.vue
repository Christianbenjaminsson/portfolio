<template>
  <div id="app">
    <div class="navbar">
      <div class="nav_left">
        <router-link to="/" class="routerlink"
          >Christian Benjaminsson</router-link
        >
      </div>
      <div class="nav_logo">
        <router-link to="/"
          ><img src="@/assets/logo.png" id="logo"
        /></router-link>
      </div>
      <div class="nav_right">
        <ul>
          <li><router-link to="/" class="routerlink">Home</router-link></li>
          |
          <li>
            <router-link to="/cv" class="routerlink">CV</router-link>
          </li>
          |
          <li>
            <router-link to="/contact" class="routerlink">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view />
    <div class="footer"></div>
  </div>
</template>

<style>
html {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
}

body {
  max-width: 1200px;
  margin: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}

.navbar {
  display: flex;
  padding: 15px 40px 15px 40px;
  margin-bottom: 50px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  align-items: center;
  list-style: none;
  box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2);
}

#logo {
  height: 55px;
  width: 55px;
  border-radius: 8px;
}

.nav_left {
  text-align: left;
}

.nav_left,
.nav_right {
  flex-basis: 0%;
  flex-grow: 1;
  letter-spacing: 1px;
}

.nav_right {
  text-align: right;
  font-size: 15px;
}

li {
  display: inline-block;
  cursor: pointer;
  color: black;
  margin-left: 5px;
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

.footer {
  height: 50px;
}
</style>
