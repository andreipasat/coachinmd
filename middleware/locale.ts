export default defineNuxtRouteMiddleware(() => {
    if (process.client) {
        const availableLocales = ['en', 'ru', 'ro'];
        const browserLocale = navigator.language.split('-')[0];
        const defaultLocale = availableLocales.includes(browserLocale) ? browserLocale : 'en';

        // Set a cookie to store the locale
        document.cookie = `locale=${defaultLocale}; path=/`;
    }
});