<template>

	<div class="espacioUp2">
	<div class="row">
		
		<div v-for="personaje in characters.results" :key="personaje.id" class="col-md-4 col-sm-6 col-xs-12">
				
		<div :class="$store.state.classObject" class="card" style="width: 18rem;">
			<img :src="personaje.image" class="card-img-top" alt="...">
			<div class="card-body">
               <h5 class="card-title"><span :class="$store.state.classObject" class="subtitulos">
				{{personaje.name}}
					
				</span></h5>
               <p class="card-text infoCards">

               <span :class="$store.state.classObject" class="subtitulosCard">Estatus</span>
               <br>
               <span :class="$store.state.classObject" class="infoCard">{{personaje.status}}</span>
               <br>
               <span :class="$store.state.classObject" class="subtitulosCard">Tipo</span>
               <br>

               <span v-if="personaje.type==''" :class="$store.state.classObject" class="infoCard">N/A</span>

               <span v-else :class="$store.state.classObject" class="infoCard">{{personaje.type}}</span>


				</p>
              <!--  <a href="#" class="btn btn-primary">Go somewhere</a> -->
			</div>
		</div>
				

		</div>
	</div>
	</div>
	

</template>

<script>
import gql from 'graphql-tag';

	export default {
		name:'CardsRM',
		data (){

			return {

				characters:[],

			}
		},
		apollo:{

			characters: gql`{

				characters{

					results {
      
                        id
                        name
                        image
                        status,
                        type
                  }
				}
                 			

			}`,
		},
		methods:{


		},

		// created:{

		// },

		watch:{


		}

	}

</script>