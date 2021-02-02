<template>
	<div class="selectorPokemones">
		<div class="selector">
			
		<select class="form-control form-control-sm" v-model="TipoPokemonSeleccionado">
            
            <option v-for="pokemon in datosPokemones.results" v-bind:key="pokemon.url" v-bind:value="pokemon.url">
                                 
                    {{ pokemon.name}}
                   
            
            </option> 
                            
        </select>
		
		</div>

	</div>
</template>

<script>

import pokemonService from '@/services/pokemonService'


	export default {
		data () {

			return {
	
				
				datosPokemones:[],
				TipoPokemonSeleccionado:'',

			}
		},

		methods:{


		getTipoPokemones(){
         var contexto = this;
         
         this.datosPokemones= pokemonService.getTipos()
         .then((res)=> {
               
               this.datosPokemones=res.data;
               
                   if(this.datosPokemones.results.length>0){

                     this.TipoPokemonSeleccionado=this.datosPokemones.results[0].url;

                    }

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

			this.getTipoPokemones();
			
		
		},


		watch:{
			TipoPokemonSeleccionado: function(){
				
				console.log(this.TipoPokemonSeleccionado)
				this.$emit("filtrar", this.TipoPokemonSeleccionado)
			}


		}

	}
</script>