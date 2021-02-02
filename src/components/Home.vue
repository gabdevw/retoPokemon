<template>
	<div class="">
		<Toolbar></Toolbar>
		<Selector @filtrar="getTipoPokemones"></Selector>

		<div class="clearfix"></div>
		
			
		<div class="contenedorCards">
		
		<div v-for="pokemon in optionsPokemon.pokemon" :key="pokemon.id" v-bind:value="pokemon.value" class="card">
		
			<Cards :pokemon="pokemon"></Cards>
		
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

	export default{

		data () {

			return {
				
				optionsPokemon:[],
				user:null,
				modoOscuro:false

			}
		},

		components:{
			Toolbar,
			Selector,
			Cards,
			TablaPokemonSeleccionado

		},

	methods:{


		getTipoPokemones: function(url){
          
          var contexto=this;
          
          console.log(url)
          axios.get(url,{
            })
              .then((res)=> {
               this.optionsPokemon=res.data;
               
               console.log(res.data)
        
              }).catch(function(err)
                {
                  console.log(err);
                  if(err.response.status==403){
                  contexto.$alert("Por su seguridad, la sesion ha expirado");
          }else{
            console.log("otra cosa");
          }
          console.log(err);
        
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