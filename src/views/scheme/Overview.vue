<template>
    <n-card :title="scheme.schemeName">
        <n-descriptions label-placement="left" bordered :column="2">
            <n-descriptions-item label="设计师">{{ scheme.provider }}</n-descriptions-item>
            <n-descriptions-item label="总价">{{ scheme.totalPrice }}</n-descriptions-item>
            <n-descriptions-item label="备注">{{ scheme.remark }}</n-descriptions-item>
        </n-descriptions>
    </n-card>
</template>

<script lang="ts" setup>
import { onBeforeMount, defineProps, reactive } from 'vue';
import { Scheme } from '@/hooks/configs/scheme';

const props = defineProps<{
    scheme: Scheme
}>();

const { scheme } = reactive(props);

scheme.refreshSchemeItems();

</script>

<style scoped>
</style>
