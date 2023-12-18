<template>
    <div class="form_container">
        <form v-show="send">
            <span>Name: </span>
            <input type="text" />
            <br />

            <span>Email: </span>
            <input type="email" />
            <br />

            <span>Message: </span>
            <textarea cols="30" rows="10">

            </textarea>

            <button type="button" @click="sendEmail">Send</button>
        </form>
        <div class="message_send" v-show="!send">
            Your message send to the owner. (this functionalitty is not created but is the added in future)
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

    type ContactData = {
        send: boolean;
    }

    export default defineComponent({
        name: 'ContactForm',
        data: () => {
            return {
                send: true,
            } as ContactData
        },
        methods: {
            sendEmail() {
                this.send = !this.send;
                setTimeout(() => {
                    this.send = !this.send;
                }, 5000)
            }
        }
    })
</script>

<style scoped>
    @import url('@/assets/css/contact.css');
</style>