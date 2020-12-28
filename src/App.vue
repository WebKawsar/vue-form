<template>
  <div>
    <button @click="CompToRender='Home'">Home</button>
    <button @click="CompToRender='About'">About</button>
    <button @click="CompToRender='Form'">Contact</button>

    <component :is="CompToRender"></component>


  </div>
</template>

<script>

import Form from "./Components/Form/Form";
import "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./Components/Home/Home";
import About from "./Components/About/About";

export default {
  data(){
    return {
        CompToRender: "Home"
    }
  },
  components: {
    Form,
    Home,
    About
  }
}
</script>

<style>

</style>
