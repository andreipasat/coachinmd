<template>

    <div class="text-right text-xs bg-jungle-condo text-oldPaper-dark">
      <div class="container mx-auto px-6 py-2 flex flex-row items-center space-x-3 divide-x divide-gray-400">
        <a class="hover:underline pr-3" href="#how_it_works">{{ $t('how_it_works') }}</a>
        <a class="hover:underline px-3" href="#why_join_us">{{ $t('landing_why_join_us') }}</a>
        <a class="hover:underline px-3" href="#mission">{{ $t('our_mission') }}</a>
        <a class="hover:underline px-3" href="#specialists">{{ $t('specialists') }}</a>
        <a class="hover:underline pl-3" href="#contact">{{ $t('contact_us') }}</a>
      </div>
    </div>

    <header class="bg-gradient-to-r from-oldPaper to-chocolate-milk py-16 text-black">
        <div class="container mx-auto px-6 text-center ">
            <div class="flex-row md:flex md:justify-between space-y-5 md:space-y-0">
                <div class="md:w-1/2 text-left space-y-10">
                    <a href="#subscribe" class="w-full md:w-auto rounded-full p-2 border border-black">{{ $t('achieve_your_goals') }}</a>
                    <h1 class="text-6xl text-center md:text-left md:text-8xl">
                        {{ $t('unlock') }} <br> <span class="md:text-6xl">{{ $t('your') }} </span> <span class="text-red">{{ $t('talent') }}</span>
                    </h1>
                    <h1 class="text-2xl text-center md:text-left pb-10">{{ $t('and_show_abilities') }}</h1>
                    <a href="#join_as_specialist" class="w-full md:w-auto rounded-full p-2 border border-black">{{ $t('incrase_your_value') }}</a>
                </div>
                <div class="md:w-1/2">
                    <div class="grid grid-cols-3 gap-4">
                        <div class="col-span-2 bg-white h-[140px] rounded-bl-full rounded-tr-full">
                            <img :src="musicians" class="w-full h-full object-cover rounded-bl-full rounded-tr-full" alt="" />
                        </div>
                        <div class="bg-white h-[140px] rounded-bl-full rounded-tr-full rounded-tl-full border border-white">
                            <img :src="chess" class="w-full h-full object-cover rounded-bl-full rounded-tr-full rounded-tl-full grayscale" alt="" />
                        </div>
                        <div class="bg-white h-[140px] rounded-bl-full rounded-tr-full rounded-br-full ">
                            <img :src="trainer" class="w-full h-full object-cover rounded-bl-full rounded-tr-full rounded-br-full grayscale" alt="" />
                        </div>
                        <div class="bg-white h-[140px]">
                            <img :src="yoga" class="w-full h-full object-cover" alt="" />
                        </div>
                        <div class="bg-white h-[140px] rounded-bl-full">
                            <img :src="teacher" class="w-full h-full object-cover rounded-bl-full" alt="" />
                        </div>
                        <div class="bg-white h-[140px] rounded-full border border-white">
                            <img :src="beauty" class="w-full h-full object-cover rounded-full grayscale" alt="" />
                        </div>
                        <div class="col-span-2 bg-white h-[140px] rounded-bl-full rounded-tr-full rounded-tl-full">
                            <img :src="psychologist" class="w-full h-full object-cover rounded-full grayscale" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section class="bg-black py-2"></section>

    <!-- How It Works Section -->
    <section class="py-16 bg-gradient-to-r from-vanilla-light to-white" id="how_it_works">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-bold">{{ $t('how_it_works') }}?</h2>
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

    <!--    one click-->
    <section class="text-white w-full h-auto overflow-hidden py-16 bg-cover bg-center bg-no-repeat bg-[url('@/assets/jungle.jpg')]">
        <div class="container mx-auto px-6">
            <h2 class="text-6xl text-center text-white">{{ $t('one_click_to_make_it_happen') }}</h2>
        </div>
    </section>

    <section class="bg-yellow py-2"></section>


    <!--    subscribe-->
    <section class="bg-cover bg-center bg-no-repeat bg-[url('@/assets/old-paper-bg.jpeg')] py-16" id="subscribe">
        <div class="container mx-auto px-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-chocolate-milk to-chocolate-dark ">
            <h4 class="text-4xl md:text-8xl font-bold uppercase">{{ $t('get_started') }}</h4>
            <p class="mt-4 text-lg max-w-1/2">{{ $t('landing_subscribe_easy') }}</p>
            <div class="mt-6">
                <input v-model="email" type="email" :placeholder="t('your_email')" class="px-4 py-2 rounded-l-md focus:outline-none">
                <input type="text" v-model="honeypot" class="hidden" autocomplete="off">
                <button @click="handleSubscribe" class="bg-red hover:bg-chocolate-milk text-white px-4 py-2 rounded-r-md font-bold">
                    {{ $t('subscribe') }}
                </button>
            </div>
        </div>
    </section>

    <!-- Description -->
    <section class="py-16 bg-gradient-to-r from-vanilla-light to-white" id="specialists">
        <div class="container mx-auto px-6 text-center">
            <div class="grid grid-cols-3 gap-6">
                <div class="transform transition duration-300 ease-in-out hover:scale-105">
                    <p class="text-lg font-bold">{{ t('personal_trainers') }}</p>
                    <p>{{ $t('boost_your_fitness') }}</p>
                </div>
                <div class="transform transition duration-300 ease-in-out hover:scale-105">
                    <p class="text-lg font-bold">{{ $t('life_coaches') }}</p>
                    <p>{{ $t('transform_your_mindset') }}</p>
                </div>
                <div class="transform transition duration-300 ease-in-out hover:scale-105">
                    <p class="text-lg font-bold">{{ $t('language_tutors') }}</p>
                    <p>{{ $t('expand_your_horizons') }}</p>
                </div>
                <div class="transform transition duration-300 ease-in-out hover:scale-105">
                    <p class="text-lg font-bold">{{ $t('music_teachers') }}</p>
                    <p>{{ $t('fine_tyne_skills') }}</p>
                </div>
                <div class="transform transition duration-300 ease-in-out hover:scale-105">
                    <p class="text-lg font-bold">{{ $t('business_mentors') }}</p>
                    <p>{{ $t('maximize_your_potential') }}</p>
                </div>
                <div class="transform transition duration-300 ease-in-out hover:scale-105">
                    <p class="text-lg font-bold">{{ $t('wellness_coaches') }}</p>
                    <p>{{ $t('improve_your_well_being') }}</p>
                </div>
            </div>
        </div>
    </section>

