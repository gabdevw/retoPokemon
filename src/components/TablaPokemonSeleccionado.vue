<template>
	<div class="">

		<div :class="$store.state.classObject" class="titulosCardPokemon">Pokemon elegidos</div>
		
		

<table :class="$store.state.classObject" class="table table-hover tablaPokemones">
  <thead>
    <tr>
      
      <th scope="col">Nombre</th>
     
      <th scope="col">Acción</th>
    </tr>
  </thead>
  <tbody v-for="pokemon in pokemonesSeleccionados" :key="pokemon.url">
    <tr>
    
      <td :class="$store.state.classObject" v-on:click="detallePokemon(pokemon.url)">{{pokemon.name}}</td>

      <td><button v-on:click="quitarPokemon(pokemon)" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button></td>
    </tr>
    
  </tbody>
</table>


	
	<div v-on:click="recargarPokemones()" :class="$store.state.classObject" class="listadoPokemon subtitulosCard">Recargar listado de pokemon</div>

	<div v-on:click="quitarTodos()" :class="$store.state.classObject" class="listadoPokemon subtitulosCard">Quitar todos</div>


		

	</div>
</template>

<script>


	export default{
		name: 'TablaPokemonSeleccionado',

		data () {

			return {

          pokemonesSeleccionados:[],
          recargarListaPokemones:'https://pokeapi.co/api/v2/type/1'
			}
		},


		components:{
	
		},

		methods:{

      detallePokemon(url){
       // console.log(url)

       this.urlPokemon=url;
       console.log("se copio la url desde TablaPokemonSeleccionado")
       console.log(this.urlPokemon)
       this.$emit('urlPokemon', this.urlPokemon);

       
      },

      recargarPokemones(){

        this.$emit("filtrar", this.recargarListaPokemones)

      },

      quitarTodos(){

        this.pokemonesSeleccionados=[];

      },
      quitarPokemon(pokeSeleccionado){

        const index = this.pokemonesSeleccionados.indexOf(pokeSeleccionado);

        this.pokemonesSeleccionados.splice(index, 1);

      },

      agregaPokemon(pokemon){

        console.log("llego el poke full")
        console.log(pokemon)
   

        this.pokemonesSeleccionados.push(pokemon)
        console.log(this.pokemonesSeleccionados)
      }
		},

    watch:{

      pokemonesSeleccionados: function(){



      }
    }
	}

</script>