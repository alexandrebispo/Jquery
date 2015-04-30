/*
 * @ author: Alexandre Bispo
 * @ e-mail: alexandrebispo.mestre@gmail.com
 */


$(document).ready(function (li){


    /*
    *
    * SELETORES
    *
    */


    //1. Selecione todos os elementos DIV que têm a classe "module".
    $('div.module').css('margin', '10px');


    /* 2. Escreva três seletores que você pode usar para obter o terceiro item na lista não-ordenada #myList.
    Qual é o melhor para se usar? Por quê? */

    //$('#myList li').eq(2).css('color', 'blue');
    //$('div#main ul#myList li').eq(2).css('color', 'red');
    $('ul#myList li').eq(2).css('color', 'red');

    //3. Selecione o label para o input de busca usando um seletor de atributo.
    $('#search label').attr('for','q');


    //4. Encontre quantos elementos na página estão escondidos (dica: .length).
    $(':hidden', $('body')).length;

    //5. Encontre quantos elementos na página têm um atributo alt.
    $('img[alt]', $('body')).length;


    //6. Selecione todas as linhas ímpares no corpo de uma tabela.
    $('tbody tr:odd').css('background-color', '#efefef');


    /**
     *
     * ATRAVESSAMENTO
     *
     * */

    //1. Selecione todos os elementos de imagem na página; logue o atributo alt de cada imagem.
    console.log($('img[alt]'));
    $('img[alt]').eq(0).attr('alt', 'fruitJ');
    $('img[alt]').eq(1).attr('alt', 'vegetablesJ');
    $('img[alt]').eq(2).attr('alt', 'breadJ');

    //2. Selecione a caixa de texto de busca, então atravesse para o form e adicione uma classe nele.
    $('#search')
        .find('.input_text')
        .end()
        .addClass('search');

    $('.search').focus().css({'border': '1px solid black', 'padding': '10px'});


    //3. Selecione o item de lista dentro de #myList que possui uma classe "current" e remova esta classe dele;

    $('#myList li.current');
    $('#myList li.current').removeClass('current');

    //adicione uma classe "current" no próximo item de lista.
    $(':nth-child(5)').next('li').addClass('current');


    //4. Selecione o elemento select dentro de #specials; atravesse para o botão de submit.
    $("#specials select").add(":input.input_submit").css('border', '1px solid green');

    //5. Selecione o primeiro item de lista no elemento #slideshow; adicione a classe "current" a ele e então
    //adicione a classe "disabled" para seus elementos sibling.
    $('#slideshow li:first')
        .addClass('current')
        .siblings()
        .addClass('disabled');


    /**
     *
     * MANIPULANDO
     *
     */

    //1. Adicione cinco novos itens de lista no fim da lista não ordenada #myList. Dica:
    //for (var i = 0; i<5; i++) { ... }

    var $item = $('#myList').children().length + 1;
    for (var i=$item; i<13; i++) {
        $('#myList').append('<li>List item ' + i + '</li>');
    }

    //2. Remova os itens ímpares. (:even) e pares (:odd)
    $('#myList li:even').remove();

    //3. Adicione outro h2 e outro parágrafo à última div.module
    $('div.module:last').append("<h2>Lorem Ipsum</h2>", "<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>");


    //4. Adicione outra opção para o elemento select; dê ao option o valor "Wednesday".
    $("#specials select").append('<option value="Wednesday">Wednesday</option>');


    //5. Adicione uma nova div.module à página depois da última; coloque uma cópia de uma das imagens existentes dentro dela.
    $('div.module #specials').nextUntil().wrapAll("<div class='module'>Module</div>");


});// Fecha document ready

