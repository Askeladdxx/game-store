<template>
  <div class="homepage">
    <section>
      <div class="sec-1">
        <div class="navbar row justify-between q-ma-md q-pa-xs">
          <div class="q-ml-md">
            <a class="logo-title text-bold" href="/">bot</a>
          </div>
          <div class="flex flex-center q-mr-md">
            <div class="navbtn-containers">
              <q-btn
                v-for="button in navbuttons"
                :key="button.label"
                dense
                no-caps
                flat
                class="btn-navbar q-pa-xs text-bold q-mx-md"
                size="20px"
                :to="button.route"
              >
                {{ button.label }}
              </q-btn>
            </div>
          </div>
        </div>
        <div class="video-container">
          <div class="fade-in-element q-pa-md">
            <q-parallax :height="720">
              <template v-slot:media>
                <video width="1920" height="1080" autoplay loop muted>
                  <source
                    type="video/webm"
                    src="https://www.pexels.com/download/video/11354070/?fps=60.0&h=1080&w=1920"
                  />
                  <source
                    type="video/mp4"
                    src="https://www.pexels.com/download/video/11354070/?fps=60.0&h=1080&w=1920"
                  />
                </video>
              </template>
              <div class="text-container text-white">
                <h1 class="fade-in-element2 text-bold">bot</h1>
                <h4 class="fade-in-element3">hahahhah</h4>
              </div>
            </q-parallax>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="sec-2"></div>
    </section>
  </div>
</template>

<style lang="scss">
@import "./style/homePage.scss";
</style>
<script src="./script/homePage"></script>
