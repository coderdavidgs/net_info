<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
    <div class="result_container">
        <h3>Result</h3>
        <hr />
        <div class="results">
            <div class="first_column_results">
                <ResultItem FileImg="fast.png" ResultText="Download: 100mps(fast)"/>
                <ResultItem FileImg="ip.png" ResultText="IP Address: 192.168.105.5"/>
            </div>

            <div class="second_column_results">
                <ResultItem FileImg="security.png" ResultText="Protected With HTTPS"/>
                <ResultItem FileImg="link.png" ResultText="Ping: 60ms"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import ResultItem from '@/components/ResultItem.vue';
    import { getIp, getDownloadVelocity, getPing, verifyIfUseHTTPS } from '@/services/connectionData';
    import { defineComponent } from 'vue';

    type DataPropertieComponent = {
        ip: string;
        download: string;
        ping: string;
        protocol: string;
    };

    export default defineComponent ({
        name: 'ResultView',
        
        components: {
            ResultItem,
        },

        data() {
            return {
                ip: '',
                download: '',
                ping: '',
                protocol: '',
            } as DataPropertieComponent;
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