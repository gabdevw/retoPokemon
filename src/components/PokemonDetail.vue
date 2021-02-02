<template>
	
<div class="modal fade" data-backdrop="static" data-keyboard="false" id="modalPokemonAdetalle" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel"><strong>{{pokemon.name}}</strong></h3>
        <button type="button" v-on:click="cancelar()" class="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      
      <div class="datos">
			<div class="picture">
				<img :src="imagen" class="img-fluid">
			</div>
			<div class="data">

				<span class="subtitulosModalPokemon">Habilidades</span>
				<br>
				<div class="" v-for="habilidad in habilidades" :key="habilidad.url" v-bind:value="habilidad.url">
					
				<span class="infoModalPokemon">{{habilidad.ability.name}}</span>
				<br>	
				</div>
				<br>
				
				<span class="subtitulosModalPokemon">Tipo</span>
				<br>
				<div class="" v-for="tipo in tipos" :key="tipo.id" v-bind:value="tipo.value">
					
				<span class="infoModalPokemon">{{tipo.type.name}}</span>
				<br>	
				</div>

				<br>
				
				<span class="subtitulosModalPokemon">Experiencia</span>
				<br>
					
				<span class="infoModalPokemon">{{pokemon.base_experience}}</span>
				<br>	


			</div>

			<div class="clearfix"></div>
			<div class="opcionesElegir">
				<span class="subtitulosModalPokemon">Movimientos</span>
				<br>
				<br>
				<div class="enlinea" v-for="move in moves" :key="move.id" v-bind:value="move.value">
					
				<span class="infoModalPokemon espacioRight">{{move.move.name}}, </span>
				<br>	
				</div>


			</div>

			

	
		</div>
	
	


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" v-on:click="cancelar()" >Cerrar</button>
        
      </div>
    </div>
  </div>
</div>	
		
	
</template>

<script>
	import pokemonService from '@/services/pokemonService'
	var $ = require('jquery')
	export default {
		name:'PokemonDetail',
		data(){

			return {

				tipos:[],
				habilidades:[],
				imagen:'',
				pokemon:[],
				moves:[],				

			}
		},

		// props:['urlPokemon'],

		methods:{

	dataCompleta(url){

        // this.isLoading=true;
          var contexto=this;
               
           pokemonService.getDatosPokemon(url)    	
              .then((res)=> {
               this.pokemon=res.data;
               this.imagen=res.data.sprites.other.dream_world.front_default;
               this.habilidades=res.data.abilities;
               this.tipos=res.data.types;
               this.moves=res.data.moves;
               

               console.log(res.data)

               // this.isLoading=false;
              }).catch(function(err)
                {
                  console.log(err);
                  if(err.response.status==403){
                  contexto.$alert("Por su seguridad, la sesion ha expirado");
          }else{
            console.log("otra cosa");
          }
          console.log(err);
        // this.isLoading=false;
        });
	},



	cancelar(){

		this.reset();
		$('#modalPokemonAdetalle').modal('hide');
	},


	reset(){

      Object.assign(this.$data, this.$options.data.call(this));

    },

		},

	// created(){

	// 	this.veamos();
	// }

	// watch:{

	// 	cancelar:function(){


	// 	}
	// }
	}
</script>