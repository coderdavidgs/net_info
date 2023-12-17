<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
    <div class="result_container">
        <h3>Result</h3>
        <hr />
        <div class="results" v-if="loadingDataResult">
                <div class="first_column_results">
                    <ResultItem FileImg="fast.png" :ResultText="`Download velocity: ${download} (average)`"/>
                    <ResultItem FileImg="ip.png" :ResultText="`IP Address: ${ip} (public)`"/>
                </div>
    
                <div class="second_column_results">
                    <ResultItem FileImg="security.png" :ResultText="protocol"/>
                    <ResultItem FileImg="link.png" :ResultText="`Ping: ${ping}`"/>
                </div>
        </div>
        <div v-else class="loading">
            <img src="@/assets/imgs/loading.gif" alt="loading" />
        </div>
    </div>
</template>

<script lang="ts">
    import ResultItem from '@/components/ResultItem.vue';
    import { getIp, getDownloadVelocity, getPing, verifyIfUseHTTPS } from '@/services/connectionData';
    import { defineComponent } from 'vue';
    import { ResultData } from '@/types/resultDataType';

    export default defineComponent ({
        name: 'ResultView',
        
        components: {
            ResultItem,
        },

        computed: {
           loadingDataResult() {
            if(this.ip == '' && this.download == '' && this.ping == '' && this.protocol == ''){
                return false;
            }
            return true;
           }, 
        },

        data() {
            return {
                ip: '',
                download: '',
                ping: '',
                protocol: '',
            } as ResultData;
        },

        async mounted() {
            this.ip = await getIp();
            this.download = await getDownloadVelocity();
            this.measurePing();
            this.protocol = verifyIfUseHTTPS();
        },

        methods: {
            async measurePing() {
                const urlForPing = 'https://www.google.com.br';

                try {
                    const pingTime = await getPing(urlForPing);
                    this.ping = `${pingTime}ms`;
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (error: any) {
                    console.error(`Error in try to measure ping: ${error.message}`)
                }
            },
        },
    })
        
</script>

<style scoped>
    @import url('@/assets/css/result.css');
</style>