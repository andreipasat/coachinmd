<template>

    <header class="bg-gradient-to-r from-vanilla-dark via-vanilla to-vanilla-light py-16">
        <div class="container mx-auto px-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-chocolate-milk to-chocolate-dark ">
            <div class="flex-row md:flex md:justify-between space-y-5 md:space-y-0">
                <div class="md:w-1/2 text-left space-y-10">
                    <button class="w-full md:w-auto rounded-full p-2 border border-chocolate-dark">Achieve Your Goals</button>
                    <h1 class="text-2xl text-center md:text-left md:text-6xl">Unlock Your Full Potential</h1>
                    <button class="w-full md:w-auto rounded-full p-2 border border-chocolate-dark">Book Now</button>
                </div>
                <div class="md:w-1/2">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="col-span-2 bg-white h-[140px] rounded-bl-full rounded-tr-full">
<!--                            <img :src="musicians" class="w-full h-full object-cover rounded-bl-full rounded-tr-full" alt="" />-->
                        </div>
                        <div class="bg-white h-[140px] rounded-bl-full rounded-tr-full rounded-tl-full">02</div>
                        <div class="bg-white h-[140px] rounded-bl-full rounded-tr-full rounded-br-full">03</div>
                        <div class="bg-white h-[140px]">04</div>
                        <div class="bg-white h-[140px] rounded-bl-full">05</div>
                        <div class="bg-white h-[140px] rounded-full">06</div>
                        <div class="col-span-2 bg-white h-[140px] rounded-bl-full rounded-tr-full rounded-tl-full">07</div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <!-- How It Works Section -->
    <section class="py-16 bg-gradient-to-r from-vanilla-light to-white">
        <div class="container mx-auto px-6 text-center text-chocolate-dark">
            <h2 class="text-3xl font-bold">{{ $t('how_it_works') }}</h2>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="flex flex-col items-center transform transition duration-300 ease-in-out hover:scale-105">
                    <ClientOnly>
                        <font-awesome-icon icon="search" class="h-16 w-16" />
                    </ClientOnly>
                    <h3 class="text-xl font-semibold mt-4">{{ $t('find_specialists') }}</h3>
                    <p class="mt-2">{{ $t('search_by_text') }}</p>
                </div>
                <div class="flex flex-col items-center transform transition duration-300 ease-in-out hover:scale-105">
                    <ClientOnly>
                        <font-awesome-icon icon="book" class="h-16 w-16" />
                    </ClientOnly>
                    <h3 class="text-xl font-semibold mt-4">{{ $t('book_sessions') }}</h3>
                    <p class="mt-2">{{ $t('pick_a_time') }}</p>
                </div>
                <div class="flex flex-col items-center transform transition duration-300 ease-in-out hover:scale-105">
                    <ClientOnly>
                        <font-awesome-icon icon="people-group" class="h-16 w-16" />
                    </ClientOnly>
                    <h3 class="text-xl font-semibold mt-4">{{ $t('connect') }}</h3>
                    <p class="mt-2">{{ $t('enjoy_quality') }}</p>
                </div>
            </div>
        </div>
    </section>

    <section class="bg-gradient-to-r from-vanilla-dark via-vanilla to-vanilla-light py-16">
        <div class="container mx-auto px-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-chocolate-milk to-chocolate-dark ">
            <h1 class="text-4xl md:text-4xl font-bold">{{ $t('landing_find_trusted_specialists') }}</h1>
            <p class="mt-4 text-lg font-sans">{{ $t('landing_subscribe_easy') }}</p>
            <div class="mt-6">
                <input v-model="email" type="email" :placeholder="t('your_email')" class="px-4 py-2 rounded-l-md focus:outline-none">
                <input type="text" v-model="honeypot" class="hidden" autocomplete="off">
                <button @click="handleSubscribe" class="bg-vanilla-orange hover:bg-vanilla-dark text-chocolate-dark px-4 py-2 rounded-r-md font-bold">
                    {{ $t('subscribe') }}
                </button>
            </div>
        </div>
    </section>


  <!-- Teaser/Countdown Section -->
    <section class="py-16 bg-gradient-to-r from-vanilla-dark via-vanilla to-vanilla-light">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-bold">{{ $t('we_launching_soon') }}</h2>
            <p class="mt-4">{{ $t('dont_miss_out') }}</p>
            <div class="mt-6 text-2xl font-bold" id="countdown">{{ countdown }}</div>
        </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="py-16 text-chocolate-dark bg-gradient-to-r from-vanilla-light to-white">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-bold">{{ $t('landing_why_join_us') }}</h2>
            <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="flex flex-col items-center transform transition duration-300 ease-in-out hover:scale-105">
                    <ClientOnly>
                        <font-awesome-icon icon="hand-holding" class="h-16 w-16 " />
                    </ClientOnly>

                    <h3 class="text-xl font-semibold mt-4">{{ $t('convenience') }}</h3>
                    <p class="mt-2">{{ $t('easily_browse_and_book') }}</p>
                </div>
                <div class="flex flex-col items-center transform transition duration-300 ease-in-out hover:scale-105">
                    <ClientOnly>
                        <font-awesome-icon icon="shield-alt" class="h-16 w-16" />
                    </ClientOnly>
                    <h3 class="text-xl font-semibold mt-4">{{ $t('trustworthy_specialists') }}</h3>
                    <p class="mt-2">{{ $t('verified_professionals') }}</p>
                </div>
                <div class="flex flex-col items-center transform transition duration-300 ease-in-out hover:scale-105">
                    <ClientOnly>
                        <font-awesome-icon icon="calendar-alt" class="h-16 w-16" />
                    </ClientOnly>

                    <h3 class="text-xl font-semibold mt-4">{{ t('flexible_scheduling') }}</h3>
                    <p class="mt-2">{{ $t('landing_sessions_availability') }}</p>
                </div>
            </div>
        </div>
    </section>


  <!--Contact section-->
    <section class="relative w-full h-screen overflow-hidden py-16 bg-gradient-to-b from-vanilla-dark via-vanilla to-vanilla-light text-chocolate-dark" id="contact">
