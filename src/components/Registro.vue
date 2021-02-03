<template>
	<div class="">
<form @submit.prevent="valida()">
	
<div class="modal fade" data-backdrop="static" data-keyboard="false" id="modalRegistro" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      

		<label class="espacioUp" for="">E-mail:</label>
		<input type="text" v-model="email" class="form-control">
			<div v-if="correctFormat" class="infoCardblack">
				Respeta el formato micuenta@correo.com
			</div>
		
		<label class="espacioUp" for="">Contraseña:</label>
		<input type="password" v-model="pass" class="form-control">

		<div v-if="minLenghtPass1" class="infoCardblack">
				Al menos 6 caracteres
			</div>

		<label class="espacioUp" for="">Confirma contraseña:</label>
		<input type="password" v-model="passConfirm" class="form-control">
		<div v-if="minLenghtPass2" class="infoCardblack">
				Al menos 6 caracteres
			</div>

		<div v-if="passEquals" class="infoCardblack">
				Las contraseñas deben coincidir
			</div>
	

      </div>
      <div class="modal-footer">
        <button type="button"  class="btn btn-secondary" v-on:click="cancelar()" >Cancelar</button>
        
        <button type="submit" :disabled="isDisabled" class="btn btn-success">Registrar</button>
      </div>
    </div>
  </div>
</div>

</form>
	</div>
	
</template>

<script>
//import db from '@/firebase/init.js'
import '@/firebase/init.js'
import firebase from 'firebase'
import Swal from 'sweetalert2'
var $=require('jquery')

	export default{
		name:'Registro',



		data(){

			return {
							
				isDisabled:true,	
				email:null,
				pass:null,
				passConfirm:null,
				correctFormat:false,
				minLenghtPass1:false,
				minLenghtPass2:false,
				passEquals:false
				
				
			}
		},




		methods:{


			validacionAparte(){

				var formatoEmail = /^([\da-z_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/;


				if (this.email==null || this.email=='') { 	
					this.isDisabled=true;
					this.correctFormat=false;
					this.minLenghtPass1=false;
					this.minLenghtPass2=false;
					this.passEquals=false;
					
				}else if (!formatoEmail.test(this.email)){
					this.isDisabled=true;
					this.correctFormat=true;
					this.minLenghtPass1=false;
					this.minLenghtPass2=false;
					this.passEquals=false;
				}else if (this.pass==null || this.pass==''){
					this.isDisabled=true;
					this.correctFormat=false;
					this.minLenghtPass1=false;
					this.minLenghtPass2=false;
					this.passEquals=false;
					
				}else if (this.pass.length<6){
					this.isDisabled=true;
					this.correctFormat=false;
					this.minLenghtPass1=true;
					this.minLenghtPass2=false;
					this.passEquals=false;
					
				}else if (this.passConfirm==null || this.passConfirm==''){
					this.isDisabled=true;
					this.correctFormat=false;
					this.minLenghtPass1=false;
					this.minLenghtPass2=false;
					this.passEquals=false;
					
				}else if (this.passConfirm.length<6){
					this.isDisabled=true;
					this.correctFormat=false;
					this.minLenghtPass1=false;
					this.minLenghtPass2=true;
					this.passEquals=false;
					
				}else if (this.pass!=this.passConfirm){
					this.isDisabled=true;
					this.correctFormat=false;
					this.minLenghtPass1=false;
					this.minLenghtPass2=false;
					this.passEquals=true;
					
				}else{
					this.isDisabled=false;
					this.correctFormat=false;
					this.minLenghtPass1=false;
					this.minLenghtPass2=false;
					this.passEquals=false;


				}


			},


			valida(){

		
			console.log("enviando formulariooo");
			
			firebase.auth().createUserWithEmailAndPassword(this.email,this.pass)


			.then(user=>{

				Swal.fire({
                      position: 'center',
                      icon: 'success',
                      title: 'Registrado exitosamente',
                      showConfirmButton: false,
                      timer: 1500
                    })

			this.cancelar();
			console.log(user)
		}).catch(err => {
			console.log(err);
			Swal.fire({
  icon: 'error',
  title: 'Algo salio mal',
  text: err,
  
})
		});
        



			},

	cancelar(){

		this.reset();
		$('#modalRegistro').modal('hide');
	},


	reset(){

      Object.assign(this.$data, this.$options.data.call(this));

    },


		},


			watch:{

			email: function(){
				this.validacionAparte();

			},

			pass: function(){
				this.validacionAparte();

			},
			passConfirm: function(){
				this.validacionAparte();

			}
		},

	}
</script>