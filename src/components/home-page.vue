<template>
  <body>
    <div class="header">
      <div class="nav_left"><p>Christian Benjaminsson</p></div>
      <div class="nav_logo"><img src="@/assets/logo.png" id="logo" /></div>
      <div class="nav_right">
        <ul>
          <li><a href="./home-page.vue">Home</a></li>
          <li><a href="./contact-page.vue">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="content-header">
        <h2>Driven systemutvecklare med erfarenhet av it-projekt</h2>
      </div>
      <div class="content-info">
        <p>
          Mina kunskaper: Java, IntelliJ IDEA, Github, Cypress, C++, Visual
          Studio Code, Android Studio, C++, Atlassian (Jira), DBeaver, pgAdmin,
          MongoDB, enhetstester, JavaScript, Node.js, HTML, CSS och
          grundkunskaper inom React.js och Vue
        </p>
      </div>
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
  max-width: 1200px;
  margin: auto;
  height: 100%;
}

.header {
  display: flex;
  height: 40px;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  color: black;
  align-items: center;
}

#logo {
  height: 50px;
  width: 50px;
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
  padding: 10px;
}

li a {
  text-decoration: none;
  color: #000000;
}

li a:hover {
  border-bottom: 1px solid #000000;
}

.content {
  margin-top: 20px;
  margin: auto;
  padding: 10px;
}

.content-header {
  margin-top: 40px;
}

#profile_pic {
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 200px;
  width: 200px;
}
</style>
