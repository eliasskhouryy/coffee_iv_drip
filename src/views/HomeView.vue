<template>
  <div class="home">
    <div class="box page1">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <div class="box page3">
      dummy text
    </div>
    <div class="box page3">
      fummy text
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  data: function () {
    return {
      variable1: '',
    }
  },
  methods: {
    
  },
}
</script>

<style lang="scss">

  .home {

    .box {
      height: 100vh;
      max-width: 100vw;
    }
  }
  
</style>