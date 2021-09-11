var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("tbody");

tabela.addEventListener("dblclick", function(event){
    var alvo = event.target;
    var paiDoAlvo = alvo.parentNode;

    paiDoAlvo.classList.add("fadeOut");
    
    setTimeout(function(){
        paiDoAlvo.remove();
    }, 800); 
})