<template>
    <div class="prose mx-auto p-6" v-html="sanitizedHtml">

    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import { useHead } from '@vueuse/head';
import sanitizeHtml from 'sanitize-html';

// Get the translated HTML string
const rawHtml = t('privacy_html', {
    insertDate: new Date().toLocaleDateString(),
    appName: 'COACHINMD',
    contactEmail: 'contact@coachinmd.com',
    businessAddress: 'Chișinău, Moldova',
});

// Sanitize the HTML string
const sanitizedHtml = sanitizeHtml(rawHtml, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h1', 'h2', 'strong', 'span']),
    allowedAttributes: {
        '*': ['class', 'style'],
    },
});

useHead({
    title: t('privacy_policy') + ' | ' + 'process.env.APP_NAME',
    meta: [
        {
            name: 'description',
            content: t('meta_privacy_desc', {appName: 'process.env.APP_NAME'})
        },
        {
            name: 'keywords',
            content: t('meta_privacy_keywords'),
        },
    ],
});
</script>