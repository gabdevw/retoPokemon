<template>
	<div class="">
	<Registro></Registro>

		<div class="loginBox">
			
		<form @submit.prevent="validaCredenciales()">

			<img src="https://www.pikpng.com/pngl/b/31-319697_pokemon-logo-png-transparent-pokemon-logo-png-images.png" alt="" class="img-fluid">
			
			<br>
			<br>
			<label class="subtitulos" for="">E-mail</label>
			<input type="text" id="userIdr" v-model="user" class="form-control cajaInput" >

			<label class="subtitulos espacioUp" for="">Contraseña</label>
			<input type="password" id="passIdr" v-model="pass" class="form-control cajaInput" >

			<br>

			<button type="submit" class="botonEnviar form-control btn btn-primary">Iniciar sesión</button>

			<button v-on:click="registrar()" type="button" class="form-control btn btn-success registro subtitulos">Registrarse</button>
		

		</form>

		
		</div>
	</div>

</template>

<script>


var $=require('jquery')
import '@/firebase/init.js'
import firebase from 'firebase'
import Registro from '@/components/Registro';

	export default{
	name:'Login',

		data() {

			return{

				user:null,
				pass:null
			}
		},


		methods:{
		
			

			validaCredenciales(){

		
		$('#userIdr').removeClass("campoObligatorio");
		$('#passIdr').removeClass("campoObligatorio");


		if (this.user==null) { 

        // $('#emailId').addClass("campoObligatorio");  
        $('#userIdr').focus();

        }else if (this.pass==null) { 

        // $('#passId').addClass("campoObligatorio");  
        $('#passIdr').focus();

        }else{
			console.log("loguenado");
			console.log(this.user)
			console.log(this.pass)
			firebase.auth().signInWithEmailAndPassword(this.user,this.pass)
		.then(user=>{
			console.log(user)
			localStorage.setItem('isAutenticade', true);
			this.$router.push({name:'Home'});
		}).catch(err => {
			console.log(err);
		});
        
        }



			},

			registrar(){

				$('#modalRegistro').modal('show');

			}
		},

		created(){

			if (localStorage.getItem('isAutenticade')=='true') {
			console.log("ingresa alogin?")
			this.$router.push({name:'Home'});	
		}

		},


		components:{

			Registro

		}


	}

	
</script>