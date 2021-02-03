<template>
	<div class="">

		<PokemonDetail ref="pokemonDetalle"></PokemonDetail>

		<Toolbar></Toolbar>
		<Selector @filtrar="getTipoPokemones"></Selector>

		<div class="clearfix"></div>
		
			
		<div v-if="isLoading==false" class="contenedorCards">
		
		<div v-for="pokemon in optionsPokemon.pokemon" :key="pokemon.id" v-bind:value="pokemon.value" class="card">
		
			<Cards @namePokemon="namePokemon" @urlPokemon="urlPokemon" :pokemon="pokemon"></Cards>
		
		</div>

		</div>

		<div class="loaderpoke" v-if="isLoading==false && existPokemons==0">
        <h5 class="titulos">No hay datos para mostrar</h5> 
        </div>
		
		
		<div v-else class="loaderpoke">
			
            <loading

            :active.sync="isLoading" 
            :can-cancel="true" 
            :is-full-page="fullPage"
            :loader="loader"
            :color="color"
            :background-color="fondo"
            > 
          </loading>
      </div>

	
		<div class="tablaPokemonSeleccionado">
			
		<TablaPokemonSeleccionado @filtrar="getTipoPokemones" ref="tablaPokemones"></TablaPokemonSeleccionado>
		</div>
		
		
	</div>
</template>

<script>

var $ = require('jquery')

import pokemonService from '@/services/pokemonService'
import Toolbar from '@/components/Toolbar';
import Selector from '@/components/Selector';
import Cards from '@/components/Cards';
import TablaPokemonSeleccionado from '@/components/TablaPokemonSeleccionado';
import PokemonDetail from '@/components/PokemonDetail'

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
				modoOscuro:false,
				existPokemons:''

			}
		},

		components:{
			Toolbar,
			Selector,
			Cards,
			TablaPokemonSeleccionado,
			Loading,
			PokemonDetail


		},

	methods:{

		
		namePokemon(name){
			console.log("veamos que trae el emit")
			console.log(name)

			this.$refs.tablaPokemones.agregaPokemon(name);	

		},

		urlPokemon(url){
			console.log("veamos que trae el emit")
			console.log(url)

			this.$refs.pokemonDetalle.dataCompleta(url);

			$('#modalPokemonAdetalle').modal('show');

		},


		getTipoPokemones: function(url){
          this.isLoading=true;
          var contexto=this;
          
          this.optionsPokemon= pokemonService.getTipoPokemones(url)
              .then((res)=> {
               this.optionsPokemon=res.data;
               console.log("este servicio trae pokemones del mismo tipo")
                console.log(res.data)
                if(res.data.pokemon.length==0){

                    console.log("no trae nada")
                    this.existPokemons=0;
                }	
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