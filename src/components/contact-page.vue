<template>
  <body>
    <div class="navbar">
      <div class="nav_left"><p>Christian Benjaminsson</p></div>
      <div class="nav_logo"><img src="@/assets/logo.png" id="logo" /></div>
      <div class="nav_right">
        <ul>
          <li><a href="./home-page.vue">Home</a></li>
          <li><a href="./contact-page.vue">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="content"></div>
  </body>
</template>

<script></script>

<style>
html {
  height: 100%;
}

body {
  max-width: 1200px;
  min-height: 100%;
  margin: auto;
}

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
  padding: 5px;
}

li a {
  text-decoration: none;
  color: #000000;
}

li a:hover {
  border-bottom: 1px solid #000000;
}
</style>
