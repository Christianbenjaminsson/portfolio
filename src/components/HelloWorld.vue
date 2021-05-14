<template>
  <body>
    <div class="content">
      <div class="box_one" id="squares"></div>
      <div class="box_two" id="squares"></div>
      <div class="box_three" id="squares"></div>
    </div>
  </body>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style scoped>
.content {
  min-height: 80%;
  width: 1000px;
  margin: auto;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

#squares {
  border-radius: 30px;
  height: 250px;
  width: 300px;
}

.box_one {
  background: #ffffff;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  transition: 0.5s ease-in-out;
}

.box_one:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.box_two {
  background: #ffffff;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  transition: 0.5s ease-in-out;
}

.box_two:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.box_three {
  background: #ffffff;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  transition: 0.5s ease-in-out;
}

.box_three:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
