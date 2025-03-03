//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let lista = document.getElementById("listaAmigos");




function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    
    if(nome == ""){
        alert("Por favor, insira um nome.");
    }else{
    if(amigos.includes(nome)){
            alert("Por favor, insira um nome diferente");
            limparCampo()
        }else{
            amigos.push(nome);
            console.log(amigos);
            limparCampo();
            listaAmigos();
            
        }            
    }
  
}



function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}


function listaAmigos(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "" ;  
    
    for(let i= 0; i< amigos.length; i++){
        let li = document.createElement("li");
        li.textContent= amigos[i];
        lista.appendChild(li);
        
    } 
    
}

function sortearAmigo(){
    
    lista.innerHTML = "" ;
     
    if(amigos == 0){
        alert("lista zerada");
    }else{ 
        let resultado = document.getElementById("resultado");
        let nomeAleatorio = Math.floor(Math.random() * amigos.length)
        resultado.innerHTML =`O amigo Secreto sorteado é:${amigos[nomeAleatorio]}`;
        
    }


}



