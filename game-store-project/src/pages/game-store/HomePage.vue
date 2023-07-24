<template>
  <div class="homepage">
    <section>
      <div class="navbar row justify-between q-mx-md q-pa-xs">
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
      <div class="sec-1 q-mt-xl"></div>
    </section>
  </div>
</template>

<style lang="scss">
@import "./style/homePage.scss";
</style>
<script src="./script/homePage"></script>
