<template>
  <div id="app">
    <div id="nav">

    </div>
    <router-view/>
  </div>
</template>

<script>

  import '../node_modules/jquery/dist/jquery.js';
  import '../node_modules/bootstrap/dist/js/bootstrap.js';


  window.$=require('jquery')
  window.JQuery=require('jquery')
  
  
export default {
  name: 'App'
}

</script>

<style lang="scss">
@import '../node_modules/bootstrap/dist/css/bootstrap.css';
@import './assets/global.scss';
@import './assets/estilo.scss';
</style>
