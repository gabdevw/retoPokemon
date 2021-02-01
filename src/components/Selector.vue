<template>
	<div class="selectorPokemones">
		<div class="selector">
			
		<select class="form-control form-control-sm" v-model="pokemonSeleccionado">
            
            <option v-for="pokemon in datosPokemones.results" v-bind:key="pokemon.id" v-bind:value="pokemon.value">
                                 
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


		}

	}
</script>