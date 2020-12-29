import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.directive("awesome", {
  bind(el, binding){
    el.innerHTML = binding.value
    // el.style.color = "red";

    // if(binding.arg === "green"){
    //   el.style.color = "green"
    //   el.style.fontSize = "30px"
    // }
    // if(binding.arg === "red"){
    //   el.style.color = "red"
    //   el.style.fontSize = "10px"
    // }

    if(binding.modifiers.green){
      el.style.color = "green"
    }
    if(binding.modifiers.red){
      el.style.color = "red"
    }
    if(binding.modifiers.big){
      el.style.fontSize = "50px"
    }
    if(binding.modifiers.small){
      el.style.fontSize = "30px"
    }


  }
})


new Vue({
  render: h => h(App),
}).$mount('#app')
