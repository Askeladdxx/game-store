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
      <div class="sec-1 q-mt-xl"></div>
    </section>
  </div>
</template>

<style lang="scss">
@import "./style/homePage.scss";
</style>
<script src="./script/homePage"></script>
