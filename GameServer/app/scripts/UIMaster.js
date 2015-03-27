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


    //Get players
    $("#selectPlayerButton").on("click", function(){
      var sText = $('#listOfPlayers').find(":selected").text();
      if(sText !== "notSelected"){
        //console.log("you selected player: "+sText)
        comm.clientSignOn(sText);
      }else{
        alert("Please select a player");
      }
    })
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