<!--        <video-->
<!--            autoplay-->
<!--            muted-->
<!--            loop-->
<!--            class="absolute top-0 left-0 w-full h-full object-cover"-->
<!--        >-->
<!--            <source :src="videoPath" type="video/mp4" />-->
<!--            Your browser does not support the video tag.-->
<!--        </video>-->

        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold text-center mb-8">{{ $t('contact_us') }}</h2>
            <p class="text-center mb-12">{{ $t('have_questions') }}</p>

            <div class="max-w-2xl mx-auto p-8">
                <form @submit.prevent="handleContact" action="#" method="POST">
                    <input type="text" v-model="honeypot" class="hidden" autocomplete="off">
                    <div class="mb-6">
                        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('your_name') }}</label>
                        <input v-model="nameContact" type="text" id="name" name="name" required class="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none">
                    </div>

                    <div class="mb-6">
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('your_email') }}</label>
                        <input v-model="emailContact" type="email" id="email" name="email" required class="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none">
                    </div>

                    <div class="mb-6">
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('your_message') }}</label>
                        <textarea v-model="message" id="message" name="message" rows="5" required class="w-full px-4 py-2 rounded-md shadow-sm focus:outline-none"></textarea>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="w-full md:w-auto bg-vanilla-orange hover:bg-vanilla-dark text-chocolate-dark px-6 py-2 rounded-md shadow-md focus:ring-2 focus:ring-offset-2">
                            {{ $t('send_message') }}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </section>

  <!-- Footer Section -->
    <footer class="text-chocolate-dark py-4 text-sm">
        <div class="container mx-auto px-6 text-center">
            <p>© 2024 COACHINMD.COM. {{ $t('all_rights_reserved') }}</p>
            <div class="mt-2 flex justify-center space-x-4">
                <a href="/privacy" class="hover:text-chocolate-milk">{{ $t('privacy_policy') }}</a>
                <a href="/terms" class="hover:text-chocolate-milk">{{ $t('terms_of_service') }}</a>
                <a href="#contact" class="hover:text-chocolate-milk">{{ $t('contact_us') }}</a>
            </div>
        </div>
    </footer>
</template>
<script setup>

import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

import { useHead } from '@vueuse/head';

import musicians from '~/assets/musicians.jpg'

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
