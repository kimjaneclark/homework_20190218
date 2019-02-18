
import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {

  new Vue({
    el: "#app",
    data: {
    newPhrase: " "
  },
  methods:{
    wordCounter: function(newPhrase){
      this.newPhrase.split(' ').length;
    }
  }



  });
});
