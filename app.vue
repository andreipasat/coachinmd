<template>
    <main>
        <NuxtPage />
    </main>
</template>
<script setup>
import { useHead } from '@unhead/vue'; // Updated for compatibility with Nuxt 3


useHead({
    script: [
        {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-L9M6HG9QH3',
            async: true,
        },
        {
            type: 'text/javascript',
            children: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-L9M6HG9QH3');
            `,
        },
    ],
});
</script>