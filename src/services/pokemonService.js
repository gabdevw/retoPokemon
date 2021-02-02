import axios from 'axios';

export default{

getTipoPokemones: function(url){
     
      return axios.get(url,{})
              
      },

getTipos: function(){

          
      return axios.get('https://pokeapi.co/api/v2/type',{})
      
      },

getDatosPokemon: function(url){

      return axios.get(url,{}) 
  }



}