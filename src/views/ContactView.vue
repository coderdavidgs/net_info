<template>
    <div class="contact_container">
        <div class="header_contact">
            <h3>Contact</h3>
            <hr>
        </div>
        <div class="form_contact">
            <ContactForm />
        </div>
    </div>
</template>

<script lang="ts">
    import ContactForm from '@/components/ContactForm.vue'; 
    export default {
        name: 'ContactView',
        components: {
            ContactForm,
        }
    }
</script>

<style scoped>
    @import url('@/assets/css/contact.css');
</style>