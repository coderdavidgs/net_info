<template>
    <div class="item_result">
        <img :src="require(`@/assets/imgs/${FileImg}`)" alt="image" />{{ ResultText }}
    </div>
</template>

<script lang="ts">
    export default {
        name: 'ResultItem',
        props: {
            ResultText: {
                Type: String,
                default: '',
            },
            FileImg: {
                Type: String,
                default: '',
            },
        },
    }
</script>

<style scoped>
    @import url('@/assets/css/result.css');
</style>