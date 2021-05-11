<template>
  <div class="navbar">
    <div class="nav_left"><p>Christian Benjaminsson</p></div>
    <div class="nav_logo"><img src="@/assets/logo.png" id="logo" /></div>
    <div class="nav_right">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<script></script>

<style>
.navbar {
  display: flex;
  height: 20%;
  padding: 20px;
  font-size: 18px;
  font-weight: bold;
  color: black;
  align-items: center;
}

#logo {
  height: 55px;
  width: 55px;
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
}

li:not(:last-child) {
  margin-right: 5px;
}

li:hover {
  border-bottom: 1px solid #000000;
}
</style>
