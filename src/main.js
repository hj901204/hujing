import Vue from 'vue';
import App from './App';
import store from './vuex/store';
new Vue({
    el:"#app",
    store,
    template:"<App/>",
    components:{App}
})