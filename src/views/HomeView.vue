<template>
  <div class="main">
    <div class="image-home">
      <img src="@/assets/imgs/homeImage.png" alt="welcome">
    </div>
    <div class="items-home">
      <h2>You'll know:</h2>
      <div class="btns-items-home">
        <ul>
          <li>Public IP</li>
          <li>Connection Type</li>
          <li>Speed Connection</li>
        </ul>
        ...and more
      </div>
      <div class="btn-start">
        <router-link to="/">
          Start <img src="@/assets/imgs/arrow.png" alt="start">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  components: {
  },
});
</script>

<style>
  @import url('@/assets/css/home.css');
</style>
