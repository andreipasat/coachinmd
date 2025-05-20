import { createI18n } from 'vue-i18n';
import en from '~/locales/en.json';
import ro from '~/locales/ro.json';
import ru from '~/locales/ru.json';

export default defineNuxtPlugin((nuxtApp) => {
    // Define messages
    const messages = {
        en,
        ro,
        ru,
    };

    // Determine the locale
    const getInitialLocale = () => {
        if (process.server) {
            const cookieLocale = useRequestHeaders()?.cookie
                ?.split('; ')
                .find((row) => row.startsWith('locale='))
                ?.split('=')[1];
            return cookieLocale || 'en'; // Default to 'en' if no cookie is set
        }
        if (process.client) {
            const availableLocales = Object.keys(messages);
            const browserLocale = navigator.language.split('-')[0];
            return availableLocales.includes(browserLocale) ? browserLocale : 'en';
        }
    };

    const i18n = createI18n({
        legacy: false,
        globalInjection: true,
        locale: getInitialLocale(), // Initial locale
        fallbackLocale: 'ro',
        messages, // All translations
    });

    nuxtApp.vueApp.use(i18n);

    return {
        provide: {
            i18n,
        },
    };
});
