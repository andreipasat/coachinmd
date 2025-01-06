<template>
    <div class="prose mx-auto p-6" v-html="t('terms_html', {
        insertDate: new Date().toLocaleDateString(),
        appName: 'COACHINMD',
        contactEmail: 'contact@coachinmd.com',
        businessAddress: 'Chișinău, Moldova'
    })">
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { useHead } from '@vueuse/head';

useHead({
    title: t('terms_of_service') + ' | ' + process.env.APP_NAME,
    meta: [
        {
            name: 'description',
            content: t('meta_terms_desc', {appName: process.env.APP_NAME})
        },
        {
            name: 'keywords',
            content: t('meta_terms_keywords'),
        },
    ],
});
</script>