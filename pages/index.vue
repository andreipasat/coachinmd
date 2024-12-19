<template>
    <header class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 ">
        <div class="container mx-auto px-6 text-center">
            <h1 class="text-4xl md:text-6xl font-bold">{{ $t('landing_find_trusted_specialists') }}</h1>
            <p class="mt-4 text-lg">{{ $t('landing_subscribe_easy') }}</p>
            <div class="mt-6">
                <input v-model="email" type="email" :placeholder="t('your_email')" class="px-4 py-2 rounded-l-md text-gray-800 focus:outline-none">
                <input type="text" v-model="honeypot" class="hidden" autocomplete="off">
                <button @click="handleSubscribe" class="bg-white text-blue-600 px-4 py-2 rounded-r-md font-bold hover:bg-gray-100">
                    {{ $t('subscribe') }}
                </button>
            </div>
        </div>
    </header>

  <!-- Value Proposition Section -->
    <section class="py-16">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-bold">{{ $t('landing_why_join_us') }}</h2>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="flex flex-col items-center">
                    <font-awesome-icon icon="fa-solid fa-hand-holding" class="h-16 w-16 " />
                    <h3 class="text-xl font-semibold mt-4">{{ $t('convenience') }}</h3>
                    <p class="mt-2 text-gray-600">{{ $t('easily_browse_and_book') }}</p>
                </div>
                <div class="flex flex-col items-center">
                    <font-awesome-icon icon="fa-solid fa-shield-alt" class="h-16 w-16" />
                    <h3 class="text-xl font-semibold mt-4">{{ $t('trustworthy_specialists') }}</h3>
                    <p class="mt-2 text-gray-600">{{ $t('verified_professionals') }}</p>
                </div>
                <div class="flex flex-col items-center">
                    <font-awesome-icon icon="fa-solid fa-calendar-alt" class="h-16 w-16" />
                    <h3 class="text-xl font-semibold mt-4">{{ t('flexible_scheduling') }}</h3>
                    <p class="mt-2 text-gray-600">{{ $t('landing_sessions_availability') }}</p>
                </div>
            </div>
        </div>
    </section>

  <!-- Teaser/Countdown Section -->
    <section class="bg-blue-600 text-white py-16">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-bold">{{ $t('we_launching_soon') }}</h2>
            <p class="mt-4">{{ $t('dont_miss_out') }}</p>
            <div class="mt-6 text-2xl font-bold" id="countdown">{{ countdown }}</div>
        </div>
    </section>

  <!-- How It Works Section -->
    <section class="py-16">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-bold">{{ $t('how_it_works') }}</h2>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="flex flex-col items-center">
                    <font-awesome-icon icon="fa-solid fa-search" class="h-16 w-16" />
                    <h3 class="text-xl font-semibold mt-4">{{ $t('find_specialists') }}</h3>
                    <p class="mt-2 text-gray-600">{{ $t('search_by_text') }}</p>
                </div>
                <div class="flex flex-col items-center">
                    <font-awesome-icon icon="fa-solid fa-book" class="h-16 w-16" />
                    <h3 class="text-xl font-semibold mt-4">{{ $t('book_sessions') }}</h3>
                    <p class="mt-2 text-gray-600">{{ $t('pick_a_time') }}</p>
                </div>
                <div class="flex flex-col items-center">
                    <font-awesome-icon icon="fa-people-group" class="h-16 w-16" />
                    <h3 class="text-xl font-semibold mt-4">{{ $t('connect') }}</h3>
                    <p class="mt-2 text-gray-600">{{ $t('enjoy_quality') }}</p>
                </div>
            </div>
        </div>
    </section>

  <!--Contact section-->
    <section class="bg-gray-200 py-16" id="contact">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center text-gray-800 mb-8">{{ $t('contact_us') }}</h2>
            <p class="text-center text-gray-600 mb-12">{{ $t('have_questions') }}</p>

            <div class="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <form @submit.prevent="handleContact" action="#" method="POST">
                    <input type="text" v-model="honeypot" class="hidden" autocomplete="off">
                    <div class="mb-6">
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('your_name') }}</label>
                        <input v-model="nameContact" type="text" id="name" name="name" required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                    </div>

                    <div class="mb-6">
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('your_email') }}</label>
                        <input v-model="emailContact" type="email" id="email" name="email" required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                    </div>

                    <div class="mb-6">
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('your_message') }}</label>
                        <textarea v-model="message" id="message" name="message" rows="5" required class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="w-full md:w-auto bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                            {{ $t('send_message') }}</button>
                    </div>
                </form>
            </div>
        </div>
    </section>

  <!-- Footer Section -->
    <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-6 text-center">
            <p>© 2024 COACHINMD.COM. {{ $t('all_rights_reserved') }}</p>
            <div class="mt-4 flex justify-center space-x-4">
                <a href="/privacy" class="hover:text-gray-400">{{ $t('privacy_policy') }}</a>
                <a href="/terms" class="hover:text-gray-400">{{ $t('terms_of_service') }}</a>
                <a href="#contact" class="hover:text-gray-400">{{ $t('contact_us') }}</a>
            </div>
        </div>
    </footer>