<!--  specialist register section-->
  <section class="bg-cover bg-center bg-no-repeat bg-[url('@/assets/sunset-office.jpg')] py-16" id="join_as_specialist">
    <div class="container mx-auto px-6 text-center">
      <h2 class="text-4xl md:text-5xl p-3 rounded-lg bg-jungle-condo bg-opacity-70 font-bold mb-6 text-white">{{ $t('specialist_join_title') }}</h2>
      
      <div class="bg-chocolate-milk bg-opacity-70 p-3 rounded-lg shadow-lg mx-auto mb-5">
        <p class="text-lg md:text-xl mx-auto mb-10 text-white">
          {{ $t('specialist_join_description') }}
        </p>
      </div>

      <div v-if="showSpecialistEnrollButton" class="mt-10 mb-10">
        <button @click="handleShowSpecialistForm"
                class="bg-red hover:bg-chocolate-milk text-white font-bold py-4 px-10 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 text-xl">
          {{ $t('specialist_enroll_now_button') }}
        </button>
      </div>

      <div v-if="showSpecialistForm" class="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
        <form @submit.prevent="handleSpecialistRegistration" class="space-y-6">
          <div>
            <label for="spec_name" class="block text-sm font-medium text-gray-700 text-left mb-1">{{ $t('form_name') }} <span class="text-red">*</span></label>
            <input v-model="specialistForm.name" type="text" id="spec_name" name="spec_name" required :placeholder="t('form_name_placeholder')" class="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red focus:border-red">
          </div>
          <div>
            <label for="spec_surname" class="block text-sm font-medium text-gray-700 text-left mb-1">{{ $t('form_surname') }}</label>
            <input v-model="specialistForm.surname" type="text" id="spec_surname" name="spec_surname" :placeholder="t('form_surname_placeholder')" class="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red focus:border-red">
          </div>
          <div>
            <label for="spec_email" class="block text-sm font-medium text-gray-700 text-left mb-1">{{ $t('your_email') }} <span class="text-red">*</span></label>
            <input v-model="specialistForm.email" type="email" id="spec_email" name="spec_email" required :placeholder="t('your_email_placeholder')" class="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red focus:border-red">
          </div>
          <div>
            <label for="spec_phone" class="block text-sm font-medium text-gray-700 text-left mb-1">{{ $t('form_phone') }} ({{ $t('form_optional') }})</label>
            <input v-model="specialistForm.phone" type="tel" id="spec_phone" name="spec_phone" :placeholder="t('form_phone_placeholder')" class="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red focus:border-red">
          </div>
          <div>
            <label for="spec_social" class="block text-sm font-medium text-gray-700 text-left mb-1">{{ $t('form_social_link') }} ({{ $t('form_optional') }})</label>
            <input v-model="specialistForm.socialLink" type="url" id="spec_social" name="spec_social" :placeholder="t('form_social_link_placeholder')" class="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red focus:border-red">
          </div>
          <div>
            <label for="spec_field" class="block text-sm font-medium text-gray-700 text-left mb-1">{{ $t('form_specialization_field') }} <span class="text-red">*</span></label>
            <input v-model="specialistForm.field" type="text" id="spec_field" name="spec_field" required :placeholder="t('form_specialization_field_placeholder')" class="w-full text-black px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red focus:border-red">
          </div>
          <input type="text" v-model="specialistForm.honeypot" class="hidden" autocomplete="off">
          <div class="text-center">
            <button type="submit" class="w-full md:w-auto bg-red hover:bg-chocolate-milk text-white px-8 py-3 rounded-md shadow-md font-bold text-lg focus:ring-2 focus:ring-offset-2 focus:ring-red-dark">
              {{ $t('specialist_apply_button') }}
            </button>
          </div>
        </form>
        <p class="text-xs text-gray-600 mt-6">{{ $t('specialist_form_note') }}</p>
      </div>

      <div v-if="showSpecialistSuccessMessage" class="mt-10 py-10">
        <ClientOnly>
          <font-awesome-icon icon="check-circle" class="h-20 w-20 text-green-500 mx-auto mb-4" />
        </ClientOnly>
        <p class="text-xl md:text-2xl font-semibold text-gray-700">
          {{ $t('specialist_registration_success_area_message') }}
        </p>
      </div>

    </div>
  </section>

  <!-- Teaser/Countdown Section -->
    <section class="py-16 bg-gradient-to-r from-white to-condo">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-bold">{{ $t('we_launching_soon') }}</h2>
            <p class="mt-4">{{ $t('dont_miss_out') }}</p>
            <div class="mt-6 text-2xl font-bold" id="countdown">{{ countdown }}</div>
        </div>
    </section>

    <!-- Value Proposition Section -->
    <section class="py-16 bg-cover bg-center bg-no-repeat bg-[url('@/assets/old-paper-bg.jpeg')]" id="why_join_us">
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


    <!--    our mission-->
    <section class="py-16 bg-gradient-to-r from-white to-condo" id="mission">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-3xl font-bold py-5">{{ $t('our_mission') }}</h2>
            <p>
                {{ $t('our_mission_description') }}
            </p>
        </div>
    </section>

    <section class="bg-red py-2"></section>


    <!--Contact section-->

    <section class="py-16" id="contact">
        <div class="container mx-auto px-6 text-center">
            <h2 class="text-6xl font-bold">{{ t('contact_us') }}:</h2>
        </div>
    </section>

    <section class="bg-yellow py-2"></section>

    <section class="relative h-auto text-white w-full overflow-hidden py-16 bg-cover bg-center bg-no-repeat bg-[url('@/assets/jungle.jpg')]">

        <div class="container mx-auto px-6">

            <p class="text-center mb-12 text-2xl">{{ $t('have_questions_or_support') }}</p>
            <p class="text-center mb-12 text-2xl">{{ $t('have_questions') }}</p>

            <div class="max-w-2xl mx-auto p-8 my-2">
                <form @submit.prevent="handleContact" action="#" method="POST">
                    <input type="text" v-model="honeypot" class="hidden" autocomplete="off">
                    <div class="mb-6">
                        <label for="name" class="block text-sm font-medium mb-2">{{ $t('your_name') }}</label>
                        <input v-model="nameContact" type="text" id="name" name="name" required class="w-full text-black px-4 py-2 rounded-md shadow-sm focus:outline-none">
                    </div>

                    <div class="mb-6">
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('your_email') }}</label>
                        <input v-model="emailContact" type="email" id="email" name="email" required class="w-full text-black px-4 py-2 rounded-md shadow-sm focus:outline-none">
                    </div>

                    <div class="mb-6">
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">{{ $t('your_message') }}</label>
                        <textarea v-model="message" id="message" name="message" rows="5" required class="w-full text-black px-4 py-2 rounded-md shadow-sm focus:outline-none"></textarea>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="w-full md:w-auto bg-red hover:bg-chocolate-milk text-white px-6 py-2 rounded-md shadow-md focus:ring-2 focus:ring-offset-2">
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
import psychologist from '~/assets/psychologist.jpeg'
import yoga from '~/assets/yoga.jpeg'
import chess from '~/assets/chess.jpeg'
import beauty from '~/assets/beauty.jpeg'
import trainer from '~/assets/trainer.png'
import teacher from '~/assets/teacher.jpeg'

