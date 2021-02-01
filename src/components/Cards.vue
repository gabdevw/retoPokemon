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
				<br>
				<span class="subtitulosCard">Habilidades</span>
				<br>
				<span class="infoCard">{{habilidades}}</span>
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