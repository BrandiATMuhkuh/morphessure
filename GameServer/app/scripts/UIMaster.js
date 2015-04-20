/**
 * Created by jbr134 on 27/03/15.
 */
'use strict';
/**
 * The UIMaster controls all buttons outside of the phaser game.
 * The is mainly used by the researcher and the wizard
 */
class UIMaster{
  constructor(){
    this.whoIsNextData = null;

    //Get players
    $("#selectPlayerButton").on("click", function(){
      var sText = $('#listOfPlayers').find(":selected").text();
      if(sText !== "notSelected"){
        localPlayer.name = sText;
        comm.clientSignOn(sText);
      }else{
        alert("Please select a player");
      }
    });

    //Check if playername is in URL
    if(localPlayer.name = location.getParameter("playerName")){
      console.log(localPlayer);
      comm.clientSignOn(localPlayer.name);
    }

    comm.addServerWhoIsNext((function(data){
      this.whoIsNextData = data;
      this.changeWizardDisplay(data.next, data.wizSays, data.partDict);
    }).bind(this));

    $( "#part-correct-answer" ).click(function() {
      console.log( "part-correct-answer" );
    });

    $("body").on('click','.multi-part-should-say-item',function(e,t){
      this.checkIfCorrectAnswer(e.toElement.innerText, this.whoIsNextData.partDict);
    }.bind(this));


    $("body").on('click','.singe-part-said-item',function(){
      console.log($(this).text());

      this.populateSingePartSaid(["hallo","your"]);
    }.bind(this));

    this.displayMultiPartShouldSay(true);
    this.displayMultiWizardSays(true);
    //this.displaySingePartSaid(true);

  }

  /**
   * This will clear and than repopulate the single part said list with new words
   * @param wordList a list of words
   */
  populateSingePartSaid(wordList){
    $("#singe-part-said-list").empty();

    for(var word in wordList){
      $("#singe-part-said-list").append('<a class="list-group-item singe-part-said-item">'+
      wordList[word]
      +'</a>');
    }
  }


  checkIfCorrectAnswer(answer, dict){
    console.log("checkIfCorrectAnswer", answer, dict, localPlayer.name);

    var found = dict.indexOf(answer);
    if(found === -1 || answer === 'OTHER'){
      console.log("this is a new element");
    }else if(found === 0){
      console.log("the correct element");
    }else{
      console.log("the wrong element");
    }
  }

  /**
   * This will clear and than repopulate what the participant should and could say.
   * The first element is the correct answer, the last is any other answer, and
   * the middle items are wrong answers
   * @param wordList list of possible answers. First one is the correct answer
   */
  popluatePartSaid(wordList){
    $("#multi-part-should-say-list").empty();

    var _type = "correct";

    for(var word in wordList){
      word = parseInt(word); //This is important otherwise word is a character
      if(word == 0){
        _type = "correct";
      }else{
        _type = "wrong";
      }

      $("#multi-part-should-say-list").append('<a class="list-group-item multi-part-should-say-item '+_type+' ">'+
      wordList[word]
      +'</a>');
    }

    _type = 'new';
    $("#multi-part-should-say-list").append('<a class="list-group-item multi-part-should-say-item '+_type+' ">'+
    "OTHER"
    +'</a>');
  }

  /**
   * This will start the switch process between what participant should say, the wizard should say
   * @param nextPlayer who is the next player
   * @param wizSays the word the wizard should say when its his/her turn
   * @param partDict the dictionary the participan can say. The frist word is the correct one
   */
  changeWizardDisplay(nextPlayer, wizSays, partDict){
    //get name of current player

    console.log("changeWizardDisplay", localPlayer.name, nextPlayer, wizSays);


    if(nextPlayer === localPlayer.name){
      this.displayMultiPartShouldSay(true, wizSays, partDict);
      this.displayMultiWizardSays(false);
    }else{
      this.displayMultiPartShouldSay(false);
      this.displayMultiWizardSays(true, wizSays);
    }
  }

  /**
   * display what other player should say
   * @param display activate the show area
   * @param wizSays the word that should be said by the other player (if NULL the game is at the end)
   */
  displayMultiPartShouldSay(display, wizSays, partDict){
    if(display){
      $("#multi-part-should-say").css("display","inline");
    }else{
      $("#multi-part-should-say").css("display","none");
    }

    //Populate list with dictionary
    this.popluatePartSaid(partDict);
  }

  /**
   * display what the wizard should say
   * @param display activate the wizards show area
   * @param say the word that should be said by the wizard (if NULL game is at the end)
   */
  displayMultiWizardSays(display,say){
    if(display){
      $("#multi-wizard-says").css("display","inline");
    }else{
      $("#multi-wizard-says").css("display","none");
    }

    if(say !== null && say !== undefined){
      $("#multi-wizard-says-word").text(say);
    }else{
      $("#multi-wizard-says-word").text("NO DATA SO FAR");
    }
  }

  /**
   * Display the single players possible answers
   * @param display activate the multible answer part
   * @param sayings array of possible answers (ranked by most likely) (if NULL game is at the end)
   */
  displaySingePartSaid(display, sayings) {
    if(display){
      $("#singe-part-said").css("display","inline");
    }else{
      $("#singe-part-said").css("display","none");
    }

  }


  /**
   * This will fill the the list of all players
   * the user has to select what his player name is.
   * @param playerList list of all players
   */
  drawPlayerDropDown(playerList){
    console.log("drawPlayerDropDown",playerList);
    var listOfPlayers = $('#listOfPlayers');
    for(var player in playerList){
      listOfPlayers.append(new Option(playerList[player].name, playerList[player].name, false, false));
    }
    listOfPlayers.selectpicker('refresh');
  }

  /**
   * This will generate the game with all players,
   * hints, and Traps.
   * The researcher is stored as player and not identified
   * as such.
   * @param playerList list of all players
   */
  generateGame(playerList){
    console.log("generateGame", playerList);
    var game = new Game(phaser);

    for(var player in playerList){
      //check if player should be displayed or not.
      //eg. the researcher should not be displayed and had pNumber -1
      //Positive pNumbers are participants
      //Negative pNumber are robots/actors
      if(playerList[player] !== 0){
        var p = new Player(playerList[player].name);
        p.setTraps(playerList[player].trapList);
        p.setHints(playerList[player].hintList);
        game.addPlayer(p);
      }
    }

    phaser.state.add("Start",game); //add a game level
    phaser.state.start("Start"); //start a game
  }

  /**
   * This will fill the list of players logged in
   * on the server.
   * It will also indicate if a player changes from offline to online
   * @param playerList list of all players
   */
  drawResearcherPlayerList(playerList){
    //Upload researcher player list
    var resPlayerList = $('#resPlayerList');
    resPlayerList.empty();
    for(var player in playerList) {
      var text = '<li class="list-group-item">';
      if (playerList[player].isLoggedOn === true) {
        text += '<span class="label label-success">Offline</span> ';
      }else{
        text += '<span class="label label-danger">Offline</span> ';
      }
      text += playerList[player].name+'</span></li>';
      resPlayerList.append(text);
    }
  }
}


