<template>
  <button class="card">
    <div class="row clearfix"></div>
    <div class="row">
      <p>
        <span class="big">C</span>hristian <span class="big">Benjaminsson</span>
      </p>
      <p><span class="big">S</span>ystem <span class="big">D</span>eveloper</p>
    </div>
    <div class="row-end">
      <p class="big">070 606 10 91</p>
      <p class="med">christian.benjaminsson@outlook.com</p>
    </div>
  </button>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
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
  overflow: hidden;
  color: #191919;
}

button {
  display: block;
  position: relative;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  text-transform: inherit;
  font-size: 12px;
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
  margin: 25px 0 30px 0;
}

p {
  margin: 0;
}

.row-end {
  margin-bottom: 10px;
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