</template>
<script setup>

import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

import { useHead } from '@vueuse/head';

useHead({
    title: t('find_trusted_specialists') + ' | ' + process.env.APP_NAME,
    meta: [
        {
            name: 'description',
            content: t('meta_desc_landing'),
        },
        {
            name: 'keywords',
            content: t('meta_keywords'),
        },
        { property: 'og:title', content: t('find_trusted_specialists') },
        { property: 'og:description', content: t('meta_desc_landing') },
        { property: 'og:image', content: '/images/social-preview.png' },
        { property: 'og:url', content: 'https://coachinmd.com' },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: t('find_trusted_specialists') },
        { name: 'twitter:description', content: t('meta_desc_landing') },
        { name: 'twitter:image', content: '/images/social-preview.png' }
    ],
});


import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref, watch} from "vue";
import useValidation from "~/src/hooks/validation";


const email = ref('')
const emailContact = ref('')
const isEmail = ref(false)
const isEmailContact = ref(false)
const honeypot = ref('')

const nameContact = ref('')
const message = ref('')

watch(() => email.value, (newEmail) => {
    isEmail.value = useValidation().isEmail(newEmail)
}, {immediate: true})

watch(() => emailContact.value, (newEmail) => {
    isEmailContact.value = useValidation().isEmail(newEmail)
}, {immediate: true})

import { useNuxtApp } from "#app";
const { $axios } = useNuxtApp();

async function handleSubscribe() {
    if (honeypot.value.length) {
        return
    }
    isEmail.value = useValidation().isEmail(email.value)
    if (isEmail.value) {
        try {
            const response = await $axios.post('/api/subscriber', {
                email:email.value,
            })
            if (response.status === 201) {
                useToastify(t('subscribed_with_success'), {
                    autoClose: 1000,
                    position: ToastifyOption.POSITION.TOP_RIGHT,
                    type: "success"
                });
                email.value = ''
            }
        } catch (error) {
            if (error.status === 422) {
                if (error.response
                    && error.response.data
                    && error.response.data.errors
                    && error.response.data.errors.email
                ) {
                    useToastify(t('email_has_been_taken'), {
                        autoClose: 1000,
                        position: ToastifyOption.POSITION.TOP_RIGHT,
                        type: "error"
                    });
                }
            }
            console.log('err',error)
        }
    } else {
        useToastify(t('please_enter_email'), {
            autoClose: 1000,
            position: ToastifyOption.POSITION.TOP_RIGHT,
            type: "error"
        });
    }

}

async function handleContact() {
    if (honeypot.value.length) {
        return
    }
    isEmailContact.value = useValidation().isEmail(emailContact.value)
    if (isEmailContact.value) {
        try {
            const response = await $axios.post('/api/contact', {
                name: nameContact.value,
                email:emailContact.value,
                message: message.value
            })
            if (response.status === 200) {
                useToastify(t('message_send_with_success'), {
                    autoClose: 1000,
                    position: ToastifyOption.POSITION.TOP_RIGHT,
                    type: "success"
                });
                emailContact.value = ''
                nameContact.value = ''
                message.value = ''
            }
        } catch (error) {
            if (error.status === 422) {
                if (error.response
                    && error.response.data
                    && error.response.data.errors
                    && error.response.data.errors.email
                ) {
                    useToastify(t('check_fields'), {
                        autoClose: 1000,
                        position: ToastifyOption.POSITION.TOP_RIGHT,
                        type: "error"
                    });
                }
            }
            console.log('error',error)
        }
    } else {
        useToastify(t('please_enter_email'), {
            autoClose: 1000,
            position: ToastifyOption.POSITION.TOP_RIGHT,
            type: "error"
        });
    }
}

// Countdown Timer Script Example
const countdown = ref('')
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 7); // Set to 7 days from now

function updateCountdown() {
    const now = new Date();
    const difference = targetDate - now;
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    countdown.value = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

onMounted(() => {
    setInterval(updateCountdown, 1000);
})

</script>