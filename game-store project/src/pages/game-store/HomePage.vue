<template>
  <section>
    <div class="navbar row justify-between q-mx-lg q-pa-xs">
      <div class="flex flex-center">
        <a class="logo-title text-white text-bold" href="/">bot</a>
      </div>
      <div class="flex flex-center">
        <div v-for="(navbtns, index) in navbtns" :key="index" class="q-mx-sm">
          <q-btn
            dense
            no-caps
            flat
            class="btn-navbar q-pa-xs text-white text-bold"
            size="20px"
          >
            {{ navbtns }}
          </q-btn>
        </div>
      </div>
    </div>
    <div class="sec-1 q-pa-md">
      <div class="featured-container q-mx-md q-pa-md">
        <div class="featured-carousel row justify-between">
          <div class="q-pa-md col-12 col-md-7">
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

          <div class="text-container col-12 col-md-5 q-pa-md">
            <div>
              <h5 class="text-title text-white text-center q-mb-sm">
                {{ getSlideContent().title }}
              </h5>
              <h5 class="text-price text-white text-center q-mt-md">
                {{ getSlideContent().price }}
              </h5>
            </div>
            <div class="q-mx-sm">
              <p class="content-text text-justify text-white">
                {{ getSlideContent().text }}
              </p>
            </div>
            <div class="featured-btn-container text-center">
              <q-btn
                no-caps
                v-for="button in buttons"
                :key="button.label"
                :icon="button.icon"
                :label="button.label"
                flat
                rounded
                size="20px"
                class="text-white q-pa-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="sec-2">
      <div class="q-pa-sm q-mx-md">
        <h4 class="text-white q-mb-none q-mt-sm">Games on Sale</h4>
      </div>
      <div class="card-container row justify-evenly">
        <q-card
          class="my-card q-pa-md"
          v-for="card in cards"
          :key="card.id"
          flat
        >
          <q-img class="card-image" :src="card.image" />
          <q-card-section class="q-pb-none">
            <q-card-title class="card-title text-white">
              {{ card.title }}
            </q-card-title>
          </q-card-section>
          <q-card-section class="card-price q-mx-md q-pa-none text-white">
            {{ card.price }}
          </q-card-section>
          <q-card-section class="q-mb-md">
            <q-card-text class="text-white">
              {{ card.developer }}
            </q-card-text>
          </q-card-section>
        </q-card>
      </div>
      <div class="free-container q-pa-sm q-mx-md q-ma-sm">
        <h5 class="text-white q-mx-md q-my-sm">
          <q-icon name="redeem" size="2rem" class="q-px-md q-mb-none" />Free
          games on
          <b>bot</b>
        </h5>

        <div class="card-container row justify-evenly">
          <q-card
            class="free-card q-ma-sm"
            v-for="card in freeCards"
            :key="card.id"
            flat
          >
            <q-img class="free-card-image" :src="card.image" />
            <q-card-section class="q-pa-md">
              <q-card-title class="card-title text-white">
                {{ card.title }}
              </q-card-title>
            </q-card-section>
            <q-card-section class="card-price q-mx-md q-pa-none text-white">
              {{ card.price }}
            </q-card-section>
            <q-card-section class="q-mb-md">
              <q-card-text class="text-white q-py-none">
                {{ card.developer }}
              </q-card-text>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="sec-3 q-pa-md">
      <div class="q-pa-md">
        <div style="min-width: 100vh">
          <q-tabs
            v-model="tab"
            align="justify"
            narrow-indicator
            class="q-mb-lg"
          >
            <q-tab
              no-caps
              class="text-white"
              name="popularRelease"
              label="Popular New Releases"
            />
            <q-tab
              class="text-white"
              name="upcoming"
              label="Upcoming"
              no-caps
            />
          </q-tabs>

          <div class="q-gutter-y-sm">
            <q-tab-panels
              v-model="tab"
              animated
              transition-prev="scale"
              transition-next="scale"
              class="tab-panel-container text-white"
            >
              <q-tab-panel name="popularRelease">
                <div class="card-container row justify-evenly">
                  <q-card
                    class="tab-card"
                    v-for="card in cards"
                    :key="card.id"
                    flat
                  >
                    <q-img class="card-image" :src="card.image" />
                    <q-card-section class="q-pb-none">
                      <q-card-title class="card-title text-white">
                        {{ card.title }}
                      </q-card-title>
                    </q-card-section>
                    <q-card-section
                      class="card-price q-mx-md q-pa-none text-white"
                    >
                      {{ card.price }}
                    </q-card-section>
                    <q-card-section class="q-mb-md">
                      <q-card-text class="text-white">
                        {{ card.developer }}
                      </q-card-text>
                    </q-card-section>
                  </q-card>
                </div>
              </q-tab-panel>

              <q-tab-panel name="upcoming">
                <div class="card-container row justify-evenly">
                  <q-card
                    class="tab-card"
                    v-for="card in cards"
                    :key="card.id"
                    flat
                  >
                    <q-img class="card-image" :src="card.image" />
                    <q-card-section class="q-pb-none">
                      <q-card-title class="card-title text-white">
                        {{ card.title }}
                      </q-card-title>
                    </q-card-section>
                    <q-card-section
                      class="card-price q-mx-md q-pa-none text-white"
                    >
                      {{ card.price }}
                    </q-card-section>
                    <q-card-section class="q-mb-md">
                      <q-card-text class="text-white">
                        {{ card.developer }}
                      </q-card-text>
                    </q-card-section>
                  </q-card>
                </div>
              </q-tab-panel>
            </q-tab-panels>
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
