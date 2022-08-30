<template>
    <form action="#" @submit.prevent="onSubmit">
      <section>
        <h3> Subscribe to our newsletter </h3>
        <p> Coffee IV drip delivered straight to your door. </p>
        <p> How does it work? </p>
      </section>

        <label> Full Name </label>
        <input type="text" placeholder="John Jones" v-model="name" required />
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
      email: '',
      name: '',
    }
  }
}
</script>

<style lang="scss">
</style>