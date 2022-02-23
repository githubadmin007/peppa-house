<template>
    <n-grid :x-gap="12" :y-gap="8" :cols="4">
        <n-gi v-for="scheme in schemeList" :key="scheme.schemeName">
            <Overview :scheme="scheme" @click="schemeClickHandle(scheme)"></Overview>
        </n-gi>
    </n-grid>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { schemeList, Scheme } from '@/hooks';
import Overview from './Overview.vue';

const router = useRouter();

function schemeClickHandle(scheme: Scheme) {
    router.push(`/Scheme/Editor/${scheme.schemeName}`);
}
</script>

<style scoped>
.scheme-selector {
    width: 300px;
    margin: 10px;
    position: absolute;
    top: 0px;
    right: 0px;
    text-align: left;
}
</style>
