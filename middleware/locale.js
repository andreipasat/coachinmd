export default defineNuxtRouteMiddleware((to, from) => {
    console.log('check')
    if (process.client) {
        const availableLocales = ['en', 'ru', 'ro'];
        const browserLocale = navigator.language.split('-')[0];
        console.log('browser§locale', browserLocale);
        const defaultLocale = availableLocales.includes(browserLocale) ? browserLocale : 'en';

        // Set a cookie to store the locale
        document.cookie = `locale=${defaultLocale}; path=/`;
    }
});