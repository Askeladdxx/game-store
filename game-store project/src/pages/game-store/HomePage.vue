<template>
  <section>
    <div class="navbar row justify-between q-mx-lg q-mt-md">
      <div class="flex flex-center">
        <!-- <q-img
        class="navbar-logo q-mr-sm"
        src="https://scontent.fmnl9-1.fna.fbcdn.net/v/t1.15752-9/358816589_962559958161259_5649692621280805571_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeGdkrL6Ogqt72vmzmzGpAwo5TyHM5Y6kQ_lPIczljqRDxAqSbUHHqVILOsxbKVc1K2BJ6nUWqU7aF5CqdJvPRDP&_nc_ohc=V9zcfjdnu14AX_vHfil&_nc_ht=scontent.fmnl9-1.fna&oh=03_AdQ8ht69lBwLyQl9cuewDvrZKOhCbAwQHtoy70XDveXTiQ&oe=64D318C0"
      /> -->
        <a class="logo-title text-white text-bold" href="/">bot</a>
      </div>
      <div class="flex flex-center">
        <div v-for="(navbtns, index) in navbtns" :key="index" class="q-mx-sm">
          <q-btn dense no-caps flat class="btn-navbar q-pa-xs text-white">
            {{ navbtns }}
          </q-btn>
        </div>
      </div>
    </div>

    <div class="featured-container q-pa-md">
      <h3 class="text-white q-mb-none q-ml-lg">Discover</h3>
      <div class="featured-carousel row justify-between q-ma-md">
        <div class="q-pa-md col-7">
          <q-carousel
            class="game-slides"
            swipeable
            animated
            v-model="slide"
            thumbnails
            infinite
            :autoplay="autoplay"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
          >
            <q-carousel-slide
              :name="1"
              class="game-image"
              img-src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/05/22/metal-gear-solid-3-remake-details-e1685006293427.jpg"
            />
            <q-carousel-slide
              :name="2"
              class="game-image"
              img-src="https://www.devilmaycry.com/5/assets/img/common/share.png"
            />
            <q-carousel-slide
              :name="3"
              class="game-image"
              img-src="https://media.vandal.net/i/1200x630/2-2023/202321112364948_1.jpg"
            />
          </q-carousel>
        </div>

        <div class="text-container col-5 q-pa-md">
          <div>
            <h5 class="text-title text-white text-center">
              {{ getSlideTitle() }}
            </h5>
          </div>
          <div class="q-mx-sm">
            <p class="content-text text-justify text-white">
              {{ getSlideText() }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
@import "./style/homePage.scss";
</style>
<script src="./script/homePage"></script>
