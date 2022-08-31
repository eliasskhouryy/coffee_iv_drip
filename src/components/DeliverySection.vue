<template>
    <section class="delivery-area">
        <div class="delivery-head">
            <h3> Check out IV dripper delivery service </h3>
            <p> Power bean dripper delivered straight to your door </p>
        </div>
        <ol>
            <li>
                <p> Subscribe to our service </p>
                <img src="../assets/save-icon.png" alt="save icon" />
            </li>
            <li>
                <p> Choose your preference </p>
                <img src="../assets/bean-icon.png" alt="bean icon" />
            </li>
            <li>
                <p> Get it delivered </p>
                <img src="../assets/truck-icon.png" alt="truck icon" />
            </li>
        </ol>
    </section>
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
.delivery-head {
    text-align: left;
    padding-left: 1rem;
}

ol {
    text-align: center;
    list-style-position: inside;
}

</style>