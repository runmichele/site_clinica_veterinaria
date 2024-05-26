const elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener('click', function () {
    duvida.classList.toggle('ativa') //liga e desliga
  })
})



//var elementosDuvida = document.querySelectorAll('.duvida'); //1º PEGAR TODOS OS ELEMENTOS

//elementosDuvida.forEach(function (duvida) { //2º QUERO EXECUTAR UMA FUNÇÃO PARA CADA ELEMENTO DUVIDA
  //  duvida.addEventListener('click', function () { //3º DENTRO DESSA FUNÇÃO VOU ADICIONAR PARA CADA ELEMENTO DE DUVIDA O EVENTO DE CLICK
    //    duvida.classListener.add('fundo-verde'); //4º ESSE EVENTO DE CLICK VAI EXECUTAR ESSA LINDA DE DENTRO
    //});
//});



//cada função vai receber uma dúvida
    // function nome(argumento) {
        //conteúdo da função
    // }                                  

//"no JS o document é uma objeto, que consegue armazenar vários valores"//
//"é visualizado o código do js acontecendo, mas dentro do console em no F12 (inspecionar código)"//
//"query para selecionar elementos na página"//