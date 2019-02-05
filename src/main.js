// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import VueYoutube from "vue-youtube";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueYoutube);

/* eslint-disable no-new */
const router = new VueRouter({
    mode: "hash",
    routes: [{ path: "/", component: App }]
});

new Vue({
    el: "#app",
    router,
    components: {
        App
    },
    template: "<App/>"
});
