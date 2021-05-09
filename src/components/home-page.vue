<template>
  <body>
    <headers></headers>
    <div class="content">
      <div class="box_one" id="squares"></div>
      <div class="box_two" id="squares"></div>
      <div class="box_three" id="squares"></div>
      <!--<div class="box_four" id="squares"></div>-->
    </div>
  </body>
</template>

<script>
export default {
  name: "home",
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

.content {
  min-height: 80%;
  width: 1000px;
  margin: auto;
  position: relative;
  display: flex;
  margin-top: 50px;
  justify-content: space-between;
  align-items: center;
}

#squares {
  border-radius: 30px;
  height: 250px;
  width: 300px;
}

.box_one {
  background: #659999;
  opacity: 0.3;
  /*background: -webkit-linear-gradient(
    to right,
    #f4791f,
    #659999
  );
  background: linear-gradient(
    to right,
    #f4791f,
    #659999
  );*/
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.box_one:hover {
  cursor: pointer;
  transition: 0.5s ease-in-out;
  transform: scale(1.05);
}

.box_two {
  background: #659999;
  opacity: 0.3;
  /*background: -webkit-linear-gradient(
    to right,
    #ffd452,
    #544a7d
  );
  background: linear-gradient(
    to right,
    #ffd452,
    #544a7d
  );*/
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.box_two:hover {
  cursor: pointer;
  transition: 0.5s ease-in-out;
  transform: scale(1.05);
}

.box_three {
  background: #659999;
  opacity: 0.3;
  /*background: -webkit-linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  );
  background: linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  );*/
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.box_three:hover {
  cursor: pointer;
  transition: 0.5s ease-in-out;
  transform: scale(1.05);
}

/*.box_four {
  background: #009fff;
  background: -webkit-linear-gradient(
    to right,
    #ec2f4b,
    #009fff
  ); 
  background: linear-gradient(
    to right,
    #ec2f4b,
    #009fff
  ); 
}*/
</style>
