<template>
	<div class="">

		<div class="datos">
			<div class="picture">
				<img :src="imagen" class="img-fluid">
			</div>
			<div class="data">
				<span class="titulosCard">{{pokemon.pokemon.name}}</span>
		
				<br>
				
				<br>
				
				<span class="subtitulosCard">Habilidades</span>
				<br>
				<div class="" v-for="habilidad in habilidades" :key="habilidad.url" v-bind:value="habilidad.url">
					
				<span class="infoCard">{{habilidad.ability.name}}</span>
				<br>	
				</div>
				<br>
				
				<span class="subtitulosCard">Tipo</span>
				<br>
				<div class="" v-for="tipo in tipos" :key="tipo.id" v-bind:value="tipo.value">
					
				<span class="infoCard">{{tipo.type.name}}</span>
				<br>	
				</div>

			</div>

			<div class="clearfix"></div>

			<div class="opcionesElegir">
				
				<span v-on:click="agregaPokemon(pokemon.pokemon.name)" class="subtitulosCard seleccionaPokemon">Escoger pokemon</span>

				<span v-on:click="detallePokemon(pokemon.pokemon.url)" class="subtitulosCard detallePokemon">Ver detalle</span>

			</div>
		</div>

	<div class="clearfix"></div>


</div>
</template>

<script>
import pokemonService from '@/services/pokemonService'



	export default{
		name: 'Cards',
		props:['pokemon'],

		data () {

			return {

				
				tipos:[],
				habilidades:[],
				imagen:'',
				urlPokemon:'',
				namePokemon:''
				

				}
			},

		components:{
			
		},

		methods:{


	agregaPokemon(nombre){

       
      this.namePokemon=nombre;
       console.log("se copio nombre desde card")
       console.log(this.namePokemon)
       this.$emit('namePokemon', this.namePokemon);
        
      },


		getDatosPokemon: function(){
          this.isLoading=true;
          var contexto=this;
               
           pokemonService.getDatosPokemon(this.pokemon.pokemon.url)    	
              .then((res)=> {
               // this.pokemonAdetalle=res.data;
               // this.imagen=res.data.sprites.front_default;
               this.imagen=res.data.sprites.other.dream_world.front_default;
               this.habilidades=res.data.abilities;
               this.tipos=res.data.types;
               // console.log(res.data)
               // console.log("las habilidades son: ")
               // console.log(this.habilidades)
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

      detallePokemon(url){
       // console.log(url)

       this.urlPokemon=url;
       console.log("se copio la url desde card")
       console.log(this.urlPokemon)
       this.$emit('urlPokemon', this.urlPokemon);

       
      }

		},

	created(){
			this.getDatosPokemon();

		// this.getTipoPokemones();
	},
	watch:{

		pokemon: function(){
			this.getDatosPokemon();
			console.log("obteniendo datos de poke")
		}

	}

		}

</script>