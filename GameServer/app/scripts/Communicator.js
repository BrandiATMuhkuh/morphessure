/**
 * Created by jbr134 on 26/03/15.
 */
'use strict';

/**
 * The communicator is a singleton that handles all
 * communication between the server and the clients
 */
class Communicator{

  constructor(){
    this.socket = io('//'+window.location.hostname+':3000');
    this.serverMovePlayerFun = [];
    this.serverPlayerList = [];
    this.serverWhoIsNext = [];
    this.serverLevelChange = [];

    /**
     * server says a player has moved
     */
    this.socket.on("server:movePlayer",(function(data){
      console.log("server:movePlayer",data);
      for (var func in this.serverMovePlayerFun){
        this.serverMovePlayerFun[func](data);
      }
    }).bind(this));

    /**
     * server says someone logged in or out
     */
    this.socket.on("server:playerList", (function(data){
      console.log("server:playerList", data);
      for (var func in this.serverPlayerList){
        this.serverPlayerList[func](data);
      }
    }).bind(this));

    /**
     * server says what player is next plus extra options
     */
    this.socket.on("server:whoIsNext", (function(data){
      console.log("server:whoIsNext", data);
      for (var func in this.serverWhoIsNext){
        this.serverWhoIsNext[func](data);
      }
    }).bind(this));


    /**
     * server says what level is next
     */
    this.socket.on("server:levelChange", (function(data){
      console.log("server:levelChange", data);
      for (var func in this.serverLevelChange){
        this.serverLevelChange[func](data);
      }
    }).bind(this));
  }

  /**
   * This will set the master object for the webpage
   * the communicator and the master object life
   * in symbiosis
   * @param master the master object
   */
  setMaster(master){
    this.master = master;
    console.log("setMaster");
  }

  /**
   * Returns the socket.io object that is connected to the server
   * @returns {Function|transport.socket|*|WebInspector.socket|.Transport.socket}
   */
  getSocket(){
    return this.socket;
  }

  /**
   * tell server to send the current player list
   */
  clientPlayerList(){
    this.socket.emit("client:playerList");
  }

  /**
   * Server sends player list in case it changed or
   * was required.
   * And undefined number of function can listen to
   * this even.
   * @param resFunc function that want to listen to player list changes
   */
  addServerPlayerList(resFunc){
    this.serverPlayerList.push(resFunc)
  }

  /**
   * Request the server for the player list
   * @param resFunc function that want get the player list
   */
  getServerPlayerList(resFunc){
    this.socket.emit("client:getPlayerList",resFunc);
  }

  /**
   * Tell server that we change the level
   * level name (
   *  tutorial,
   *  singlePlayer,
   *  multiPlayerTutorial,
   *  multiPlayer,
   *  singePlayer)
   * @param level name of level
   */
  clientChangeLevel(level){
    this.socket.emit("client:changeLevel",level);
  }

  /**
   * Listen if we change the level
   * @param resFunc
   */
  addServerLevelChange(resFunc){
    this.serverLevelChange.push(resFunc);
  }

  /**
   * Tell server this player has signed on
   * @param playerName name of the player
   */
  clientSignOn(playerName){
    this.socket.emit("client:signOn", playerName);
  }

  /**
   * Tell the server that player (name) is moving to position hintNr
   * @param name name of the player
   * @param hintNr new position according to hintList
   */
  clientMovePlayer(name, hintNr){
    this.socket.emit("client:movePlayer", {name:name, hintNr:hintNr});
  }

  /**
   * Server sends player movement in case it changed
   * And undefined number of function can listen to
   * this even.
   * @param resFunc function that want to listen to player movements
   */
  addServerMovePlayer(resFunc){
    this.serverMovePlayerFun.push(resFunc);
  }

  /**
   * Server sends who is next player
   * And undefined number of function can listen to
   * this even.
   * @param resFunc function that want to listen who is the next player
   */
  addServerWhoIsNext(resFunc){
    this.serverWhoIsNext.push(resFunc);
  }

  /**
   * This will send the server what @playerName said.
   * if it was correct, What the answer was and what's in
   * the dictionary.
   * @param transmitter name of the players who said something
   * @param receiver name of the player who received the command
   * @param correctness was the answer correct (-1 could not be found, 0 is correct, 1 is wrong)
   * @param answer what was the actual answer
   * @param dictionary the dictionary in which we look in.
   */
  clientMultiPartSaid(transmitter, receiver, correctness, answer, dictionary){
    this.socket.emit("client:multiPartSaid", {
      transmitter: transmitter,
      receiver: receiver,
      correctness: correctness,
      answer:answer,
      dictionary:dictionary});
  }

}

const comm = new Communicator();
