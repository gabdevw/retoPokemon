<template>
	<div class="">
		<Toolbar></Toolbar>
		<Selector @filtrar="getTipoPokemones"></Selector>

		<div class="clearfix"></div>
		
			
		<div v-if="isLoading==false" class="contenedorCards">
		
		<div v-for="pokemon in optionsPokemon.pokemon" :key="pokemon.id" v-bind:value="pokemon.value" class="card">
		
			<Cards :pokemon="pokemon"></Cards>
		
		</div>

		</div>
		<div class="container">

		
		<div>
            <loading 
            :active.sync="isLoading" 
            :can-cancel="true" 
            :on-cancel="onCancel"
            :is-full-page="fullPage"
            :loader="loader"
            :color="color"
            :background-color="fondo"
            > 
          </loading>
      </div>

	</div>
		<div class="tablaPokemonSeleccionado">
			
		<TablaPokemonSeleccionado></TablaPokemonSeleccionado>
		</div>
		
		
	</div>
</template>

<script>

import axios from 'axios';
import Toolbar from '@/components/Toolbar';
import Selector from '@/components/Selector';
import Cards from '@/components/Cards';
import TablaPokemonSeleccionado from '@/components/TablaPokemonSeleccionado';

import Loading from 'vue-loading-overlay'

	export default{

		data () {

			return {
				loader:'dots',
      isLoading: false,
      fullPage: true,
      color:"#FFFFFF",
      fondo:"#FFFFFF",
				optionsPokemon:[],
				user:null,
				modoOscuro:false

			}
		},

		components:{
			Toolbar,
			Selector,
			Cards,
			TablaPokemonSeleccionado,
			Loading

		},

	methods:{


		getTipoPokemones: function(url){
          this.isLoading=true;
          var contexto=this;
          
          console.log(url)
          axios.get(url,{
            })
              .then((res)=> {
               this.optionsPokemon=res.data;
               console.log("este servicio esta en home y trae ??")
               console.log(res.data)
        this.isLoading=false;
              }).catch(function(err)
                {
                  console.log(err);
                  if(err.response.status==403){
                  contexto.$alert("Por su seguridad, la sesion ha expirado");
          }else{
            console.log("otra cosa");
          }
          console.log(err);
        this.isLoading=false;
        });
      },
		},

	created(){

		console.log("antes del if")
		console.log(localStorage.getItem('isAutenticade'))
		if (localStorage.getItem('isAutenticade')!='true') {
			console.log("ingresa alogin?")
			this.$router.push({name:'Login'});	
		}else{

			console.log("despues del if")
		}
		// this.getTipoPokemones();
	}
	}

</script>