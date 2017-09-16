require('./bootstrap');

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import DataTables from 'vue-data-tables'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale });
Vue.use(DataTables, { locale });
Vue.use(VueI18n);
Vue.use(VueRouter);

Vue.component('ckeditor', require('../../../Modules/Core/Assets/js/components/CkEditor.vue'));
Vue.component('DeleteButton', require('../../../Modules/Core/Assets/js/components/DeleteComponent.vue'));
Vue.component('TagsInput', require('../../../Modules/Tag/Assets/js/components/TagInput.vue'));
import PageRoutes from '../../../Modules/Page/Assets/js/PageRoutes';

const router = new VueRouter({
    mode: 'history',
    base: `${currentLocale}/backend`,
    routes : [
        ...PageRoutes,
    ],
});

let messages = {
    [currentLocale]: window.translations,
};
console.log(messages);

const i18n = new VueI18n({
    locale: currentLocale,
    messages,
});

const app = new Vue({
    el: '#app',
    router,
    i18n,
});

// window.axios.get(route('api.translation.translations.all'))
//     .then(response => {
//         messages = {
//             [currentLocale]: response.data,
//         };
//         console.log(messages);
//         app.$i18n.setLocaleMessage('en', messages)
//     });
