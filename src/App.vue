<template>
    <nav>
      <div class="nav-items">
        <router-link to="/" class="nav-text">Home</router-link>

        <router-link to="/about" class="nav-text">About</router-link>

        <router-link to="/" class="nav-text">
          <span class="nav-logo">
            <img src="./assets/imgs/logo.png" alt="net info">
            netINFO
          </span>
        </router-link>

        <router-link to="/" class="nav-text">Tests</router-link>

        <router-link to="/" class="nav-text">Contact</router-link>
      </div>
    </nav>
  <router-view/>
</template>

<style>
 @import url('./assets/css/style.css');
</style>
