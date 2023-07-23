<template>
  <div class="homepage">
    <section>
      <div class="navbar row justify-between q-mx-md q-pa-xs">
        <div class="q-ml-md">
          <a class="logo-title text-bold" href="/">bot</a>
        </div>
        <div class="flex flex-center q-mr-md">
          <div v-for="(navbtns, index) in navbtns" :key="index" class="q-mx-sm">
            <q-btn
              dense
              no-caps
              flat
              class="btn-navbar q-pa-xs text-bold"
              size="20px"
            >
              {{ navbtns }}
            </q-btn>
          </div>
        </div>
      </div>
      <div class="sec-1 q-mt-xl">
        <div class="featured-container q-ma-lg">
          <div class="featured-carousel row justify-center">
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
                <q-carousel-slide
                  :name="4"
                  class="game-image"
                  img-src="https://cdn.akamai.steamstatic.com/steam/apps/814380/capsule_616x353.jpg?t=1678991267"
                />
              </q-carousel>
            </div>

            <div class="text-container col-12 col-md-5 q-pa-md">
              <div>
                <h5 class="text-title text-center q-mb-sm">
                  {{ getSlideContent().title }}
                </h5>
                <h5 class="text-price text-center q-mt-md">
                  {{ getSlideContent().price }}
                </h5>
              </div>
              <div class="q-mx-sm">
                <p class="content-text text-justify">
                  {{ getSlideContent().text }}
                </p>
              </div>
              <div class="featured-btn-container text-center">
                <q-btn
                  no-caps
                  flat
                  v-for="button in buttons"
                  :key="button.label"
                  :icon="button.icon"
                  :label="button.label"
                  rounded
                  size="20px"
                  class="featured-btn q-pa-md q-mx-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="sec-2 q-ma-md">
        <div class="q-pa-sm q-mx-md">
          <h4 class="q-mx-md q-my-sm text-white">Games on Sale</h4>
        </div>
        <div class="card-container row justify-evenly">
          <q-card
            v-ripple
            class="my-card q-pa-md q-mb-md cursor-pointer q-hoverable"
            v-for="card in cards"
            :key="card.id"
            dense
          >
            <q-img class="card-image" :src="card.image" />
            <q-card-section class="q-py-sm q-px-none">
              <q-card-title class="card-title">
                {{ card.title }}
              </q-card-title>
            </q-card-section>
            <q-card-section class="card-price q-pa-none">
              {{ card.price }}
            </q-card-section>
            <q-card-section class="q-py-xs q-pl-none">
              <q-card-text class="">
                {{ card.developer }}
              </q-card-text>
            </q-card-section>
          </q-card>
        </div>
        <div class="free-container q-pa-md">
          <h4 class="q-mx-md q-my-xs text-white">
            <q-icon name="redeem" size="2rem" class="q-pa-md" />Free games on
            <b>bot</b>
          </h4>

          <div class="card-container row justify-evenly">
            <q-card
              v-ripple
              class="free-card cursor-pointer q-hoverable"
              v-for="card in freeCards"
              :key="card.id"
              dense
            >
              <q-img class="free-card-image" :src="card.image" />
              <q-card-section class="q-pa-md">
                <q-card-title class="card-title">
                  {{ card.title }}
                </q-card-title>
              </q-card-section>
              <q-card-section class="card-price q-mx-md q-pa-none">
                {{ card.price }}
              </q-card-section>
              <q-card-section class="q-mb-md">
                <q-card-text class="card-developer q-py-none">
                  {{ card.developer }}
                </q-card-text>
              </q-card-section>
              <q-card-section
                ><q-btn
                  icon="redeem"
                  rounded
                  class="claim-btn full-width text-white"
                  >CLAIM</q-btn
                ></q-card-section
              >
            </q-card>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="sec-3 q-mt-xl q-mx-md">
        <div class="q-pa-md" style="min-width: 100vh">
          <q-tabs
            v-model="tab"
            align="justify"
            narrow-indicator
            class="tab q-pa-md text-lg q-mb-md"
          >
            <q-tab
              no-caps
              class="text-lg"
              name="popularRelease"
              label="Popular New Releases"
            />
            <q-tab class="text-lg" name="upcoming" label="Upcoming" no-caps />
          </q-tabs>

          <div class="q-gutter-y-sm">
            <q-tab-panels
              v-model="tab"
              animated
              transition-prev="scale"
              transition-next="scale"
              class="tab-panel-container"
            >
              <q-tab-panel name="popularRelease">
                <div class="card-container row justify-evenly">
                  <q-card
                    v-ripple
                    class="tab-card q-pa-md cursor-pointer q-hoverable q-ma-xs"
                    v-for="card in cards"
                    :key="card.id"
                    flat
                  >
                    <q-img class="card-image" :src="card.image" />
                    <q-card-section class="q-py-sm q-px-none">
                      <q-card-title class="card-title">
                        {{ card.title }}
                      </q-card-title>
                    </q-card-section>
                    <q-card-section class="card-price q-pa-none">
                      {{ card.price }}
                    </q-card-section>
                    <q-card-section class="q-py-xs q-pl-none">
                      <q-card-text class="card-developer">
                        {{ card.developer }}
                      </q-card-text>
                    </q-card-section>
                  </q-card>
                </div>
              </q-tab-panel>

              <q-tab-panel name="upcoming">
                <div class="card-container row justify-evenly">
                  <q-card
                    class="tab-card q-pa-md column justify-evenly q-mb-md"
                    v-for="card in cards"
                    :key="card.id"
                    flat
                  >
                    <q-img class="card-image" :src="card.image" />
                    <q-card-section class="q-py-sm q-px-none">
                      <q-card-title class="card-title">
                        {{ card.title }}
                      </q-card-title>
                    </q-card-section>
                    <q-card-section class="card-price q-pa-none">
                      {{ card.price }}
                    </q-card-section>
                    <q-card-section class="q-py-xs q-pl-none">
                      <q-card-text class="card-developer">
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
    </section>
    <section>
      <div class="sec-4 row q-col-gutter-x-xl q-mx-md justify-center">
        <div v-for="headers in categoryHeader" :key="headers" class="col-4">
          <div class="q-pa-md">
            <h3 class="text-white">{{ headers }}</h3>

            <div class="category-card-container">
              <q-card
                v-ripple
                class="category-cards q-pa-md column justify-evenly q-mb-md text-white cursor-pointer q-hoverable"
                v-for="card in categoryCards"
                :key="card.id"
                flat
              >
                <div class="flex q-pa-md">
                  <div class="q-pa-md">
                    <q-img class="card-image" :src="card.image" />
                  </div>
                  <div class="q-mt-lg">
                    <q-card-section class="q-py-sm q-px-none">
                      <q-card-title class="card-title">
                        {{ card.title }}
                      </q-card-title>
                    </q-card-section>
                    <q-card-section class="card-price q-pa-none">
                      {{ card.price }}
                    </q-card-section>
                    <q-card-section class="q-py-xs q-pl-none">
                      <q-card-text class="card-developer">
                        {{ card.developer }}
                      </q-card-text>
                    </q-card-section>
                    <q-card-section
                      class="q-pt-xs q-pb-xs q-pl-none card-game-category"
                    >
                      <p class="q-mb-xs">Category:</p>
                      <q-btn
                        flat
                        no-caps
                        size="sm"
                        v-for="category in card.gameCategory"
                        :key="category"
                        class="q-pa-xs q-mr-sm category-actions"
                      >
                        {{ category }}
                      </q-btn>
                    </q-card-section>
                  </div>
                </div>
              </q-card>
            </div>
            <div class="view-more">
              <q-btn color="white" flat @click="onClick" label="View more">
                <div class="q-gutter-xs">
                  <q-icon name="keyboard_arrow_right" />
                </div>
              </q-btn>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="footer q-pa-md q-mt-xl">
      <div>
        <h3 class="text-weight-bold q-mb-sm">bot</h3>
        <q-separator />
        <div class="row q-col-gutter-x-md justify-center">
          <div class="col-4 q-pa-md">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              molestias possimus illo quos ab accusamus, excepturi rem nesciunt
              nihil praesentium error sequi cupiditate necessitatibus, assumenda
              minus. Dignissimos officiis cum perferendis?
            </p>

            <a href="" class="links">About Bot</a>
          </div>
          <div class="col-4 q-pa-md">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              molestias possimus illo quos ab accusamus, excepturi rem nesciunt
              nihil praesentium error sequi cupiditate necessitatibus, assumenda
              minus. Dignissimos officiis cum perferendis?
            </p>
            <a href="" class="links">Contacts</a>
          </div>
          <div class="col-4 q-pa-md">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
              molestias possimus illo quos ab accusamus, excepturi rem nesciunt
              nihil praesentium error sequi cupiditate necessitatibus, assumenda
              minus. Dignissimos officiis cum perferendis?
            </p>
            <a href="" class="links">Support</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import "./style/discover.scss";
</style>
<script src="./script/discover"></script>
