<template>
    <div class="result_container">
        <h3>Result</h3>
        <hr />
        <div class="results">
            <div class="first_column_results">
                <ResultItem FileImg="fast.png" ResultText="Download: 100mps(fast)"/>
                <ResultItem FileImg="wireless.png" ResultText="Connection Type: 4G"/>
                <ResultItem FileImg="ip.png" ResultText="IP Address: 192.168.105.5"/>
            </div>

            <div class="second_column_results">
                <ResultItem FileImg="fast.png" ResultText="Upload: 100mps(fast)"/>
                <ResultItem FileImg="security.png" ResultText="Protected With HTTPS"/>
                <ResultItem FileImg="link.png" ResultText="Ping: 60ms"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import ResultItem from '@/components/ResultItem.vue'; 
    export default {
        name: 'ResultView',
        components: {
            ResultItem,
        }
    }
</script>

<style scoped>
    @import url('@/assets/css/result.css');
</style>