<template>
    <div class="form_container">
        <form>
            <span>Name: </span>
            <input type="text" />
            <br />

            <span>Email: </span>
            <input type="email" />
            <br />

            <span>Message: </span>
            <textarea cols="30" rows="10">

            </textarea>

            <button type="button">Send</button>
        </form>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'ContactForm'
    }
</script>

<style scoped>
    @import url('@/assets/css/contact.css');
</style>