<template>
	<div class="">

		<div class="datos">
			<div class="picture">
				<img :src="imagen" class="img-fluid">
			</div>
			<div class="data">
				<span class="titulosCard" :class="$store.state.classObject">{{pokemon.pokemon.name}}</span>
		
				<br>
				
				<br>
				
				<span :class="$store.state.classObject" class="subtitulosCard">Habilidades</span>
				<br>
				<div class="" v-for="habilidad in habilidades" :key="habilidad.url" v-bind:value="habilidad.url">
					
				<span :class="$store.state.classObject" class="infoCard">{{habilidad.ability.name}}</span>
				<br>	
				</div>
				<br>
				
				<span :class="$store.state.classObject" class="subtitulosCard">Tipo</span>
				<br>
				<div class="" v-for="tipo in tipos" :key="tipo.id" v-bind:value="tipo.value">
					
				<span :class="$store.state.classObject" class="infoCard">{{tipo.type.name}}</span>
				<br>	
				</div>

			</div>

			<div class="clearfix"></div>

			<div class="opcionesElegir">
				
				<span v-on:click="agregaPokemon(pokemon.pokemon.url, pokemon.pokemon.name)" :class="$store.state.classObject" class="subtitulosCard seleccionaPokemon">Escoger pokemon</span>

				<span v-on:click="detallePokemon(pokemon.pokemon.url)" :class="$store.state.classObject" class="subtitulosCard detallePokemon">Ver detalle</span>

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
				namePokemon:'',
				pokemonFull:{

					name:'',
					url:''
				}
				

				}
			},

		components:{
			
		},

		methods:{


	agregaPokemon(url, nombre){

       
      this.urlPokemon=url;
       console.log("se copio nombre de url desde card")
       console.log(this.urlPokemon)
       console.log(nombre)

       this.pokemonFull.name=nombre
       this.pokemonFull.url=this.urlPokemon
       console.log("Se lleno el arrgleo?")
       console.log(this.pokemonFull)
       this.$emit('urlPokemonAdd', this.pokemonFull);
        
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