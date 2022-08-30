<template>
    <form action="#" @submit.prevent="onSubmit">
        <label> Email: </label>
        <input type="email" placeholder="john@ga.co" v-model="email" required/>
        <input type="submit"/>
    </form>
</template>

<script>
export default {
  name: 'email-form',
  data: function(){
    return {
      email: ''
    }
  }
}
</script>

<style lang="scss">
</style>