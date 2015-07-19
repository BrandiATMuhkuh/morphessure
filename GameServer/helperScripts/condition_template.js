/**
 * Created by jbr134 on 2/06/15.
 */
'use strict';
module.exports = {
  players : [
    {
      pNumber: 153,
      name: "player1",
      realName: "Brandy",
      type: "human",
      isLoggedOn: false,
      position: 0,
      isPlaying: true,
      trapList : [],
      hintList : [],
      hintWord : []

    },

    {
      pNumber: -1,
      name: "player2",
      realName: "Nao",
      type: "robot",
      isLoggedOn: false,
      position: 0,
      isPlaying: false,
      trapList : [],
      hintList : [],
      hintWord : [],
      talk:{
        acknowledge: [
          "Ok, I go to the ?word?!",
          "The ?word? it is!",
          "Ok"
        ],
        goTo: "Go to the ?word?!",
        handMovement: true,
        lookUpDown: true
      }

    },


    {
      pNumber: 0,
      name: "Researcher",
      realName: "Researcher",
      type: "researcher",
      isLoggedOn: false,
      trapList : [],
      hintList : [],
      hintWord : []
    }
  ],


  levels : {
    tutorial : {
      type: "single",
      network: [
        {next: 0, transmitter: "player1", receiver: "player2"}
      ],
      fields : [
      {
        playerName : "player1",
        trapList:[],
        hintList:[],
        hintWord : []
      },

      {
        playerName : "player2",
        trapList:[],
        hintList:[],
        hintWord : []
      }
    ] },

    singlePlayer : {
      network: [
        {next: 1, transmitter: "player1", receiver: "player2"},
        {next: 0, transmitter: "player2", receiver: "player1"}
      ],
      fields: [
      {
        playerName : "player1",
        trapList : [],
        hintList : [],
        hintWord : []
      },

      {
        playerName : "player2",
        trapList : [],
        hintList : [],
        hintWord : []
      }
    ] },

    multiPlayerTutorial : {
      network: [
        {next: 1, transmitter: "player1", receiver: "player2"},
        {next: 0, transmitter: "player2", receiver: "player1"}
      ],
      fields : [
      {
        playerName : "player1",
        trapList : [],
        hintList : [],
        hintWord : []
      },

      {
        playerName : "player2",
        trapList : [],
        hintList : [],
        hintWord : []
      }
    ] },

    multiPlayer : {
      network: [
        {next: 1, transmitter: "player1", receiver: "player2"},
        {next: 0, transmitter: "player2", receiver: "player1"}
      ],
      fields : [
      {
        playerName : "player1",
        trapList : [],
        hintList : [],
        hintWord : []
      },

      {
        playerName : "player2",
        trapList : [],
        hintList : [],
        hintWord : []
      }
    ] },

    singePlayer : {
      network: [
        {next: 1, transmitter: "player1", receiver: "player2"},
        {next: 0, transmitter: "player2", receiver: "player1"}
      ],
      fields : [
      {
        playerName : "player1",
        trapList : [],
        hintList : [],
        hintWord : []
      },

      {
        playerName : "player2",
        trapList : [],
        hintList : [],
        hintWord : []
      }
    ] }

  }
};
