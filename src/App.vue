<template>
  <div class="container">

    <!-- <button @click="CompToRender='Home'">Home</button>
    <button @click="CompToRender='About'">About</button>
    <button @click="CompToRender='Form'">Contact</button>

    <keep-alive>
      <component :is="CompToRender"></component>
    </keep-alive> -->
<!-- 
    <p v-awesome:green="'Hello Boss'"></p>
    <p v-awesome:red="'Hello Boss'"></p> -->

    <p v-awesome.green.big="'Hello Boss'"></p>
    <p v-awesome.red.small="'Hello Boss'"></p>

  </div>
</template>

<script>


import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Form from "./Components/Form/Form";
// import Home from "./Components/Home/Home";
// import About from "./Components/About/About";

export default {
  data(){
    return {
        CompToRender: "Home"
    }
  },
  // components: {
  //   Form,
  //   Home,
  //   About
  // }
}
</script>

<style>

</style>
