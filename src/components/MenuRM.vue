<template>
  <div class="">
    
<nav :class="$store.state.classObject" class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Rick&Morty</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li v-on:click="redirigeHome()" class="nav-item active">
        <a class="nav-link" href="#">Pokemon </a>
      </li>

      
      
    </ul>
 
  </div>

  <form class="d-flex">
       <button v-on:click="cierraSesion()" class="btn btn-outline-success my-2 my-sm-0" type="submit">Cerrar sesión</button>
    </form>


</nav>
  </div>
</template>

<script>
        export default {
          name:'MenuRM',

          data() {

            return {

            }
          },

          methods:{

            redirigeHome(){ 

              this.$router.push({name:'Home'});
            
            },
            cierraSesion(){

        localStorage.setItem('isAutenticade', false);
        this.$router.push({name:'Login'});

      },
          }

        }  
</script>