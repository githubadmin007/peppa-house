<template>
    <n-form :label-width="80" label-placement="left" inline>
        <n-form-item label="项目名">
            <n-input v-model:value="schemeItem.itemName" placeholder="输入项目名" />
        </n-form-item>
        <n-form-item label="区域">
            <n-input v-model:value="schemeItem.region" placeholder="输入区域" />
        </n-form-item>
        <n-form-item label="数量">
            <n-input-number v-model:value="schemeItem.count" placeholder="输入数量" :min="0" />
        </n-form-item>
        <n-form-item label="人工费">
            <n-input-number v-model:value="schemeItem.laborCost" placeholder="输入人工费" :min="0" />
        </n-form-item>
        <n-form-item label="材料费">
            <n-input-number v-model:value="schemeItem.materialCost" placeholder="输入材料费" :min="0" />
        </n-form-item>
        <n-form-item label="备注">
            <n-input v-model:value="schemeItem.remark" placeholder="输入备注" />
        </n-form-item>
    </n-form>
</template>

<script lang="ts" setup>
import { defineProps, reactive, toRefs } from 'vue';
import { SchemeItem } from '@/hooks/configs/scheme';

const props = defineProps<{
    value: SchemeItem
}>();

const schemeItem = reactive(props.value);
</script>

