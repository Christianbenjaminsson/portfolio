<template>
  <body>
    <div class="header">
      <div class="menu">
        <ul>
          <li><a href="./home-page.vue">Home</a></li>
          <li><a href="./about-page.vue">About</a></li>
          <li><a href="./cv-page.vue">CV</a></li>
          <li><a href="./contact-page.vue">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="content">
      <carousel @next="next" @prev="prev">
        <carousel-slide
          v-for="(slide, index) in slides"
          :key="slide"
          :index="index"
          :visibleSlide="visibleSlide"
          :direction="direction"
        >
          <img :src="slide" />
        </carousel-slide>
      </carousel>
    </div>
  </body>
</template>

<script>
import carousel from "./carousel";
import carouselSlide from "./carouselSlide";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      slides: [
        "https://picsum.photos/id/237/600/350",
        "https://picsum.photos/id/236/600/350",
        "https://picsum.photos/id/235/600/350",
        "https://picsum.photos/id/234/600/350",
      ],
      visibleSlide: 0,
      direction: "left",
    };
  },
  computed: {
    slidesLen() {
      return this.slides.length;
    },
  },
  methods: {
    next() {
      if (this.visibleSlide >= this.slidesLen - 1) {
        this.visibleSlide = 0;
      } else {
        this.visibleSlide++;
      }
      this.direction = "left";
    },
    prev() {
      if (this.visibleSlide <= 0) {
        this.visibleSlide = this.slidesLen - 1;
      } else {
        this.visibleSlide--;
      }
      this.direction = "right";
    },
  },
  components: {
    carousel,
    carouselSlide,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  margin: auto;
  height: 100%;
}

.header {
  height: 40px;
}

.menu ul {
  list-style: none;
  text-align: center;
}

.menu li {
  display: inline;
  margin-right: 15px;
}

.menu a {
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  color: black;
}

.menu a:hover {
  border-bottom: 1px solid black;
}

.content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
