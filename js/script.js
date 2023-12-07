
function operacao(tipo,valor) {
    if (tipo ==="acao") {
        if (valor==="c") {
            document.getElementById("ler").value = ""
        }
        else if (valor==="+" || valor==="-"|| valor==="*"|| valor==="/") {
           
            document.getElementById("ler").value += valor
        }
        else if (valor==="<-") {
            var apagar = document.getElementById("ler").value
            
            document.getElementById("ler").value -=apagar

        }
        else if (valor==="sqrt") {
            var sqr = document.getElementById("ler").value
            sqr = Math.sqrt(sqr)
            document.getElementById("ler").value = sqr
        }
        else if (valor==="cos") {
            var cosseno = document.getElementById("ler").value
            
            cosseno= Math.cos(cosseno)
            document.getElementById("ler").value = cosseno
        }
        else if (valor==="sen") {
            var seno = document.getElementById("ler").value
            seno= Math.sin(seno)
            document.getElementById("ler").value = seno
        }
        else if (valor==="=") {
            var executar = eval(document.getElementById("ler").value)
            document.getElementById("ler").value = executar
        }
        if (valor==="n!") {
            var numero = parseInt(document.getElementById("ler").value)
            var fat = 1;
            var cont =1;
            for ( cont = 1; cont <=numero; cont++) {
                 fat = fat* cont
            }
            document.getElementById("ler").value = fat
        }
    }
    else if(tipo === "valor"){
        document.getElementById("ler").value += valor
    }
}