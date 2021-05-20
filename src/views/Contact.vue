<template>
  <div class="contact_content">
    <div class="card_section">
      <button class="card">
        <div class="row clearfix"></div>
        <div class="row">
          <p>
            <span class="big">C</span>hristian
            <span class="big">Benjaminsson</span>
          </p>
          <p>
            <span class="big">S</span>ystem <span class="big">D</span>eveloper
          </p>
        </div>
        <div class="row-end">
          <p class="big">070 606 10 91</p>
          <p class="med">christian.benjaminsson@outlook.com</p>
        </div>
      </button>
    </div>
    <div class="contact_section">
      <form action="">
        <label for="first_name">First name</label>
        <input type="text" />
        <label for="last_name">Last name</label>
        <input type="text" />
        <label for="email">Email</label>
        <input type="text" />

        <label for="message">Message</label>
        <textarea name="message" id="message"></textarea>

        <input id="send_button" type="submit" value="Send" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Cormorant+Garamond);

.contact_content {
  display: block;
}

.card_section {
  margin-bottom: 100px;
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

.contact_section {
  width: 60%;
  margin: auto;
}

label {
  float: left;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  outline: none;
}

input[type="submit"] {
  background-color: #04aa6d;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: #45a049;
}

textarea {
  width: 100%;
  height: 100px;
}

#send_button {
  width: 20%;
  margin-top: 20px;
  float: right;
}
</style>
