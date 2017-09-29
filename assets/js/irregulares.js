$(document).ready(function() {

    loadCache();

    loadQuestion();

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

    //enter
    $('input[type="text"').keypress("click", function(event) {
      if(event.which === 13) {
        testaResposta();
      }
    });

    function loadQuestion() {

        var keys = Object.keys(verbs);
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
});

var verbs = {
  'do' : 'did',
  'come' : 'came',
 };
//  'bring' : 'brought',
// 'buy' : 'bought',
//   'cut' : 'cut',
//   'do' : 'did',
//   'drink' : 'drank',
//   'drive' : 'drove',
//   'eat': 'ate',
//   'fly': 'flew',
//   'fall': 'fell',
//   'feel' : 'felt',
//   'get' : 'got',
//   'give' : 'gave',
//   'go' : 'went',
//   'grow' : 'grew',
//   'have' : 'had',
//   'hear' : 'heard',
//   'keep' : 'kept',
//   'lose' : 'lost',
//   'make' : 'made',
//   'meet' : 'met',
//   'put' : 'put',
//   'quit' : 'quit',
//   'read' : 'read',
//   'ride' : 'rode',
//   'run' : 'ran',
//   'see' : 'saw',
//   'sell' : 'sold',
//   'set' : 'set',
//   'sit' : 'sat',
//   'sleep' : 'slept',
//   'speak' : 'spoke',
//   'spend' : 'spent',
//   'take' : 'took',
//   'teach' : 'taught',
//   'tell' : 'told',
//   'think' : 'thought',
//   'wear' : 'wore',
//   'write' : 'wrote'
// }

// var verbs = {
//     'arise': 'arose',
//     'awake': 'awoke',
//     'be': 'was / were',
//     'bear': 'bore',
//     'beat': 'beat',
//     'become': 'became',
//     'begin': 'began',
//     'bend': 'bent',
//     'bet': 'bet',
//     'bid': 'bade',
//     'bind': 'bound',
//     'bite': 'bit',
//     'bleed': 'bled',
//     'blow': 'blew',
//     'break': 'broke',
//     'breed': 'bred',
//     'bring': 'brought',
//     'build': 'built',
//     'burn': 'burnt',
//     'burst': 'burst',
//     'buy': 'bought',
//     'cast': 'cast',
//     'catch': 'caught',
//     'choose': 'chose',
//     'cling': 'clung',
//     'clothe': 'clothed',
//     'come': 'came',
//     'cost': 'cost',
//     'creep': 'crept',
//     'crow': 'crew',
//     'cut': 'cut',
//     'deal': 'dealt',
//     'dig': 'dug',
//     'do': 'did',
//     'draw': 'drew',
//     'drink': 'drank',
//     'drive': 'drove',
//     'dwell': 'dwelt',
//     'eat': 'ate',
//     'fall': 'fell',
//     'feed': 'fed',
//     'feel': 'felt',
//     'fight': 'fought',
//     'find': 'found',
//     'flee': 'fled',
//     'fling': 'flung',
//     'fly': 'flew',
//     'forbid': 'forbade',
//     'forget': 'forgot',
//     'forgive': 'forgave',
//     'forsake': 'forsook',
//     'freeze': 'froze',
//     'get': 'got',
//     'give': 'gave',
//     'go': 'went',
//     'grow': 'grew',
//     'hang': 'hung',
//     'have': 'had',
//     'hear': 'heard',
//     'heave': 'hove',
//     'hew': 'hewed',
//     'hide': 'hid',
//     'hit': 'hit',
//     'hold': 'held',
//     'hurt': 'hurt',
//     'keep': 'kept',
//     'kneel': 'knelt',
//     'knit': 'knit',
//     'know': 'knew',
//     'lay': 'laid',
//     'lead': 'led',
//     'leap': 'leapt',
//     'learn': 'learnt',
//     'leave': 'left',
//     'lend': 'lent',
//     'let': 'let',
//     'lie': 'lay',
//     'light': 'lit',
//     'lose': 'lost',
//     'make': 'made',
//     'mean': 'meant',
//     'meet': 'met',
//     'partake': 'partook',
//     'pay': 'paid',
//     'put': 'put',
//     'quit': 'quit',
//     'read': 'read',
//     'ride': 'rode',
//     'ring': 'rang',
//     'rise': 'rose',
//     'run': 'ran',
//     'saw': 'sawed',
//     'say': 'said',
//     'see': 'saw',
//     'seek': 'sought',
//     'sell': 'sold',
//     'send': 'sent',
//     'set': 'set',
//     'sew': 'sewed',
//     'shake': 'shook',
//     'shed': 'shed',
//     'shine': 'shone',
//     'shoot': 'shot',
//     'show': 'showed',
//     'shred': 'shred',
//     'shrink': 'shrank',
//     'shut': 'shut',
//     'sing': 'sang',
//     'sink': 'sank',
//     'sit': 'sat',
//     'slay': 'slew',
//     'sleep': 'slept',
//     'slide': 'slid',
//     'sling': 'slung',
//     'smell': 'smelt',
//     'smite': 'smote',
//     'sow': 'sowed',
//     'speak': 'spoke',
//     'spell': 'spelt',
//     'spend': 'spent',
//     'spill': 'spilt',
//     'spin': 'spun',
//     'spit': 'spat',
//     'spoil': 'spoilt',
//     'spread': 'spread',
//     'spring': 'sprang',
//     'stand': 'stood',
//     'steal': 'stole',
//     'stick': 'stuck',
//     'sting': 'stung',
//     'stink': 'stank',
//     'strew': 'strewed',
//     'stride': 'strode',
//     'strike': 'struck',
//     'string': 'strung',
//     'strive': 'strove',
//     'swear': 'swore',
//     'sweat': 'sweat',
//     'sweep': 'swept',
//     'swell': 'swelled',
//     'swim': 'swam',
//     'swing': 'swung',
//     'take': 'took',
//     'teach': 'taught',
//     'tear': 'tore',
//     'tell': 'told',
//     'think': 'thought',
//     'thrive': 'throve',
//     'throw': 'threw',
//     'thrust': 'thrust',
//     'tread': 'trod',
//     'understand': 'understood',
//     'wake': 'woke',
//     'wear': 'wore',
//     'weave': 'wove',
//     'weep': 'wept',
//     'wet': 'wet',
//     'win': 'won',
//     'wind': 'wound',
//     'wring': 'wrung',
// };