<template>
    <div>
        <h1> hi </h1>
    </div>
</template>

<script>
    export default {
        name: 'delivery-section',
        props: {
            msg: String,
        },
    };
</script>

<style scoped lang="scss">
$red: #e0785f;
$white: #f4f1de;
$lightBlue: #e8f0ff;
$darkBlue: #3d405b;
$green: #81b29a;
$beige: #f2cc8f;
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

* {
   background-color: $beige; 
   color: $darkBlue;
   font-family: 'Raleway', sans-serif;
}
</style>