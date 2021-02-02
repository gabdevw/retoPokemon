<template>
	<div class="">
    
		<div class="datos">
			<div class="picture">
				<img :src="imagen" class="img-fluid">
			</div>
			<div class="data">
				<span class="titulosCard">{{pokemon.pokemon.name}}</span>
				<br>
				<span class="subtitulosCard">Descripción</span>
				<br>
				<span class="infoCard">{{pokemon.descripcion}}</span>
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
				
				<span class="subtitulosCard seleccionaPokemon">Escoger pokemon</span>
				<span class="subtitulosCard detallePokemon">Ver detalle</span>

			</div>
		</div>

	<div class="clearfix"></div>


	


<!-- </div> -->
</div>
</template>

<script>
import axios from 'axios';

	export default{
		name: 'Cards',
		props:['pokemon'],

		data () {

			return {

				optionsPokemon:[], 
				tipos:[],
				habilidades:[],
				imagen:'',

				}
			},

		methods:{


		getDatosPokemon: function(){
          
          var contexto=this;
          axios.get(this.pokemon.pokemon.url,{
            })
              .then((res)=> {
               this.optionsPokemon=res.data;
               this.imagen=res.data.sprites.front_default;
               this.habilidades=res.data.abilities;
               this.tipos=res.data.types;
               // console.log(res.data)
               console.log("las habilidades son: ")
               console.log(this.habilidades)
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
			this.getDatosPokemon();

		// this.getTipoPokemones();
	},
	watch:{

		pokemon: function(){

			console.log("obteniendo datos de poke")
		}

	}

		}

</script>