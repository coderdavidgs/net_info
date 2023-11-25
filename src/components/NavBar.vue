<template>
    <nav>
      <router-link to="/" class="nav-item">Home</router-link>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'NavBar',
    });
</script>