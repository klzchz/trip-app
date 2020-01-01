<template>
    <nav id="nav">
        <p class="logo">The Vue School Travel App</p>
          <!-- <router-link to="/">Home</router-link> 
          <router-link to="/brazil">Brazil</router-link> 
          <router-link to="/hawaii">Hawaii</router-link> 
          <router-link to="/jamaica">Jamaica</router-link> 
          <router-link to="/panama">Panama</router-link>  -->

          <ul class="nav-links">
               <li class="links">
                   <router-link to="/">Home</router-link> 
               </li>
               <li class="links" v-for="destination in destinations" :key="destination.name"  >
                   
                   <router-link :to="{name:'DestinationDetails',params:{slug:destination.slug}}" v-text="destination.name"></router-link> 
               </li>
          </ul>
    </nav>
</template>

<script>
import store from "@/store.js";
export default {
    data() {
        return {
            destinations: store.destinations,
            // slug: this.$route.params.slug
        }
    },
   
   
}
 
</script>

<style scoped>


#nav {
  display: flex;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
#nav a.vue-school-active-class{color: #ab26ab;}

.nav-links {
  display: flex;
}
.links {
  padding-right: 20px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}
.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}


</style>
