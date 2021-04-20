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
      <div class="glide">
        <div class="glide__track" data-glide-el="track">
          <ul class="glide__slides">
            <li class="glide__slide">0</li>
            <li class="glide__slide">1</li>
            <li class="glide__slide">2</li>
          </ul>
        </div>
        <div class="glide__arrows" data-glide-el="controls">
          <button class="glide__arrow glide__arrow--left" data-glide-dir="<">
            prev
          </button>
          <button class="glide__arrow glide__arrow--right" data-glide-dir=">">
            next
          </button>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
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
    };
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
