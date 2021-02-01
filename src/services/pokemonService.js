import axios from 'axios';

export default{

	async getTipoPokemones: function(){
          
          var contexto=this;
          axios.get('https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',{
            })
              .then((res)=> {
               console.log("aqui es pokemonService")
               console.log(res.data)
               return res.data;

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


}