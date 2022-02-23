<template>
    <n-card :title="`${name}(${totalCost}元)`">
        <n-grid x-gap="12" y-gap="12" :cols="1">
            <n-gi v-for="item in items" :key="item">
                <ItemEditor :value="item"></ItemEditor>
            </n-gi>
        </n-grid>
    </n-card>
</template>

<script lang="ts" setup>
import { computed, defineProps, reactive } from 'vue';
import { SchemeItem } from '@/hooks/configs/scheme';
import ItemEditor from './ItemEditor.vue';

const props = defineProps<{
    name: string;
    items: SchemeItem[]
}>();

const { name, items } = reactive(props);

const totalCost = computed(() => {
    return items.map(item => item.totalCost).$sum();
});

</script>
