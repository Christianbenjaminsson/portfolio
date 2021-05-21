<template>
  <body>
    <div class="content">
      <div class="big_box">
        <div class="left"><p>TEXT</p></div>
        <div class="right"><p>PICTURE</p></div>
      </div>
      <div class="flex">
        <div class="small_box"><p>TEXT</p></div>
        <div class="small_box"><p>TEXT</p></div>
        <div class="small_box"><p>TEXT</p></div>
      </div>
      <div class="big_box">
        <div class="left"><p>TEXT</p></div>
        <div class="right"><p>PICTURE</p></div>
      </div>
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
  width: 1000px;
  margin: auto;
  display: block;
  font-size: 40px;
  font-weight: bold;
}

.big_box {
  display: flex;
  width: 1000px;
  height: 500px;
  background-color: lightgrey;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
}

.left {
  width: 420px;
  height: 380px;
  background-color: grey;
}

.right {
  width: 420px;
  height: 380px;
  background-color: lightgrey;
}

.flex {
  display: flex;
  margin-bottom: 100px;
  align-items: center;
  justify-content: space-around;
}

.small_box {
  border-radius: 30px;
  height: 250px;
  width: 300px;
  background: #ffffff;
  opacity: 0.3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  transition: 0.5s ease-in-out;
}

.small_box:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