definePageMeta({
  middleware: ['locale']
})

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
const { $axios, $supabase } = useNuxtApp();
const errorSubscribeKey = ref('');

async function handleSubscribe() {
    if (honeypot.value.length) {
        return
    }
    isEmail.value = useValidation().isEmail(email.value)
    if (isEmail.value) {
        try {
              const { data, error } = await $supabase
              .from('subscriptions')
              .insert([{ email: email.value }])
          
          if (error) {
            if (error.code === '23505') {
              errorSubscribeKey.value = 'email_already_registered'
            } else {
              errorSubscribeKey.value = 'error_try_again'
            }
            useToastify(t(errorSubscribeKey.value), {
              autoClose: 1000,
              position: ToastifyOption.POSITION.TOP_RIGHT,
              type: "error"
            });
          } else {
            useToastify(t('subscribed_with_success'), {
              autoClose: 1000,
              position: ToastifyOption.POSITION.TOP_RIGHT,
              type: "success"
            });
            email.value = ''
          }
          
        } catch (error) {
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
            const { data, error } = await $supabase
                .from('contacts')
                .insert([{ email: emailContact.value, name:  nameContact.value, message: message.value}])
          if (error) {
            if (error.code === '23505') {
              errorSubscribeKey.value = 'email_already_registered'
            } else {
              errorSubscribeKey.value = 'error_try_again'
            }
            useToastify(t(errorSubscribeKey.value), {
              autoClose: 1000,
              position: ToastifyOption.POSITION.TOP_RIGHT,
              type: "error"
            });
          } else {
            useToastify(t('subscribed_with_success'), {
              autoClose: 1000,
              position: ToastifyOption.POSITION.TOP_RIGHT,
              type: "success"
            });
            emailContact.value = ''
            nameContact.value = ''
            message.value = ''
            await $fetch('/api/send-email', {
              method: 'POST',
              body: { email: emailContact.value }
            })
          }
        } catch (error) {
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


// Date pentru noul formular de înregistrare specialiști
const specialistForm = ref({
  name: '',
  surname: '',
  email: '',
  phone: '',
  socialLink: '',
  field: '', // Adaugat campul pentru domeniul de specializare
  honeypot: '' // Honeypot specific pentru acest formular
});

// Stări pentru controlul vizibilității
const showSpecialistEnrollButton = ref(true); // Inițial butonul este vizibil
const showSpecialistForm = ref(false);        // Inițial formularul este ascuns
const showSpecialistSuccessMessage = ref(false); // Inițial mesajul de succes este ascuns

// Funcție pentru a afișa formularul și a ascunde butonul
const handleShowSpecialistForm = () => {
  showSpecialistEnrollButton.value = false;
  showSpecialistForm.value = true;
  showSpecialistSuccessMessage.value = false; // Asigură-te că mesajul de succes e ascuns dacă se re-apasă
};

const handleSpecialistRegistration = async () => {
  if (specialistForm.value.honeypot) {
    console.log("Honeypot triggered for specialist registration");
    return; // Filtru anti-spam
  }
  if (!specialistForm.value.name || !specialistForm.value.email || !specialistForm.value.field) {
    useToastify(t('specialist_form_fill_required'), {
      autoClose: 1000,
      position: ToastifyOption.POSITION.TOP_RIGHT,
      type: "error"
    });
    return;
  }
  // Aici logica pentru înregistrarea specialistului
  //console.log('Specialist registration data:', specialistForm.value);

  try {
    const { data, error } = await $supabase
        .from('coaches')
        .insert([
            { 
              email: specialistForm.value.email, 
              name: specialistForm.value.name, 
              surname: specialistForm.value.surname,
              phone: specialistForm.value.phone,
              social_link: specialistForm.value.socialLink,
              field: specialistForm.value.field,
            }
        ])
    if (error) {
      if (error.code === '23505') {
        errorSubscribeKey.value = 'email_already_registered'
      } else {
        errorSubscribeKey.value = 'error_try_again'
      }
      useToastify(t(errorSubscribeKey.value), {
        autoClose: 1000,
        position: ToastifyOption.POSITION.TOP_RIGHT,
        type: "error"
      });
    } else {
      useToastify(t('specialist_registration_thank_you'), {
        autoClose: 1000,
        position: ToastifyOption.POSITION.TOP_RIGHT,
        type: "success"
      });
      showSpecialistForm.value = false;             // Ascunde formularul
      showSpecialistSuccessMessage.value = true;

      await $fetch('/api/send-email', {
        method: 'POST',
        body: { email: specialistForm.value }
      })

      // Golește formularul după trimitere
      specialistForm.value = {
        name: '',
        surname: '',
        email: '',
        phone: '',
        socialLink: '',
        field: '',
        honeypot: ''
      };  
    }
  } catch (error) {
    console.log('error',error)
  }
  
};


onMounted(() => {
    setInterval(updateCountdown, 1000);
})

</script>
