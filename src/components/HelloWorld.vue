<template>
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
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<style scoped>
.content {
  margin: auto;
  justify-content: center;
  width: 1200px;
  margin-top: 160px;
}

.big_box {
  display: flex;
  width: 100%;
  height: 500px;
  margin: auto;
  margin-bottom: 100px;
  background-color: #501b1d;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
  font-size: 40px;
  font-weight: bold;
}

.left {
  width: 440px;
  height: 440px;
  background-color: #64485c;
  color: #64485c;
  border-radius: 50%;
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
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  transition: 0.5s ease-in-out;
  font-size: 40px;
  font-weight: bold;
}

.small_box:hover {
  cursor: pointer;
  transform: scale(1.05);
}
</style>
