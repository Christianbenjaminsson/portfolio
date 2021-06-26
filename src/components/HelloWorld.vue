<template>
  <div class="content">
    <div class="big_box">
      <div class="introduction">
        <p style="color: #adadad; font-size: 36px"><b>VÄLKOMMEN!</b></p>
        <p style="font-size: 24px; color: #adadad">
          <b>Driven</b> junior systemutvecklare som gillar att
          <b>utvecklas</b> och testa på nya <b>tekniker</b>.
        </p>
        <button class="intro_button">
          <a
            href="mailto: christian.benjaminsson@outlook.com"
            style="text-decoration: none; color: black"
          ></a
          >kontakt
        </button>
      </div>
      <div class="right">
        <img src="@/assets/profile_pic.png" alt="" class="profile_img" />
      </div>
    </div>
    <div class="big_box">
      <div class="left">
        <p>
          E-handel byggd i React. Med Redux, Hooks, GraphQL, ContextAPI, Stripe,
          Firebase
        </p>
      </div>
      <div class="right">
        <img src="@/assets/crown.png" alt="" class="right_img" />
      </div>
    </div>
    <div class="flex">
      <div class="small_box"><p>TEXT</p></div>
      <div class="small_box"><p>TEXT</p></div>
      <div class="small_box"><p>TEXT</p></div>
    </div>
    <div class="big_box">
      <div class="left">
        <p>
          Skolprojekt där vi byggde en att-göra applikation för att tilldela och
          acceptera serviceorder.
        </p>
      </div>
      <div class="right">
        <img src="@/assets/todo_mobile.png" alt="" class="right_img" />
      </div>
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

.introduction {
  width: 440px;
  height: 440px;
  justify-content: center;
  align-items: center;
}

b {
  color: #64485c;
}

.intro_button {
  margin-top: 35px;
  padding: 18px 55px;
  border: none;
  font-size: 20px;
  transition: 0.3s ease-in-out;
  background-color: lightgrey;
}

.intro_button:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.big_box {
  display: flex;
  width: 100%;
  height: 500px;
  margin: auto;
  margin-bottom: 100px;
  background-color: #ffffff;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
}

.left {
  width: 500px;
  height: 365px;
  background-color: #64485c;
  opacity: 0.2;
  color: #ffffff;
  border-radius: 20px;
  padding: 10px;
  font-size: 40px;
}

.right {
  width: 520px;
  height: 380px;
}

.right_img {
  width: 500px;
  height: 380px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.profile_img {
  width: 300px;
  height: 400px;
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
