<template>
    分组方式：
    <n-radio-group v-model:value="groupField" name="radiogroup">
        <n-space>
            <n-radio
                v-for="field in groupFields"
                :key="field.value"
                :value="field.value"
            >{{ field.label }}</n-radio>
        </n-space>
    </n-radio-group>

    <ItemEditorGroup
        v-for="(items, name) in groupData"
        :key="name"
        :name="name.toString()"
        :items="items"
    ></ItemEditorGroup>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getScheme } from '@/hooks/configs/scheme';
import ItemEditorGroup from './ItemEditorGroup.vue';

const route = useRoute();

const schemeName = route.params.schemeName as string;

const scheme = getScheme(schemeName);
scheme?.refreshSchemeItems();

/** 分组方式 */
const groupFields: Array<{ label: string; value: 'itemName' | 'region' }> = reactive([
    { label: '项目', value: 'itemName' },
    { label: '区域', value: 'region' },
]);
const groupField = ref(groupFields[0].value);

const groupData = computed(() => {
    return scheme?.schemeItems.$groupBy(item => item[groupField.value]) ?? {};
});

</script>
