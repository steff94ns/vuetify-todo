import Vue from 'vue'

//https://dev.to/itachiuchiha/registering-components-globally-p8m
// import spinner from '@/components/GlobalTest/Spinner.vue'

Vue.component('test', 
    () => import('@/components/Shared/Test.vue')
)
