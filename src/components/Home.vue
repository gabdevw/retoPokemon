<template>
	<div class="">
		<Toolbar></Toolbar>
		<Selector></Selector>

		<div class="clearfix"></div>
		
			
		<div class="contenedorCards">
			
		<Cards></Cards>
		</div>


		<div class="tablaPokemonSeleccionado">
			
		<TablaPokemonSeleccionado></TablaPokemonSeleccionado>
		</div>
		
		
	</div>
</template>

<script>
import Toolbar from '@/components/Toolbar';
import Selector from '@/components/Selector';
import Cards from '@/components/Cards';
import TablaPokemonSeleccionado from '@/components/TablaPokemonSeleccionado';

	export default{

		data () {

			return {

				user:null,
				modoOscuro:false

			}
		},

		components:{
			Toolbar,
			Selector,
			Cards,
			TablaPokemonSeleccionado

		}
	}

</script>