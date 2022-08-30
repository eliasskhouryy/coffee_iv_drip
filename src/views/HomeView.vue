<template>
  <div class="home">
    <button>Subscribe</button>

    <div class="box page1">
      <TopPage msg="Welcome to Your Vue.js App"/>

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
import TopPage from '@/components/TopPage.vue'

export default {
  name: 'HomeView',
  components: {
    TopPage
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

* {
  box-sizing: border-box;
}

  .home {
    overflow: auto;
    .box {
      height: 100vh;
      max-width: 100vw;
    }
    button {
      position: fixed;
      right: 0px;
      bottom: 20px; 
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      z-index: 10;
      height: 80px;
      width: 80px;
      border-radius: 50%;
      border: none;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    }
  }
  
</style>