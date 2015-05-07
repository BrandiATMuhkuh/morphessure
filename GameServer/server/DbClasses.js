/**
 * Created by jbr134 on 29/04/15.
 */
'use strict';

/**
 * This document contains all Database Classes
 */

class DbClasses{}

DbClasses.Participant = class Participant {
  constructor(partName, playerName, condition, pId){
    this.partName = partName;
    this.playerName = playerName;
    this.condition = condition;
    this.pId = pId;

  }
};

DbClasses.DictEntry = class DictEntry {
  constructor (name, wordValance, imageValance, refWord){
    this.name = name;
    this.wordValance = wordValance;
    this.imageValance = imageValance;
    this.refWord = refWord;
  }
};

DbClasses.Hint = class Hint {
  constructor(condition, conditionId, level, playerName, hints){
    this.condition = condition;
    this.conditionId = conditionId;
    this.level = level;
    this.playerName = playerName;
    this.hints = hints;
  }
};

DbClasses.Trap = class Trap {
  constructor(condition, conditionId, level, playerName, traps){
    this.condition = condition;
    this.conditionId = conditionId;
    this.level = level;
    this.playerName = playerName;

    if(traps !== undefined){
      this.traps = traps;
    }else{
      this.traps = [];
    }

  }

  addTrap(position, name){
    this.traps.push({position: position, name: name});
    return this;
  }
};

DbClasses.Player = class Player {
  constructor(pId, name, type){
      this.pId = pId;
      this.name = name;
      this.type = type;
      this.isLoggedOn = false;
      this.position = 0;
      this.isPlaying = false;
      this.trapList = [];
      this.hintList = [];
      this.hintWord = [];
  }
};

DbClasses.Condition = class Condition {
  constructor(conditionId, condition, description){
    this.conditionId = conditionId;
    this.condition = condition;
    this.description = description;
  }
};

class Log {
  constructor(type, pId, conditionId, condition, transmitter){
    var date = new Date();
    this.time = date.getTime();
    this.ISOTime = date.toISOString();
    this.type = type;
    this.pId = pId;
    this.conditionId = conditionId;
    this.condition = condition;
    this.transmitter = transmitter;
  }
};


DbClasses.LogPlayerSaid = class LogPlayerSay extends Log {
  constructor(pId, conditionId, condition, transmitter, receiver, word, correct){
    super('LogPlayerSaid', pId, conditionId, condition, transmitter);

    this.receiver = receiver;
    this.word = word;
    this.correct = correct;
  }
};

DbClasses.LogPlayerShouldSay = class LogPlayerShouldSay extends Log {
  constructor(pId, conditionId, condition, transmitter, receiver, word){
    super('LogPlayerShouldSay', pId, conditionId, condition, transmitter);

    this.receiver = receiver;
    this.word = word;
  }
};

DbClasses.LogPlayerMoves = class LogPlayerMoves extends Log {
  constructor(pId, conditionId, condition, transmitter, relativePosition, absolutePosition, symbolName){
    super('LogPlayerMoves', pId, conditionId, condition, transmitter);

    this.relativePosition = relativePosition;
    this.absolutePosition = absolutePosition;
    this.symbolName = symbolName;
  }
};

module.exports = DbClasses;
