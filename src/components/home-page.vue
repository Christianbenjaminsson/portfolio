<template>
  <body>
    <div class="header">
      <div class="menu">
        <ul>
          <li><a href="./home-page.vue">Home</a></li>
          <li><a href="./about-page.vue">About Me</a></li>
          <li><a href="./cv-page.vue">CV</a></li>
          <li><a href="./contact-page.vue">Contact</a></li>
        </ul>
      </div>
    </div>
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
  padding: 10px;
  margin: auto;
}

.header {
  position: relative;
}

.menu ul {
  list-style: none;
}

.menu li {
  display: inline-block;
  margin-right: 15px;
  align-items: center;
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
