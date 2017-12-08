

$(document).ready(function() {

    verbs = verbsPast;
    loadCache();
    loadQuestion();
    lowerCase(verbs);
    

    console.log($('#verb').text());

    $('#enter').click(function(e) {
        e.preventDefault();
          testaResposta();
    });

    $('#verResposta').click(function(e) {
        e.preventDefault();
        verResposta();
    });

    $('#limpar').click(function(e) {
        e.preventDefault();
        limpar();
    });

    $('#trocarVerbos').click(function(e) {
        e.preventDefault();
        trocarVerbos();
        limpar();
        loadQuestion();
    });

    //enter
    $('input[type="text"').keypress("click", function(event) {
      if(event.which === 13) {
        testaResposta();
      }
    });

    function loadQuestion() {

        var keys = Object.keys(verbs);
        console.log(verbs)
        var randomIndex = Math.floor(Math.random() * (keys.length));

        var indexes = localStorage.getItem("indexes");

        if (indexes){
          indexes = indexes.split(',');
        } else {
          indexes = [];          
        }

        if (indexes.length == keys.length) {
           toastr["info"]("Você chegou ao fim da lista", "Alerta");
           return;
        }

        while(indexes.indexOf(randomIndex.toString()) != -1) {
          randomIndex = Math.floor(Math.random() * (keys.length));          
        }

        indexes.push(randomIndex);
        localStorage.setItem("indexes", indexes.join(','));


        var verb = keys[randomIndex];
        $question = $('#verb');
        $question.html(keys[randomIndex]);
    }

    function testaResposta() {

      $input = $('input');
      $question = $('#verb');

      if ($input.val() == verbs[$question.text()]) {
          toastr["success"]("Você acertou", "Alerta");
          var result = "<li>" + $question.text() + " : " + $input.val() + "</li>";
          $('ul.answer-right').append(result);
          saveCache($('ul.answer-right').html());
          loadQuestion();
         
      } else {
          toastr["error"]("Errou", "Alerta");
          var result = "<li>" + $question.text() + " : " + $input.val() + "</li>";
          $('ul.answer-wrong').append(result);
      }
        score();
        $input.val('');
        $input.focus();
    }

    function loadCache() {

      var result = localStorage.getItem("result");
      if (result) {
        $('ul.answer-right').append(result);  
      }
    }

    function saveCache(result) {      
      localStorage.setItem("result", result);
    }

    function verResposta(resposta) {
      
      var $verResposta = $('#verResposta');
      $question = $('#verb');

      var resposta = "A resposta é " + verbs[$question.text()];
      toastr["warning"](resposta, "Alerta");
    }

    function limpar(limpar) {
      var $limpar = $("#limpar");
      localStorage.setItem("result", "");
      localStorage.setItem("indexes", "");
      $('ul.answer-right').html('');
      $('ul.answer-wrong').html('');
    }

    function trocarVerbos() {
      var $ddlVerbs = $("#ddlVerbs");
      var name = $ddlVerbs.val();
      this['verbs'] = this[name];
    }

    function score() {
      $score = $('#score');
      var totalCertos = $('ul.answer-right li').length;
      var totalErrados = $('ul.answer-wrong li').length;

      $score.html(totalCertos - (totalErrados *2));
    }

    function lowerCase() {
      
      $("input").on('input', function(evt) {
        var input = $(this);
        var start = input[0].selectionStart;
        $(this).val(function (_, val) {
          return val.toLowerCase();
        });
        //input[0].selectionStart = input[0].selectionEnd = start;
      });
    }
});

verbs = {};

verbsPast = {
  'bring' : 'brought',
  'buy' : 'bought',
  'come' : 'came',
  'cut' : 'cut',
  'do' : 'did',
  'drink' : 'drank',
  'drive' : 'drove',
  'eat': 'ate',
  'fly': 'flew',
  'fall': 'fell',
  'feel' : 'felt',
  'get' : 'got',
  'give' : 'gave',
  'go' : 'went',
  'grow' : 'grew',
  'have' : 'had',
  'hear' : 'heard',
  'keep' : 'kept',
  'lose' : 'lost',
  'make' : 'made',
  'meet' : 'met',
  'put' : 'put',
  'quit' : 'quit',
  'read' : 'read',
  'ride' : 'rode',
  'run' : 'ran',
  'see' : 'saw',
  'sell' : 'sold',
  'set' : 'set',
  'sit' : 'sat',
  'sleep' : 'slept',
  'speak' : 'spoke',
  'spend' : 'spent',
  'take' : 'took',
  'teach' : 'taught',
  'tell' : 'told',
  'think' : 'thought',
  'wear' : 'wore',
  'write' : 'wrote'
}

var verbsParticiple = {

  'bring' : 'brought',
  'buy' : 'bought',
  'come' : 'come',
  'cut' : 'cut',
  'do' : 'done',
  'drink' : 'drunk',
  'drive' : 'driven',
  'eat': 'eaten',
  'fly': 'flown',
  'fall': 'fallen',
  'feel' : 'felt',
  'get' : 'gotten',
  'give' : 'given',
  'go' : 'gone',
  'grow' : 'grown',
  'have' : 'had',
  'hear' : 'heard',
  'keep' : 'kept',
  'lose' : 'lost',
  'make' : 'made',
  'meet' : 'met',
  'put' : 'put',
  'quit' : 'quit',
  'read' : 'read',
  'ride' : 'ridden',
  'run' : 'run',
  'see' : 'seen',
  'sell' : 'sold',
  'set' : 'set',
  'sit' : 'sat',
  'sleep' : 'slept',
  'speak' : 'spoken',
  'spend' : 'spent',
  'take' : 'taken',
  'teach' : 'taught',
  'tell' : 'told',
  'think' : 'thought',
  'wear' : 'worn',
  'write' : 'written'

}

