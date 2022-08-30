<template>
    <form action="#" @submit.prevent="onSubmit">
      <p v-if="errorsPresent" class="error"> Please check the form for errors </p>
        <label>
            Email:
        </label>
        <input type="email" placeholder="john@ga.co" v-model="email" required/>
        <button>Submit</button>
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