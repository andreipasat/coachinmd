import { createI18n } from 'vue-i18n';

export default defineNuxtPlugin(async (nuxtApp) => {
    // Static imports for JSON files
    const messages = {
        en: await import('~/locales/en.json').then((m) => m.default),
        ro: await import('~/locales/ro.json').then((m) => m.default),
        ru: await import('~/locales/ru.json').then((m) => m.default),
    };

    const getBrowserLocale = () => {
        if (process.client) {
            const availableLocales = Object.keys(messages);
            const browserLocale = navigator.language.split('-')[0]; // Extract 'en' from 'en-US'
            return availableLocales.includes(browserLocale) ? browserLocale : 'en'; // Default to 'en'
        }
        return 'en';
    };


    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: getBrowserLocale(),
        fallbackLocale: 'en',
        messages,
    });

    nuxtApp.vueApp.use(i18n);
});
