import VueRouter from 'vue-router';

import shouye from "./components/index.vue";
import kubiaodan from "./components/kubiaodan/index.vue";
import schedule from "./components/schedule/index.vue";
import monthview from "./components/schedule/monthview.vue";
import dayview from "./components/schedule/dayview.vue";
import weekview from "./components/schedule/weekview.vue";
import filtercar from "./components/filtercar/index.vue";
 
export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: "/index",
        },
        {
            path: '/index',
            component: shouye
        },
        {
            path: '/kubiaodan',
            component: kubiaodan
        },
        {
            path: '/filtercar',
            component: filtercar
        },
        {
            path: '/schedule',
            component: schedule,
            redirect: "/schedule/month",
            children : [
                {
                    path: 'month',
                    component: monthview
                },
                {
                    path: 'day',
                    component: dayview
                },
                {
                    path: 'week',
                    component: weekview
                }
            ]
        }
    ]
});