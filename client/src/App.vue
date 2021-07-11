<template>
  <div id="app">
      <!-- Preloader -->
    <div class="preloader">
        <div class="preloader-inner">
            <div class="preloader-icon">
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
    <!-- /End Preloader -->

    <AppHeader></AppHeader>
  <router-view></router-view>
    <AppFooter></AppFooter>
  
    
    

  </div>
</template>

<script>
import AppHeader from './components/Header.vue'
import AppFooter from './components/Footer.vue'


export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    
  }

}
</script>


