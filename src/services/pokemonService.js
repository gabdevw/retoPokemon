import axios from 'axios';

export default{

getTipoPokemones: function(url){
          
          var contexto=this;
          
          console.log(url)
          axios.get(url,{
            })
              .then((res)=> {
               this.optionsPokemon=res.data;
               console.log("este servicio esta en home y trae ??")
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

  getTipos: function(){
          console.log("paso 2")
          var contexto=this;
          return axios.get('https://pokeapi.co/api/v2/type',{
            
            })
      
      },


}