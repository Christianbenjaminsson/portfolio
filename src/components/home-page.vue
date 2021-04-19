<template>
  <body>
    <div class="header">
      <div class="menu">
        <ul>
          <li><a href="./home-page.vue">Home</a></li>
          <li><a href="./about-page.vue">About</a></li>
          <li><a href="./cv-page.vue">CV</a></li>
          <li><a href="./contact-page.vue">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="content"></div>
  </body>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  margin: auto;
  height: 100%;
}

.header {
  height: 40px;
}

.menu ul {
  list-style: none;
  text-align: center;
}

.menu li {
  display: inline;
  margin-right: 15px;
}

.menu a {
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: black;
}

.menu a:hover {
  border-bottom: 1px solid black;
}
</style>
