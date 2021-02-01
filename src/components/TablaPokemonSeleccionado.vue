<template>
	<div class="">

		<div class="titulosCardPokemon">Pokemon elegidos</div>
		
		

<table class="table table-hover tablaPokemones">
  <thead>
    <tr>
      
      <th scope="col">Nombre</th>
      <th scope="col">Habilidad</th>
      <th scope="col">Acción</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
    
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
     
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>


	
	<div class="listadoPokemon subtitulosCard">Recargar listado de pokemon</div>

	<div class="listadoPokemon subtitulosCard">Quitar todos</div>


		

	</div>
</template>

<script>


	export default{
		name: 'TablaPokemonSeleccionado',

		data () {

			return {

		

			}
		},

		components:{
	
		},

		methods:{

		}
	}

</script>