<template>
  <div class="home">
    <div class="box page1">
      <HelloWorld msg="Welcome to Your Vue.js App"/>
    </div>
    <div class="box page3">
      dummy text
    </div>
    <div class="box page3">
      <EmailForm />
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import EmailForm from '@/components/EmailForm.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    EmailForm
  },
  data: function () {
    return {
      variable1: '',
    }
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