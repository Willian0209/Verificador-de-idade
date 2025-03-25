function gerar(){
    let ano = new Date() .getFullYear()
    let fAno = document.querySelector ('#anoNascimento')
    let resultado = document.querySelector('#resultado')

    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        alert('[ERRO] Verifique as informações e tente novamente')
    } else {
        let fsex = document.getElementsByName ('fsex')
        let idade = ano - Number(fAno.value)
        let gênero = ''
        let imagem = document.querySelector('#imagem')

        if (fsex[0].checked) {
            gênero = 'Homem'
                if(idade < 14){
                    // Criança homem
                    imagem.src = 'img/crianca-h.jpg'
                } else if (idade >= 14 && idade < 31){
                    // Jovem homem
                    imagem.src = 'img/jovem-h.jpg'
                } else if (idade >= 30 && idade < 51){
                    // Adulto homem
                    imagem.src = 'img/adulto-h.jpg'
                } else if(idade >=51 && idade < 105)  {
                    // Idoso homem
                    imagem.src = 'img/idoso-h.jpg'
                } else {
                    // Morte homem
                    imagem.src = 'img/morte-h.jpg'
                }
        } else if(fsex[1].checked) {
            gênero = 'Mulher'
            if(idade < 14){
                // Criança Mulher
                imagem.src = 'img/crianca-m.jpg'
            } else if (idade >= 14 && idade < 31){
                // Jovem Mulher
                imagem.src = 'img/jovem-m.jpg'
            } else if (idade >= 30 && idade < 51){
                // Adulto Mulher
                imagem.src = 'img/adulto-m.jpg'
            } else if (idade >= 51 && idade < 105){
                // Idoso Mulher
                imagem.src = 'img/idoso-m.jpg'
            } else{
                // Morte Mulher
                imagem.src = 'img/morte-m.jpg'
            }
        }
        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    }


}