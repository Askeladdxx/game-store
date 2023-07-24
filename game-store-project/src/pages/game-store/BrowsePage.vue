<template>
  <div class="BrowsePage">
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
      <div class="sec-1">
        <div class="q-px-md">
          <h4 class="text-white">Category</h4>
        </div>
      </div>
    </section>
    <section>
      <div class="sec-2"></div>
    </section>
  </div>
</template>

<style lang="scss">
@import "./style/browsePage.scss";
</style>
<script src="./script/homePage"></script>
