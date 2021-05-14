<template>
  <button class="card">
    <div class="row clearfix">
      <div class="left big">070 606 10 91</div>
      <div class="right">
        <p>
          <span class="big">P</span>ierce &amp; <span class="big">P</span>ierce
        </p>
        <p>
          <span class="med no-space">M</span
          ><span class="small no-space">ergers and </span
          ><span class="med no-space">A</span
          ><span class="small no-space">cquisitions</span>
        </p>
      </div>
    </div>
    <div class="row">
      <p>
        <span class="big">C</span>hristian <span class="big">Benjaminsson</span>
      </p>
      <p><span class="big">S</span>ystem <span class="big">D</span>eveloper</p>
    </div>
    <div class="row-end">
      <p>
        <span class="med">christian.benjaminsson@outlook.com</span>
      </p>
    </div>
  </button>
  <!--<content>
    <div class="business_card">
      <div class="title">Driven systemutvecklare</div>
      <div class="profile_img">
        <img src="../assets/profile_pic.jpg" alt="" />
      </div>
    </div>
  </content>-->
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
/*
  Hover and click on the card for animations!
*/

@import url(https://fonts.googleapis.com/css?family=Cormorant+Garamond);

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  font-family: "Cormorant Garamond", serif;
  text-transform: uppercase;
  box-sizing: inherit;
  font-size: 10.5px;
  letter-spacing: 1px;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5),
    -1px -1px 1px rgba(179, 179, 179, 0.5), 1px 1px 0 rgba(255, 255, 255, 0.55),
    0 1px 3px white;
  overflow: hidden;
  color: #191919;
  background-color: rgb(199, 204, 204);
}

button {
  display: block;
  position: relative;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  text-transform: inherit;
  letter-spacing: inherit;
  text-shadow: inherit;
  cursor: pointer;
  outline: inherit;
  z-index: 10;
}

.clearfix::after {
  content: "";
  clear: both;
  display: table;
}

.big {
  font-size: 150%;
}

.no-space {
  letter-spacing: 0px;
}

.card {
  background-color: #f4f1eb;
  height: 200px;
  width: 350px;
  margin: 20vh auto 0 auto;
  padding: 20px 10px 10px 10px;
  transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg);
  /*transform-origin: 50% 100%;*/
  box-shadow: 0;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.card:hover {
  cursor: pointer;
  transform: rotateX(60deg) rotateY(0deg) rotateZ(45deg) translateZ(10px);
  box-shadow: 20px 20px 20px rgba(0, 0, 0, 0.4);
}

.card:focus {
  transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(10px);
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.4);
}

.card:focus::before {
  transform: skewX(0deg) translateX(0px) translateY(0px);
  height: 0px;
}

.card:focus::after {
  transform: skewY(0deg) translateX(0px) translateY(0px);
  width: 0px;
}

.card::before,
.card::after {
  content: "";
  position: absolute;
  display: block;
  background-color: grey;
  transition: transform 0.4s ease, height 0.4s ease, width 0.4s ease;
}

.card::before {
  width: 100%;
  height: 6px;
  bottom: 0;
  left: 0;
  transform: skewX(45deg) translateX(-3px) translateY(6px);
}

.card::after {
  height: 100%;
  width: 6px;
  top: 0;
  right: 0;
  transform: skewY(45deg) translateX(6px) translateY(-3px);
}

.row {
  display: block;
  text-align: center;
}

.row:nth-child(2) {
  margin: 35px 0 50px 0;
}

.left {
  float: left;
}

.right {
  float: right;
}

p {
  margin: 0;
}

.row-end {
  margin-bottom: 10px !important;
}

/* content {
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
} */
</style>
