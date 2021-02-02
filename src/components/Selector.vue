<template>
	<div class="selectorPokemones">
		<div class="selector">
			
		<select class="form-control form-control-sm" v-model="pokemonSeleccionado">
            
            <option v-for="pokemon in datosPokemones.results" v-bind:key="pokemon.url" v-bind:value="pokemon.url">
                                 
                    {{ pokemon.name}}
                   
            
            </option> 
                            
        </select>
		
		</div>

	</div>
</template>

<script>
import axios from 'axios';

	export default {
		data () {

			return {
	
				
				datosPokemones:[],
				pokemonSeleccionado:'',

			}
		},

		methods:{


		getTipoPokemones: function(){
          
          var contexto=this;
          axios.get(this.$hostname+'/api/v2/type',{
            })
              .then((res)=> {
               this.datosPokemones=res.data;
               console.log("olaaaaaaa")
               console.log(this.datosPokemones)

               if(this.datosPokemones.results.length>0){
                this.pokemonSeleccionado=this.datosPokemones.results[0].url;
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
			pokemonSeleccionado: function(){
				
				console.log(this.pokemonSeleccionado)
				this.$emit("filtrar", this.pokemonSeleccionado)
			}


		}

	}
</script>