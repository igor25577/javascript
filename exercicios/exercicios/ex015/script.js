function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente !')
    } else {
        var fsex = document.getElementsByName ('radsex') 
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'img/criançaM.jpg')
            }  else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovemM.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adultoM.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosoM.jpg')
            }
        }else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >= 0 && idade < 12){
                //criança
                img.setAttribute('src', 'img/criançaF.jpg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/jovemF.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/adultoF.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'img/idosaM.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é do sexo ${genero} com ${idade} anos de idade`
        res.appendChild(img)
    }
}