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
          "Ok, I'll go to the ?word?!"
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
      fields: [
                {
                    "playerName": "player1",
                    "trapList": [
                        {
                            "position": [
                                0,
                                0
                            ],
                            "name": "clothes"
                        },
                        {
                            "position": [
                                0,
                                1
                            ],
                            "name": "mouse"
                        },
                        {
                            "position": [
                                0,
                                2
                            ],
                            "name": "clothes"
                        },
                        {
                            "position": [
                                0,
                                3
                            ],
                            "name": "RAM"
                        },
                        {
                            "position": [
                                0,
                                4
                            ],
                            "name": "marijuana"
                        },
                        {
                            "position": [
                                0,
                                5
                            ],
                            "name": "barrels"
                        },
                        {
                            "position": [
                                0,
                                6
                            ],
                            "name": "factory"
                        },
                        {
                            "position": [
                                0,
                                7
                            ],
                            "name": "rabbit"
                        },
                        {
                            "position": [
                                0,
                                8
                            ],
                            "name": "cart"
                        },
                        {
                            "position": [
                                0,
                                9
                            ],
                            "name": "frog"
                        },
                        {
                            "position": [
                                1,
                                0
                            ],
                            "name": "ship"
                        },
                        {
                            "position": [
                                1,
                                1
                            ],
                            "name": "pigeon"
                        },
                        {
                            "position": [
                                1,
                                2
                            ],
                            "name": "priest"
                        },
                        {
                            "position": [
                                1,
                                3
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                1,
                                4
                            ],
                            "name": "rabbit"
                        },
                        {
                            "position": [
                                1,
                                5
                            ],
                            "name": "woman"
                        },
                        {
                            "position": [
                                1,
                                6
                            ],
                            "name": "drugs"
                        },
                        {
                            "position": [
                                1,
                                7
                            ],
                            "name": "graves"
                        },
                        {
                            "position": [
                                1,
                                8
                            ],
                            "name": "eraser"
                        },
                        {
                            "position": [
                                1,
                                9
                            ],
                            "name": "hen"
                        },
                        {
                            "position": [
                                2,
                                0
                            ],
                            "name": "flag"
                        },
                        {
                            "position": [
                                2,
                                1
                            ],
                            "name": "bench"
                        },
                        {
                            "position": [
                                2,
                                2
                            ],
                            "name": "referee"
                        },
                        {
                            "position": [
                                2,
                                3
                            ],
                            "name": "cross"
                        },
                        {
                            "position": [
                                2,
                                4
                            ],
                            "name": "parking_spot"
                        },
                        {
                            "position": [
                                2,
                                5
                            ],
                            "name": "road"
                        },
                        {
                            "position": [
                                2,
                                6
                            ],
                            "name": "church"
                        },
                        {
                            "position": [
                                2,
                                7
                            ],
                            "name": "referee"
                        },
                        {
                            "position": [
                                2,
                                8
                            ],
                            "name": "drugs"
                        },
                        {
                            "position": [
                                2,
                                9
                            ],
                            "name": "mouse"
                        },
                        {
                            "position": [
                                3,
                                0
                            ],
                            "name": "Q45"
                        },
                        {
                            "position": [
                                3,
                                1
                            ],
                            "name": "rave"
                        },
                        {
                            "position": [
                                3,
                                2
                            ],
                            "name": "beetle"
                        },
                        {
                            "position": [
                                3,
                                3
                            ],
                            "name": "programmer"
                        },
                        {
                            "position": [
                                3,
                                4
                            ],
                            "name": "mouse"
                        },
                        {
                            "position": [
                                3,
                                5
                            ],
                            "name": "people"
                        },
                        {
                            "position": [
                                3,
                                6
                            ],
                            "name": "ocean"
                        },
                        {
                            "position": [
                                3,
                                7
                            ],
                            "name": "hen"
                        },
                        {
                            "position": [
                                3,
                                8
                            ],
                            "name": "pipe"
                        },
                        {
                            "position": [
                                3,
                                9
                            ],
                            "name": "priest"
                        },
                        {
                            "position": [
                                4,
                                0
                            ],
                            "name": "floppy"
                        },
                        {
                            "position": [
                                4,
                                1
                            ],
                            "name": "soldier"
                        },
                        {
                            "position": [
                                4,
                                2
                            ],
                            "name": "rabbit"
                        },
                        {
                            "position": [
                                4,
                                3
                            ],
                            "name": "beach"
                        },
                        {
                            "position": [
                                4,
                                4
                            ],
                            "name": "router"
                        },
                        {
                            "position": [
                                4,
                                5
                            ],
                            "name": "artist"
                        },
                        {
                            "position": [
                                4,
                                6
                            ],
                            "name": "tree"
                        },
                        {
                            "position": [
                                4,
                                7
                            ],
                            "name": "fireplace"
                        },
                        {
                            "position": [
                                4,
                                8
                            ],
                            "name": "beetle"
                        },
                        {
                            "position": [
                                4,
                                9
                            ],
                            "name": "eraser"
                        },
                        {
                            "position": [
                                5,
                                0
                            ],
                            "name": "mouse"
                        },
                        {
                            "position": [
                                5,
                                1
                            ],
                            "name": "robot"
                        },
                        {
                            "position": [
                                5,
                                2
                            ],
                            "name": "road"
                        },
                        {
                            "position": [
                                5,
                                3
                            ],
                            "name": "church"
                        },
                        {
                            "position": [
                                5,
                                4
                            ],
                            "name": "house"
                        },
                        {
                            "position": [
                                5,
                                5
                            ],
                            "name": "doctor"
                        },
                        {
                            "position": [
                                5,
                                6
                            ],
                            "name": "pipe"
                        },
                        {
                            "position": [
                                5,
                                7
                            ],
                            "name": "cave"
                        },
                        {
                            "position": [
                                5,
                                8
                            ],
                            "name": "factory"
                        },
                        {
                            "position": [
                                5,
                                9
                            ],
                            "name": "dunes"
                        }
                    ],
                    "hintList": [
                        [
                            0,
                            0
                        ],
                        [
                            1,
                            1
                        ],
                        [
                            2,
                            1
                        ],
                        [
                            2,
                            2
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            2,
                            4
                        ],
                        [
                            2,
                            5
                        ],
                        [
                            2,
                            6
                        ],
                        [
                            2,
                            7
                        ],
                        [
                            3,
                            8
                        ],
                        [
                            4,
                            7
                        ],
                        [
                            4,
                            6
                        ],
                        [
                            4,
                            5
                        ],
                        [
                            4,
                            4
                        ],
                        [
                            4,
                            3
                        ],
                        [
                            4,
                            2
                        ],
                        [
                            4,
                            1
                        ],
                        [
                            5,
                            1
                        ]
                    ],
                    "hintWord": [['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next']['next']]
                },
                {
                    "playerName": "player2",
                    "trapList": [
                        {
                            "position": [
                                0,
                                0
                            ],
                            "name": "snack"
                        },
                        {
                            "position": [
                                0,
                                1
                            ],
                            "name": "sphere"
                        },
                        {
                            "position": [
                                0,
                                2
                            ],
                            "name": "ocean"
                        },
                        {
                            "position": [
                                0,
                                3
                            ],
                            "name": "cart"
                        },
                        {
                            "position": [
                                0,
                                4
                            ],
                            "name": "peach"
                        },
                        {
                            "position": [
                                0,
                                5
                            ],
                            "name": "money"
                        },
                        {
                            "position": [
                                0,
                                6
                            ],
                            "name": "woman"
                        },
                        {
                            "position": [
                                0,
                                7
                            ],
                            "name": "baby"
                        },
                        {
                            "position": [
                                0,
                                8
                            ],
                            "name": "cross"
                        },
                        {
                            "position": [
                                0,
                                9
                            ],
                            "name": "beach"
                        },
                        {
                            "position": [
                                1,
                                0
                            ],
                            "name": "boot"
                        },
                        {
                            "position": [
                                1,
                                1
                            ],
                            "name": "ocean"
                        },
                        {
                            "position": [
                                1,
                                2
                            ],
                            "name": "runners"
                        },
                        {
                            "position": [
                                1,
                                3
                            ],
                            "name": "bench"
                        },
                        {
                            "position": [
                                1,
                                4
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                1,
                                5
                            ],
                            "name": "soldier"
                        },
                        {
                            "position": [
                                1,
                                6
                            ],
                            "name": "Q60"
                        },
                        {
                            "position": [
                                1,
                                7
                            ],
                            "name": "frog"
                        },
                        {
                            "position": [
                                1,
                                8
                            ],
                            "name": "touchpad"
                        },
                        {
                            "position": [
                                1,
                                9
                            ],
                            "name": "road"
                        },
                        {
                            "position": [
                                2,
                                0
                            ],
                            "name": "Q45"
                        },
                        {
                            "position": [
                                2,
                                1
                            ],
                            "name": "baby"
                        },
                        {
                            "position": [
                                2,
                                2
                            ],
                            "name": "barrels"
                        },
                        {
                            "position": [
                                2,
                                3
                            ],
                            "name": "frog"
                        },
                        {
                            "position": [
                                2,
                                4
                            ],
                            "name": "berries"
                        },
                        {
                            "position": [
                                2,
                                5
                            ],
                            "name": "ship"
                        },
                        {
                            "position": [
                                2,
                                6
                            ],
                            "name": "man"
                        },
                        {
                            "position": [
                                2,
                                7
                            ],
                            "name": "cop"
                        },
                        {
                            "position": [
                                2,
                                8
                            ],
                            "name": "boot"
                        },
                        {
                            "position": [
                                2,
                                9
                            ],
                            "name": "flower"
                        },
                        {
                            "position": [
                                3,
                                0
                            ],
                            "name": "cave"
                        },
                        {
                            "position": [
                                3,
                                1
                            ],
                            "name": "runners"
                        },
                        {
                            "position": [
                                3,
                                2
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                3,
                                3
                            ],
                            "name": "athlete"
                        },
                        {
                            "position": [
                                3,
                                4
                            ],
                            "name": "dog"
                        },
                        {
                            "position": [
                                3,
                                5
                            ],
                            "name": "microbes"
                        },
                        {
                            "position": [
                                3,
                                6
                            ],
                            "name": "mouse"
                        },
                        {
                            "position": [
                                3,
                                7
                            ],
                            "name": "gun"
                        },
                        {
                            "position": [
                                3,
                                8
                            ],
                            "name": "frog"
                        },
                        {
                            "position": [
                                3,
                                9
                            ],
                            "name": "hen"
                        },
                        {
                            "position": [
                                4,
                                0
                            ],
                            "name": "kids"
                        },
                        {
                            "position": [
                                4,
                                1
                            ],
                            "name": "tree"
                        },
                        {
                            "position": [
                                4,
                                2
                            ],
                            "name": "eraser"
                        },
                        {
                            "position": [
                                4,
                                3
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                4,
                                4
                            ],
                            "name": "branch"
                        },
                        {
                            "position": [
                                4,
                                5
                            ],
                            "name": "cleaner"
                        },
                        {
                            "position": [
                                4,
                                6
                            ],
                            "name": "wine"
                        },
                        {
                            "position": [
                                4,
                                7
                            ],
                            "name": "parking_spot"
                        },
                        {
                            "position": [
                                4,
                                8
                            ],
                            "name": "sink"
                        },
                        {
                            "position": [
                                4,
                                9
                            ],
                            "name": "recycling"
                        },
                        {
                            "position": [
                                5,
                                0
                            ],
                            "name": "people"
                        },
                        {
                            "position": [
                                5,
                                1
                            ],
                            "name": "alligator"
                        },
                        {
                            "position": [
                                5,
                                2
                            ],
                            "name": "boot"
                        },
                        {
                            "position": [
                                5,
                                3
                            ],
                            "name": "factory"
                        },
                        {
                            "position": [
                                5,
                                4
                            ],
                            "name": "baby"
                        },
                        {
                            "position": [
                                5,
                                5
                            ],
                            "name": "shoe"
                        },
                        {
                            "position": [
                                5,
                                6
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                5,
                                7
                            ],
                            "name": "bench"
                        },
                        {
                            "position": [
                                5,
                                8
                            ],
                            "name": "cross"
                        },
                        {
                            "position": [
                                5,
                                9
                            ],
                            "name": "moth"
                        }
                    ],
                    "hintList": [
                        [
                            0,
                            0
                        ],
                        [
                            1,
                            1
                        ],
                        [
                            2,
                            1
                        ],
                        [
                            2,
                            2
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            2,
                            4
                        ],
                        [
                            2,
                            5
                        ],
                        [
                            2,
                            6
                        ],
                        [
                            2,
                            7
                        ],
                        [
                            3,
                            8
                        ],
                        [
                            4,
                            7
                        ],
                        [
                            4,
                            6
                        ],
                        [
                            4,
                            5
                        ],
                        [
                            4,
                            4
                        ],
                        [
                            4,
                            3
                        ],
                        [
                            4,
                            2
                        ],
                        [
                            4,
                            1
                        ],
                        [
                            5,
                            1
                        ]
                    ],
                    "hintWord": [['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next']['next']]
                }
            ]
    },

    singlePlayer : {
        type: "single",
      network: [
        {next: 0, transmitter: "player1", receiver: "player2"}
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
      fields: [
                {
                    "playerName": "player1",
                    "trapList": [
                        {
                            "position": [
                                0,
                                0
                            ],
                            "name": "clothes"
                        },
                        {
                            "position": [
                                0,
                                1
                            ],
                            "name": "mouse"
                        },
                        {
                            "position": [
                                0,
                                2
                            ],
                            "name": "clothes"
                        },
                        {
                            "position": [
                                0,
                                3
                            ],
                            "name": "RAM"
                        },
                        {
                            "position": [
                                0,
                                4
                            ],
                            "name": "marijuana"
                        },
                        {
                            "position": [
                                0,
                                5
                            ],
                            "name": "barrels"
                        },
                        {
                            "position": [
                                0,
                                6
                            ],
                            "name": "factory"
                        },
                        {
                            "position": [
                                0,
                                7
                            ],
                            "name": "rabbit"
                        },
                        {
                            "position": [
                                0,
                                8
                            ],
                            "name": "cart"
                        },
                        {
                            "position": [
                                0,
                                9
                            ],
                            "name": "frog"
                        },
                        {
                            "position": [
                                1,
                                0
                            ],
                            "name": "ship"
                        },
                        {
                            "position": [
                                1,
                                1
                            ],
                            "name": "pigeon"
                        },
                        {
                            "position": [
                                1,
                                2
                            ],
                            "name": "priest"
                        },
                        {
                            "position": [
                                1,
                                3
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                1,
                                4
                            ],
                            "name": "rabbit"
                        },
                        {
                            "position": [
                                1,
                                5
                            ],
                            "name": "woman"
                        },
                        {
                            "position": [
                                1,
                                6
                            ],
                            "name": "drugs"
                        },
                        {
                            "position": [
                                1,
                                7
                            ],
                            "name": "graves"
                        },
                        {
                            "position": [
                                1,
                                8
                            ],
                            "name": "eraser"
                        },
                        {
                            "position": [
                                1,
                                9
                            ],
                            "name": "hen"
                        },
                        {
                            "position": [
                                2,
                                0
                            ],
                            "name": "flag"
                        },
                        {
                            "position": [
                                2,
                                1
                            ],
                            "name": "bench"
                        },
                        {
                            "position": [
                                2,
                                2
                            ],
                            "name": "referee"
                        },
                        {
                            "position": [
                                2,
                                3
                            ],
                            "name": "cross"
                        },
                        {
                            "position": [
                                2,
                                4
                            ],
                            "name": "parking_spot"
                        },
                        {
                            "position": [
                                2,
                                5
                            ],
                            "name": "road"
                        },
                        {
                            "position": [
                                2,
                                6
                            ],
                            "name": "church"
                        },
                        {
                            "position": [
                                2,
                                7
                            ],
                            "name": "referee"
                        },
                        {
                            "position": [
                                2,
                                8
                            ],
                            "name": "drugs"
                        },
                        {
                            "position": [
                                2,
                                9
                            ],
                            "name": "mouse"
                        },
                        {
                            "position": [
                                3,
                                0
                            ],
                            "name": "Q45"
                        },
                        {
                            "position": [
                                3,
                                1
                            ],
                            "name": "rave"
                        },
                        {
                            "position": [
                                3,
                                2
                            ],
                            "name": "beetle"
                        },
                        {
                            "position": [
                                3,
                                3
                            ],
                            "name": "programmer"
                        },
                        {
                            "position": [
                                3,
                                4
                            ],
                            "name": "mouse"
                        },
                        {
                            "position": [
                                3,
                                5
                            ],
                            "name": "people"
                        },
                        {
                            "position": [
                                3,
                                6
                            ],
                            "name": "ocean"
                        },
                        {
                            "position": [
                                3,
                                7
                            ],
                            "name": "hen"
                        },
                        {
                            "position": [
                                3,
                                8
                            ],
                            "name": "pipe"
                        },
                        {
                            "position": [
                                3,
                                9
                            ],
                            "name": "priest"
                        },
                        {
                            "position": [
                                4,
                                0
                            ],
                            "name": "floppy"
                        },
                        {
                            "position": [
                                4,
                                1
                            ],
                            "name": "soldier"
                        },
                        {
                            "position": [
                                4,
                                2
                            ],
                            "name": "rabbit"
                        },
                        {
                            "position": [
                                4,
                                3
                            ],
                            "name": "beach"
                        },
                        {
                            "position": [
                                4,
                                4
                            ],
                            "name": "router"
                        },
                        {
                            "position": [
                                4,
                                5
                            ],
                            "name": "artist"
                        },
                        {
                            "position": [
                                4,
                                6
                            ],
                            "name": "tree"
                        },
                        {
                            "position": [
                                4,
                                7
                            ],
                            "name": "fireplace"
                        },
                        {
                            "position": [
                                4,
                                8
                            ],
                            "name": "beetle"
                        },
                        {
                            "position": [
                                4,
                                9
                            ],
                            "name": "eraser"
                        },
                        {
                            "position": [
                                5,
                                0
                            ],
                            "name": "mouse"
                        },
                        {
                            "position": [
                                5,
                                1
                            ],
                            "name": "robot"
                        },
                        {
                            "position": [
                                5,
                                2
                            ],
                            "name": "road"
                        },
                        {
                            "position": [
                                5,
                                3
                            ],
                            "name": "church"
                        },
                        {
                            "position": [
                                5,
                                4
                            ],
                            "name": "house"
                        },
                        {
                            "position": [
                                5,
                                5
                            ],
                            "name": "doctor"
                        },
                        {
                            "position": [
                                5,
                                6
                            ],
                            "name": "pipe"
                        },
                        {
                            "position": [
                                5,
                                7
                            ],
                            "name": "cave"
                        },
                        {
                            "position": [
                                5,
                                8
                            ],
                            "name": "factory"
                        },
                        {
                            "position": [
                                5,
                                9
                            ],
                            "name": "dunes"
                        }
                    ],
                    "hintList": [
                        [
                            0,
                            0
                        ],
                        [
                            1,
                            1
                        ],
                        [
                            2,
                            1
                        ],
                        [
                            2,
                            2
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            2,
                            4
                        ],
                        [
                            2,
                            5
                        ],
                        [
                            2,
                            6
                        ],
                        [
                            2,
                            7
                        ],
                        [
                            3,
                            8
                        ],
                        [
                            4,
                            7
                        ],
                        [
                            4,
                            6
                        ],
                        [
                            4,
                            5
                        ],
                        [
                            4,
                            4
                        ],
                        [
                            4,
                            3
                        ],
                        [
                            4,
                            2
                        ],
                        [
                            4,
                            1
                        ],
                        [
                            5,
                            1
                        ]
                    ],
                    "hintWord": [['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next']['next']]
                },
                {
                    "playerName": "player2",
                    "trapList": [
                        {
                            "position": [
                                0,
                                0
                            ],
                            "name": "snack"
                        },
                        {
                            "position": [
                                0,
                                1
                            ],
                            "name": "sphere"
                        },
                        {
                            "position": [
                                0,
                                2
                            ],
                            "name": "ocean"
                        },
                        {
                            "position": [
                                0,
                                3
                            ],
                            "name": "cart"
                        },
                        {
                            "position": [
                                0,
                                4
                            ],
                            "name": "peach"
                        },
                        {
                            "position": [
                                0,
                                5
                            ],
                            "name": "money"
                        },
                        {
                            "position": [
                                0,
                                6
                            ],
                            "name": "woman"
                        },
                        {
                            "position": [
                                0,
                                7
                            ],
                            "name": "baby"
                        },
                        {
                            "position": [
                                0,
                                8
                            ],
                            "name": "cross"
                        },
                        {
                            "position": [
                                0,
                                9
                            ],
                            "name": "beach"
                        },
                        {
                            "position": [
                                1,
                                0
                            ],
                            "name": "boot"
                        },
                        {
                            "position": [
                                1,
                                1
                            ],
                            "name": "ocean"
                        },
                        {
                            "position": [
                                1,
                                2
                            ],
                            "name": "runners"
                        },
                        {
                            "position": [
                                1,
                                3
                            ],
                            "name": "bench"
                        },
                        {
                            "position": [
                                1,
                                4
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                1,
                                5
                            ],
                            "name": "soldier"
                        },
                        {
                            "position": [
                                1,
                                6
                            ],
                            "name": "Q60"
                        },
                        {
                            "position": [
                                1,
                                7
                            ],
                            "name": "frog"
                        },
                        {
                            "position": [
                                1,
                                8
                            ],
                            "name": "touchpad"
                        },
                        {
                            "position": [
                                1,
                                9
                            ],
                            "name": "road"
                        },
                        {
                            "position": [
                                2,
                                0
                            ],
                            "name": "Q45"
                        },
                        {
                            "position": [
                                2,
                                1
                            ],
                            "name": "baby"
                        },
                        {
                            "position": [
                                2,
                                2
                            ],
                            "name": "barrels"
                        },
                        {
                            "position": [
                                2,
                                3
                            ],
                            "name": "frog"
                        },
                        {
                            "position": [
                                2,
                                4
                            ],
                            "name": "berries"
                        },
                        {
                            "position": [
                                2,
                                5
                            ],
                            "name": "ship"
                        },
                        {
                            "position": [
                                2,
                                6
                            ],
                            "name": "man"
                        },
                        {
                            "position": [
                                2,
                                7
                            ],
                            "name": "cop"
                        },
                        {
                            "position": [
                                2,
                                8
                            ],
                            "name": "boot"
                        },
                        {
                            "position": [
                                2,
                                9
                            ],
                            "name": "flower"
                        },
                        {
                            "position": [
                                3,
                                0
                            ],
                            "name": "cave"
                        },
                        {
                            "position": [
                                3,
                                1
                            ],
                            "name": "runners"
                        },
                        {
                            "position": [
                                3,
                                2
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                3,
                                3
                            ],
                            "name": "athlete"
                        },
                        {
                            "position": [
                                3,
                                4
                            ],
                            "name": "dog"
                        },
                        {
                            "position": [
                                3,
                                5
                            ],
                            "name": "microbes"
                        },
                        {
                            "position": [
                                3,
                                6
                            ],
                            "name": "mouse"
                        },
                        {
                            "position": [
                                3,
                                7
                            ],
                            "name": "gun"
                        },
                        {
                            "position": [
                                3,
                                8
                            ],
                            "name": "frog"
                        },
                        {
                            "position": [
                                3,
                                9
                            ],
                            "name": "hen"
                        },
                        {
                            "position": [
                                4,
                                0
                            ],
                            "name": "kids"
                        },
                        {
                            "position": [
                                4,
                                1
                            ],
                            "name": "tree"
                        },
                        {
                            "position": [
                                4,
                                2
                            ],
                            "name": "eraser"
                        },
                        {
                            "position": [
                                4,
                                3
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                4,
                                4
                            ],
                            "name": "branch"
                        },
                        {
                            "position": [
                                4,
                                5
                            ],
                            "name": "cleaner"
                        },
                        {
                            "position": [
                                4,
                                6
                            ],
                            "name": "wine"
                        },
                        {
                            "position": [
                                4,
                                7
                            ],
                            "name": "parking_spot"
                        },
                        {
                            "position": [
                                4,
                                8
                            ],
                            "name": "sink"
                        },
                        {
                            "position": [
                                4,
                                9
                            ],
                            "name": "recycling"
                        },
                        {
                            "position": [
                                5,
                                0
                            ],
                            "name": "people"
                        },
                        {
                            "position": [
                                5,
                                1
                            ],
                            "name": "alligator"
                        },
                        {
                            "position": [
                                5,
                                2
                            ],
                            "name": "boot"
                        },
                        {
                            "position": [
                                5,
                                3
                            ],
                            "name": "factory"
                        },
                        {
                            "position": [
                                5,
                                4
                            ],
                            "name": "baby"
                        },
                        {
                            "position": [
                                5,
                                5
                            ],
                            "name": "shoe"
                        },
                        {
                            "position": [
                                5,
                                6
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                5,
                                7
                            ],
                            "name": "bench"
                        },
                        {
                            "position": [
                                5,
                                8
                            ],
                            "name": "cross"
                        },
                        {
                            "position": [
                                5,
                                9
                            ],
                            "name": "moth"
                        }
                    ],
                    "hintList": [
                        [
                            0,
                            0
                        ],
                        [
                            1,
                            1
                        ],
                        [
                            2,
                            1
                        ],
                        [
                            2,
                            2
                        ],
                        [
                            2,
                            3
                        ],
                        [
                            2,
                            4
                        ],
                        [
                            2,
                            5
                        ],
                        [
                            2,
                            6
                        ],
                        [
                            2,
                            7
                        ],
                        [
                            3,
                            8
                        ],
                        [
                            4,
                            7
                        ],
                        [
                            4,
                            6
                        ],
                        [
                            4,
                            5
                        ],
                        [
                            4,
                            4
                        ],
                        [
                            4,
                            3
                        ],
                        [
                            4,
                            2
                        ],
                        [
                            4,
                            1
                        ],
                        [
                            5,
                            1
                        ]
                    ],
                    "hintWord": [['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next'],['next']['next']]
                }
      ]
    },

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

    secSinglePlayer : {
        type: "single",
      network: [
        {next: 0, transmitter: "player1", receiver: "player2"}
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
