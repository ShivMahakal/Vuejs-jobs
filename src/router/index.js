import AddJobView from "@/components/AddJobView.vue";
import EditJobView from "@/components/EditJobView.vue";
import JobListings from "@/components/JobListings.vue";
import JobView from "@/components/JobView.vue";
import NotFoundView from "@/components/NotFoundView.vue";
import Home from "@/views/Home.vue";
import JobsView from "@/views/JobsView.vue";
import { createRouter,createWebHistory } from "vue-router";

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:Home
        },
        {
            path:'/jobs',
            name:'jobs',
            component:JobsView
        },
        {
            path:'/jobs/add',
            name:'add-job',
            component:AddJobView
        },
        {
            path:'/job/edit/:id',
            name:'edit-job',
            component:EditJobView
        },
        {
            path:'/jobs/:id',
            name:'job',
            component:JobView
        },
        {
            path:"/:catchAll(.*)",
            name:"not-found",
            component:NotFoundView
        }
    ]
})

export default router;