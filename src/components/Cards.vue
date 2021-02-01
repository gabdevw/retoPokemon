<template>
	<div class="">
    
	<div v-for="pokemon in optionsPokemon.results" :key="pokemon.id" v-bind:value="pokemon.value" class="card">

		<div class="datos">
			<div class="picture">
				<img src="https://e7.pngegg.com/pngimages/30/941/png-clipart-pokemon-pokemon.png" class="img-fluid">
			</div>
			<div class="data">
				<span class="titulosCard">{{pokemon.name}}</span>
				<br>
				<span class="subtitulosCard">Descripción</span>
				<br>
				<span class="infoCard">{{pokemon.descripcion}}</span>
				<br>
				<br>
				<span class="subtitulosCard">Habilidades</span>
				<br>
				<span class="infoCard">{{pokemon.habilidad}}</span>
			</div>

			<div class="clearfix"></div>

			<div class="opcionesElegir">
				
				<span class="subtitulosCard seleccionaPokemon">Escoger pokemon</span>
				<span class="subtitulosCard detallePokemon">Ver detalle</span>

			</div>
		</div>

	<div class="clearfix"></div>


	</div>


<!-- </div> -->
</div>
</template>

<script>
// import axios from 'axios';
import pokemonService from '@/services/pokemonService';

	export default{
		name: 'Cards',

		data () {

			return {

				optionsPokemon:{results:[]}, 

				}
			},

		methods:{


		getTipoPokemones = async () =>{

        this.optionsPokemon=pokemonService.getTipoPokemones();
        console.log("que hay?----------------")
        console.log(this.optionsPokemon)  
        //   var contexto=this;
        //   axios.get(this.$hostname+'/api/v2/pokemon?offset=20&limit=20',{
        //     })
        //       .then((res)=> {
        //        this.optionsPokemon=res.data;
        //        console.log(res.data)
        
        //       }).catch(function(err)
        //         {
        //           console.log(err);
        //           if(err.response.status==403){
        //           contexto.$alert("Por su seguridad, la sesion ha expirado");
        //   }else{
        //     console.log("otra cosa");
        //   }
        //   console.log(err);
        
        // });
      },
		},

	async created(){

		await this.optionsPokemon = pokemonServices.getTipoPokemones();
	}

		}

</script>