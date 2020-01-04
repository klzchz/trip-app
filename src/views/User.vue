<template>
    <div>
        <h1>Hello {{user}}</h1> 
        
        <router-link :to="{
            name:'invoice'
            }" >My Invoices
        </router-link><br/><br/>
        <button @click="logOut" class="btn">Log out</button>
    </div>
</template>

<script>
import store from '@/store.js';
export default {
    data() {
        return {
            user:store.user
        }
    },
    methods: {
        logOut()
        {
             store.user = '';
            this.$router.push("/");
        }
    },
}
</script>

<style scoped>

</style>