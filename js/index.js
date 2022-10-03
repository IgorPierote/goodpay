 /*
    Trouxa o array do arquivo moduloDados.js para o index.js
 */

import usuarios from "./moduloDados.js";

const btnEntrar = document.getElementById("btnEntrar")
const alertaLogin = new bootstrap.Modal("#alertaLogin")


btnEntrar.addEventListener("click", () => {

   const inputLogin = document.getElementById("login").value
   const inputSenha = document.getElementById("senha").value

   let usuarioValido;

   for(let usuario of usuarios) {
      if(usuario.nomeUsuario==inputLogin){
         usuarioValido = usuario
         break
      }else{
         alert('Usuario invalido')
         break
      }
   }

   if(inputSenha == usuarioValido.Senha) {
      window.location.pathname = '/app.html'
   }else{
      alert('Senha invalida')

   }
})