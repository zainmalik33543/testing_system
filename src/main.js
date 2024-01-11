import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { MotionPlugin } from '@vueuse/motion'
import { createRouter, createWebHistory } from 'vue-router';
import StartTimer from './components/StartTimer.vue';
// import StarterScreen from './components/StarterScreen.vue';
import ReviewQuestions from './components/ReviewQuestions.vue';
import Questions from './components/QuestionsAnswer.vue';
import FollowSteps from './components/FollowSteps.vue';
import TestScreen from './components/TestScreen.vue'
// import VueTypedJs from 'vue-typed-js'

loadFonts()
const routes = [
    // {
    //     path: '/',
    //     component: StarterScreen,
    // },
    { path: '/', component: FollowSteps },
    { path: '/review', component: ReviewQuestions },
    { path: '/start', component: StartTimer },
    { path: '/questions', component: Questions },
    { path: '/test', component: TestScreen },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

const app = createApp(App);
app.use(vuetify)
app.use(router);
app.use(MotionPlugin)
// app.use(VueTypedJs)
app.mount('#app')
