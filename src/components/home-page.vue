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
      <div class="box_one" id="squares"></div>
      <div class="box_two" id="squares"></div>
      <div class="box_three" id="squares"></div>
      <div class="box_four" id="squares"></div>
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
html {
  height: 100%;
}

body {
  max-width: 1200px;
  min-height: 100%;
  margin: auto;
}

.header {
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

.content {
  height: 80%;
  width: 900px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

#squares {
  border-radius: 30px;
  height: 300px;
  width: 430px;
}

.box_one {
  background: #659999; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f4791f,
    #659999
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f4791f,
    #659999
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.box_two {
  background: #544a7d; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ffd452,
    #544a7d
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ffd452,
    #544a7d
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.box_three {
  background: #8360c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.box_four {
  background: #009fff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #ec2f4b,
    #009fff
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #ec2f4b,
    #009fff
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
