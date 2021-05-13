<template>
  <content>
    <div class="business_card">
      <div class="title">Driven systemutvecklare</div>
      <div class="profile_img">
        <img src="../assets/profile_pic.jpg" alt="" />
      </div>
    </div>
  </content>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
content {
  display: flex;
  justify-content: center;
  min-height: 100%;
}

.business_card {
  display: grid;
  grid-template-columns: 2repeat (auto, auto, auto);
  grid-template-rows: 3repeat (auto, auto, auto);
  border: 1px solid black;
  border-radius: 30px;
  width: 700px;
  height: 300px;
  padding: 30px;
  margin-top: 70px;
}

.title {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 30px;
  text-align: left;
  font-weight: bold;
  color: rgba(30, 139, 195, 1);
}

img {
  height: 140px;
  width: 140px;
}

.profile_img {
  grid-column-start: 6;
  grid-column-end: 6;
}
</style>
