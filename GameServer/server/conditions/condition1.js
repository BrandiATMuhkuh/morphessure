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
      hintWord : []
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

  networks: {
    tutorial:[
        {next: 0, transmitter: "player1", receiver: "player2"}
      ],
    singlePlayer:[
      {next: 1, transmitter: "player1", receiver: "player2"},
      {next: 0, transmitter: "player2", receiver: "player1"}
    ],
    multiPlayer:[
      {next: 1, transmitter: "player1", receiver: "player2"},
      {next: 0, transmitter: "player2", receiver: "player1"}
    ]
  },

  levels : {
    tutorial : [
      {
        playerName : "player1",
        trapList : [
          {
            position: [0,0],
            name: 'belly'
          },
          {
            position: [1,1],
            name: 'thief'
          },
          {
            position: [2,1],
            name: 'cup'
          },
          {
            position: [2,2],
            name: 'marijuana'
          },
          {
            position: [2,3],
            name: 'pipe'
          },
          {
            position: [2,4],
            name: 'dunes'
          },
          {
            position: [2,5],
            name: 'doctor'
          },
          {
            position: [2,6],
            name: 'teacher'
          },
          {
            position: [2,7],
            name: 'drugs'
          }
        ],
        hintList : [[0,0],[1,1], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7]],
        hintWord : [
          ['Belly','Stomach','Fat Man'],
          ['Thief','Robberer','Money Transporter'],
          ['Cup',"Mug"],
          ['marijuana', 'Sign', 'Golfflag'],
          ['pipe', 'Sign', 'Golfflag'],
          ['dunes', 'Sign', 'Golfflag'],
          ['doctor', 'Sign', 'Golfflag'],
          ['teacher', 'Sign', 'Golfflag'],
          ['drugs', 'Sign', 'Golfflag']
        ]
      },

      {
        playerName : "player2",
        trapList : [
          {
            position: [0,0],
            name: 'alligator'
          },
          {
            position: [1,1],
            name: 'beans'
          },
          {
            position: [2,1],
            name: 'RAM'
          },
          {
            position: [2,2],
            name: 'beetle'
          },
          {
            position: [2,3],
            name: 'referee'
          },
          {
            position: [2,4],
            name: 'fireplace'
          },
          {
            position: [2,5],
            name: 'moth'
          },
          {
            position: [2,6],
            name: 'pipe'
          },
          {
            position: [2,7],
            name: 'teacher'
          },
          {
            position: [3,0],
            name: 'couch'
          },
          {
            position: [3,1],
            name: 'cross'
          },
          {
            position: [3,2],
            name: 'cup'
          },
          {
            position: [3,3],
            name: 'dirt'
          },
          {
            position: [3,4],
            name: 'doctor'
          },
          {
            position: [3,5],
            name: 'dog'
          },
          {
            position: [3,6],
            name: 'door'
          },
          {
            position: [3,7],
            name: 'drink'
          },
          {
            position: [1,0],
            name: 'factory'
          },
          {
            position: [1,2],
            name: 'athlete'
          },
          {
            position: [1,3],
            name: 'axe'
          },
          {
            position: [1,4],
            name: 'baby'
          },
          {
            position: [1,5],
            name: 'barrels'
          },
          {
            position: [1,6],
            name: 'bat'
          },
          {
            position: [1,7],
            name: 'cup'
          },
          {
            position: [0,1],
            name: 'boot'
          },
          {
            position: [0,2],
            name: 'branch'
          },
          {
            position: [0,3],
            name: 'canoe'
          },
          {
            position: [0,4],
            name: 'car'
          },
          {
            position: [0,5],
            name: 'cart'
          },
          {
            position: [0,6],
            name: 'cattle'
          },
          {
            position: [0,7],
            name: 'clothes'
          }
        ],
        hintList : [[0,0],[1,1], [2,1],[2,2], [2,3], [2,4], [2,5], [2,6], [2,7]],
        hintWord : [
          ['Alligator', "Crocogile", "Reptile"],
          ['Beans', 'Seed', 'Start'],
          ['RAM', 'Piano', 'Memory'],
          ['Beetle', 'Sign', 'Golfflag'],
          ['refeeree', 'Sign', 'Golfflag'],
          ['fireplace', 'Sign', 'Golfflag'],
          ['moth', 'Sign', 'Golfflag'],
          ['pipe', 'Sign', 'Golfflag'],
          ['teacher', 'Sign', 'Golfflag']
        ]
      }
    ],
    singlePlayer : [
      {
        playerName : "player1",
        trapList : [
          {
            position: [0,0],
            name: 'cattle'
          },
          {
            position: [1,1],
            name: 'snack'
          },
          {
            position: [2,1],
            name: 'sphere'
          },
          {
            position: [2,2],
            name: 'computer'
          },
          {
            position: [2,3],
            name: 'USB'
          },
          {
            position: [2,4],
            name: 'marijuana'
          },
          {
            position: [2,5],
            name: 'referee'
          },
          {
            position: [2,6],
            name: 'mouse'
          },
          {
            position: [2,7],
            name: 'man'
          }
        ],
        hintList : [[0,0],[1,1], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7]],
        hintWord : [
          ['cattle','Stomach','Fat Man'],
          ['snack','Robberer','Money Transporter'],
          ['sphere',"Mug"],
          ['computer', 'Sign', 'Golfflag'],
          ['usb', 'Sign', 'Golfflag'],
          ['marijuana', 'Sign', 'Golfflag'],
          ['referee', 'Sign', 'Golfflag'],
          ['mouse', 'Sign', 'Golfflag'],
          ['man', 'Sign', 'Golfflag']
        ]
      },

      {
        playerName : "player2",
        trapList : [
          {
            position: [0,0],
            name: 'alligator'
          },
          {
            position: [1,1],
            name: 'beans'
          },
          {
            position: [2,1],
            name: 'RAM'
          },
          {
            position: [2,2],
            name: 'beetle'
          },
          {
            position: [2,3],
            name: 'pigeon'
          },
          {
            position: [2,4],
            name: 'flag'
          },
          {
            position: [2,5],
            name: 'ocean'
          },
          {
            position: [2,6],
            name: 'programmer'
          },
          {
            position: [2,7],
            name: 'marijuana'
          }
        ],
        hintList : [[0,0],[1,1], [2,1],[2,2], [2,3], [2,4], [2,5], [2,6], [2,7]],
        hintWord : [
          ['Alligator', "Crocogile", "Reptile"],
          ['Beans', 'Seed', 'Start'],
          ['RAM', 'Piano', 'Memory'],
          ['Beetle', 'Sign', 'Golfflag'],
          ['pigion', 'Sign', 'Golfflag'],
          ['Flag', 'Sign', 'Golfflag'],
          ['ocean', 'Sign', 'Golfflag'],
          ['programmer', 'Sign', 'Golfflag'],
          ['majijuana', 'Sign', 'Golfflag']
        ]
      }
    ],

    multiPlayer : [
      {
        playerName : "player1",
        trapList : [
          {
            position: [0,0],
            name: 'cattle'
          },
          {
            position: [1,1],
            name: 'snack'
          },
          {
            position: [2,1],
            name: 'sphere'
          },
          {
            position: [2,2],
            name: 'computer'
          },
          {
            position: [2,3],
            name: 'USB'
          },
          {
            position: [2,4],
            name: 'marijuana'
          },
          {
            position: [2,5],
            name: 'referee'
          },
          {
            position: [2,6],
            name: 'mouse'
          },
          {
            position: [2,7],
            name: 'man'
          }
        ],
        hintList : [[0,0],[1,1], [2,1], [2,2], [2,3], [2,4], [2,5], [2,6], [2,7]],
        hintWord : [
          ['cattle','Stomach','Fat Man'],
          ['snack','Robberer','Money Transporter'],
          ['sphere',"Mug"],
          ['computer', 'Sign', 'Golfflag'],
          ['usb', 'Sign', 'Golfflag'],
          ['marijuana', 'Sign', 'Golfflag'],
          ['referee', 'Sign', 'Golfflag'],
          ['mouse', 'Sign', 'Golfflag'],
          ['man', 'Sign', 'Golfflag']
        ]
      },

      {
        playerName : "player2",
        trapList : [
          {
            position: [0,0],
            name: 'alligator'
          },
          {
            position: [1,1],
            name: 'beans'
          },
          {
            position: [2,1],
            name: 'RAM'
          },
          {
            position: [2,2],
            name: 'beetle'
          },
          {
            position: [2,3],
            name: 'pigeon'
          },
          {
            position: [2,4],
            name: 'flag'
          },
          {
            position: [2,5],
            name: 'ocean'
          },
          {
            position: [2,6],
            name: 'programmer'
          },
          {
            position: [2,7],
            name: 'marijuana'
          }
        ],
        hintList : [[0,0],[1,1], [2,1],[2,2], [2,3], [2,4], [2,5], [2,6], [2,7]],
        hintWord : [
          ['Alligator', "Crocogile", "Reptile"],
          ['Beans', 'Seed', 'Start'],
          ['RAM', 'Piano', 'Memory'],
          ['Beetle', 'Sign', 'Golfflag'],
          ['pigion', 'Sign', 'Golfflag'],
          ['Flag', 'Sign', 'Golfflag'],
          ['ocean', 'Sign', 'Golfflag'],
          ['programmer', 'Sign', 'Golfflag'],
          ['majijuana', 'Sign', 'Golfflag']
        ]
      }
    ]

  }
};
