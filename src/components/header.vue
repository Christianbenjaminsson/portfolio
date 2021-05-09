<template>
  <div class="navbar">
    <div class="nav_left"><p>Christian Benjaminsson</p></div>
    <div class="nav_logo"><img src="@/assets/logo.png" id="logo" /></div>
    <div class="nav_right">
      <ul>
        <li><router-link to="/"></router-link>Home</li>
        <li><router-link to="/contact"></router-link>Contact</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
