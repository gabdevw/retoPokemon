<template>
	<div class="">
	
	<Modal name="modalRegistrarse"
		:width="400"
		:height="470"
        :clickToClose="false"
        :adaptive="true"
        :scrollable="true"
        :focusTrap="true"
	> 

		<Registro></Registro>

	</Modal>
		<div class="loginBox">
			
		<form @submit.prevent="validaCredenciales()">

			<img src="https://www.pikpng.com/pngl/b/31-319697_pokemon-logo-png-transparent-pokemon-logo-png-images.png" alt="" class="img-fluid">
			
			<br>
			<br>
			<label class="subtitulos" for="">E-mail</label>
			<input type="text" id="userIdr" v-model="user" class="form-control cajaInput">
			

			<div v-if="correctFormat" class="infoCard">
				Respeta el formato micuenta@correo.com
			</div>

			<label class="subtitulos espacioUp" for="">Contraseña</label>
			<input type="password" id="passIdr" v-model="pass" class="form-control cajaInput" >


			<br>

			<button type="submit" :disabled="isDisabled" class="botonEnviar form-control btn btn-primary">Iniciar sesión</button>

			<button v-on:click="registrar()" type="button" class="form-control btn btn-success registro subtitulos">Registrarse</button>
		

		</form>

		
		</div>
	</div>

</template>

<script>



import '@/firebase/init.js'
import firebase from 'firebase'
import Registro from '@/components/Registro';
import Swal from 'sweetalert2'

	export default{
	name:'Login',

		data() {

			return{

				correctFormat:false,
				isDisabled:true,				
				user:null,	
				pass:null
			}
		},


		methods:{
		
			

			validaCredenciales(){

		console.log("validacion pasada");

		firebase.auth().signInWithEmailAndPassword(this.user,this.pass)
		.then(user=>{
			console.log(user)
			localStorage.setItem('isAutenticade', true);
			this.$router.push({name:'Home'});
		}).catch(err => {

			
			
			Swal.fire({
  icon: 'error',
  title: 'Algo salio mal',
  text: err,
  
})

			console.log(err);

		});


			},


			validacionAparte(){

				var formatoEmail = /^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;


				if (this.user==null || this.user=='') { 	
					this.isDisabled=true;
					this.correctFormat=false;
					
				}else if (!formatoEmail.test(this.user)){
					this.isDisabled=true;
					this.correctFormat=true;
				}else if (this.pass==null || this.pass==''){
					this.isDisabled=true;
					this.correctFormat=false;
					
				}else{
					this.isDisabled=false;
					this.correctFormat=false;


				}


			},

			registrar(){

				console.log()
				this.$modal.show('modalRegistrarse')
				// $('#modalRegistro').modal('show');
				// this.$modal.show('modalRegistro');

			}
		},



		created(){

			if (localStorage.getItem('isAutenticade')=='true') {
			console.log("ingresa alogin?")
			this.$router.push({name:'Home'});	
		}

		},

		watch:{

			user: function(){
				this.validacionAparte();

			},

			pass: function(){
				this.validacionAparte();

			}
		},


		components:{

			Registro

		}


	}

	
</script>