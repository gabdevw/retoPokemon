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
		<input type="text" id="emailId" v-model="user.email" class="form-control">

		<label class="espacioUp" for="">Contraseña:</label>
		<input type="password" id="passId" v-model="user.password" class="form-control">

		<label class="espacioUp" for="">Confirma contraseña:</label>
		<input type="password" id="passId" v-model="user.passwordConfirma" class="form-control">
	

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" v-on:click="cancelar()" >Cancelar</button>
        <button type="submit" class="btn btn-success">Registrar</button>
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
var $=require('jquery')

	export default{
		name:'Registro',



		data(){

			return {
			
			user:{

				
				email:null,
				password:null,
				passwordConfirma:null,
				
				}
			}
		},




		methods:{

			valida(){

		$('#emailId').removeClass("campoObligatorio");
		$('#passId').removeClass("campoObligatorio");


		if (this.user.email==null) { 

        // $('#emailId').addClass("campoObligatorio");  
        $('#emailId').focus();

        }else if (this.user.password==null) { 

        // $('#passId').addClass("campoObligatorio");  
        $('#passId').focus();

        }else{
			console.log("enviando formulariooo");
            console.log(this.user)
			console.log("enviando formulario");
		firebase.auth().createUserWithEmailAndPassword(this.user.email,this.user.password)
		.then(user=>{
			console.log(user)
		}).catch(err => {
			console.log(err);
		});
        }



			},

	cancelar(){

		this.reset();
		$('#modalRegistro').modal('hide');
	},


	reset(){

      Object.assign(this.$data, this.$options.data.call(this));

    },


		}

	}
</script>