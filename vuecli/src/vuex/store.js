import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

const state={
    count:  0
};

const mutations={
    add(state,num){
        state.count+=num;
    },
    reduce(state,num){
        state.count-=num;
    }
};

const getters={
    count:function(state){
        return state.count+=100;
    }
};


export default new Vuex.Store({
    state,
    mutations,
    getters
})