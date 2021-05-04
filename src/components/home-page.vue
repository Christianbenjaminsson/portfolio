<template>
  <body>
    <div class="header">
      <div class="menu">
        <ul>
          <li><a href="./home-page.vue">Home</a></li>
          <li><a href="./contact-page.vue">Contact</a></li>
          <!--<li><a href="./about-page.vue">About</a></li>
          <li><a href="./cv-page.vue">CV</a></li>-->
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="content-header">
        <h2>Driven systemutvecklare med erfarenhet av it-projekt</h2>
      </div>
      <div class="content-info"><p>Jag har...</p></div>
      <div class="content-info"><p>Jag har...</p></div>
    </div>
  </body>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {},
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
  text-align: left;
  margin-left: 40px;
  padding: 20px;
}

.menu li {
  display: inline;
  margin-right: 15px;
}

.menu a {
  text-decoration: none;
  font-size: 17px;
  font-weight: bold;
  color: black;
}

.menu a:hover {
  border-bottom: 1px solid black;
}

.content {
  max-width: 600px;
  margin-top: 20px;
  margin: auto;
  padding: 10px;
}

.content-header {
  margin-top: 40px;
}
</style>
