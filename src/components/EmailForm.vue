<template>
    <form action="#" @submit.prevent="onSubmit">
      <section id="form-header">
        <h3> Subscribe to our newsletter </h3>
        <p> Coffee IV drip delivered straight to your door. </p>
        <p> How does it work? </p>
      </section>
      <div class="form-item">
        <label> Full Name: </label>
        <input type="text" placeholder="John Jones" v-model="name" required />
      </div>
      <div class="form-item">
        <label> Email: </label>
        <input type="email" placeholder="john@ga.co" v-model="email" required/>
      </div>
        <input id="form-btn" type="submit"/>
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

<style scoped lang="scss">

$red: #e0785f;
$white: #f4f1de;
$lightBlue: #e8f0ff;
$darkBlue: #3d405b;
$green: #81b29a;
$beige: #f2cc8f;

  section, div {
    display: block;
  }

  form {
    margin-top: 2em;
    background-color: yellow;
    display: inline-block;
    margin: 0 auto;
  }

  #form-header {
    padding-bottom: 2em;
  }

  .form-item {
    padding-top: 1em;
    text-align: right;
    display: inline-block;
    margin: 0 30% 0 4%;
    width: 80%;
  }
  #form-btn {
    margin-top: 2em;
    text-align: center;
    background: $darkBlue;
    border: 0;
    border-radius: .375rem;
    box-sizing: border-box;
    color: $white;
    cursor: pointer;
    display: inline-block;
    font-size: 1.125rem;
    font-weight: 600;
    padding: 0.5rem 1rem 0.5rem 1rem;
    text-align: left;
    text-decoration: none;
    
  }


</style>


