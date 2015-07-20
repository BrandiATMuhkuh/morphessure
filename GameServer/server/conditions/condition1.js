/**
 * Created by jbr134 on 2/06/15.
 */

//module.exports = {}
module.exports = {
    "players": [
        {
            "pNumber": 153,
            "name": "player1",
            "realName": "Brandy",
            "type": "human",
            "isLoggedOn": false,
            "position": 0,
            "isPlaying": true,
            "trapList": [],
            "hintList": [],
            "hintWord": []
        },
        {
            "pNumber": -1,
            "name": "player2",
            "realName": "Nao",
            "type": "robot",
            "isLoggedOn": false,
            "position": 0,
            "isPlaying": false,
            "trapList": [],
            "hintList": [],
            "hintWord": [],
            "talk": {
                "acknowledge": [
                    "Ok, I go to the ?word?!",
                    "The ?word? it is!",
                    "Ok"
                ],
                "goTo": "Go to the ?word?!",
                "handMovement": true,
                "lookUpDown": true
            }
        },
        {
            "pNumber": 0,
            "name": "Researcher",
            "realName": "Researcher",
            "type": "researcher",
            "isLoggedOn": false,
            "trapList": [],
            "hintList": [],
            "hintWord": []
        }
    ],
    "levels": {
        "tutorial": {
            "type": "single",
            "network": [
                {
                    "next": 0,
                    "transmitter": "player1",
                    "receiver": "player2"
                }
            ],
            "fields": [
                {
                    "playerName": "player1",
                    "trapList": [],
                    "hintList": [],
                    "hintWord": []
                },
                {
                    "playerName": "player2",
                    "trapList": [],
                    "hintList": [],
                    "hintWord": []
                }
            ]
        },
        "singlePlayer": {
            "network": [
                {
                    "next": 1,
                    "transmitter": "player1",
                    "receiver": "player2"
                },
                {
                    "next": 0,
                    "transmitter": "player2",
                    "receiver": "player1"
                }
            ],
            "fields": [
                {
                    "playerName": "player1",
                    "trapList": [
                        {
                            "position": [
                                0,
                                0
                            ],
                            "name": "socket"
                        },
                        {
                            "position": [
                                0,
                                1
                            ],
                            "name": "dunes"
                        },
                        {
                            "position": [
                                0,
                                2
                            ],
                            "name": "artist"
                        },
                        {
                            "position": [
                                0,
                                3
                            ],
                            "name": "house"
                        },
                        {
                            "position": [
                                0,
                                4
                            ],
                            "name": "rocks"
                        },
                        {
                            "position": [
                                0,
                                5
                            ],
                            "name": "church"
                        },
                        {
                            "position": [
                                0,
                                6
                            ],
                            "name": "snake"
                        },
                        {
                            "position": [
                                0,
                                7
                            ],
                            "name": "cup"
                        },
                        {
                            "position": [
                                0,
                                8
                            ],
                            "name": "jacket"
                        },
                        {
                            "position": [
                                0,
                                9
                            ],
                            "name": "drugs"
                        },
                        {
                            "position": [
                                1,
                                0
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                1,
                                1
                            ],
                            "name": "belly"
                        },
                        {
                            "position": [
                                1,
                                2
                            ],
                            "name": "barrels"
                        },
                        {
                            "position": [
                                1,
                                3
                            ],
                            "name": "dog"
                        },
                        {
                            "position": [
                                1,
                                4
                            ],
                            "name": "clothes"
                        },
                        {
                            "position": [
                                1,
                                5
                            ],
                            "name": "snake"
                        },
                        {
                            "position": [
                                1,
                                6
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                1,
                                7
                            ],
                            "name": "computer"
                        },
                        {
                            "position": [
                                1,
                                8
                            ],
                            "name": "hen"
                        },
                        {
                            "position": [
                                1,
                                9
                            ],
                            "name": "cop"
                        },
                        {
                            "position": [
                                2,
                                0
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                2,
                                1
                            ],
                            "name": "car"
                        },
                        {
                            "position": [
                                2,
                                2
                            ],
                            "name": "knife"
                        },
                        {
                            "position": [
                                2,
                                3
                            ],
                            "name": "snack"
                        },
                        {
                            "position": [
                                2,
                                4
                            ],
                            "name": "road"
                        },
                        {
                            "position": [
                                2,
                                5
                            ],
                            "name": "factory"
                        },
                        {
                            "position": [
                                2,
                                6
                            ],
                            "name": "beans"
                        },
                        {
                            "position": [
                                2,
                                7
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                2,
                                8
                            ],
                            "name": "snake"
                        },
                        {
                            "position": [
                                2,
                                9
                            ],
                            "name": "socket"
                        },
                        {
                            "position": [
                                3,
                                0
                            ],
                            "name": "nuke_plant"
                        },
                        {
                            "position": [
                                3,
                                1
                            ],
                            "name": "floppy"
                        },
                        {
                            "position": [
                                3,
                                2
                            ],
                            "name": "athlete"
                        },
                        {
                            "position": [
                                3,
                                3
                            ],
                            "name": "road"
                        },
                        {
                            "position": [
                                3,
                                4
                            ],
                            "name": "axe"
                        },
                        {
                            "position": [
                                3,
                                5
                            ],
                            "name": "recycling"
                        },
                        {
                            "position": [
                                3,
                                6
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                3,
                                7
                            ],
                            "name": "cart"
                        },
                        {
                            "position": [
                                3,
                                8
                            ],
                            "name": "rave"
                        },
                        {
                            "position": [
                                3,
                                9
                            ],
                            "name": "alligator"
                        },
                        {
                            "position": [
                                4,
                                0
                            ],
                            "name": "house"
                        },
                        {
                            "position": [
                                4,
                                1
                            ],
                            "name": "baby"
                        },
                        {
                            "position": [
                                4,
                                2
                            ],
                            "name": "violin"
                        },
                        {
                            "position": [
                                4,
                                3
                            ],
                            "name": "bee"
                        },
                        {
                            "position": [
                                4,
                                4
                            ],
                            "name": "shoe"
                        },
                        {
                            "position": [
                                4,
                                5
                            ],
                            "name": "flower"
                        },
                        {
                            "position": [
                                4,
                                6
                            ],
                            "name": "runners"
                        },
                        {
                            "position": [
                                4,
                                7
                            ],
                            "name": "cup"
                        },
                        {
                            "position": [
                                4,
                                8
                            ],
                            "name": "touchpad"
                        },
                        {
                            "position": [
                                4,
                                9
                            ],
                            "name": "USB"
                        },
                        {
                            "position": [
                                5,
                                0
                            ],
                            "name": "kids"
                        },
                        {
                            "position": [
                                5,
                                1
                            ],
                            "name": "cattle"
                        },
                        {
                            "position": [
                                5,
                                2
                            ],
                            "name": "pipe"
                        },
                        {
                            "position": [
                                5,
                                3
                            ],
                            "name": "clothes"
                        },
                        {
                            "position": [
                                5,
                                4
                            ],
                            "name": "wine"
                        },
                        {
                            "position": [
                                5,
                                5
                            ],
                            "name": "teacher"
                        },
                        {
                            "position": [
                                5,
                                6
                            ],
                            "name": "jacket"
                        },
                        {
                            "position": [
                                5,
                                7
                            ],
                            "name": "church"
                        },
                        {
                            "position": [
                                5,
                                8
                            ],
                            "name": "house"
                        },
                        {
                            "position": [
                                5,
                                9
                            ],
                            "name": "cart"
                        },
                        {
                            "position": [
                                6,
                                0
                            ],
                            "name": "cross"
                        },
                        {
                            "position": [
                                6,
                                1
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                6,
                                2
                            ],
                            "name": "doctor"
                        },
                        {
                            "position": [
                                6,
                                3
                            ],
                            "name": "cup"
                        },
                        {
                            "position": [
                                6,
                                4
                            ],
                            "name": "floppy"
                        },
                        {
                            "position": [
                                6,
                                5
                            ],
                            "name": "dirt"
                        },
                        {
                            "position": [
                                6,
                                6
                            ],
                            "name": "ship"
                        },
                        {
                            "position": [
                                6,
                                7
                            ],
                            "name": "cattle"
                        },
                        {
                            "position": [
                                6,
                                8
                            ],
                            "name": "peach"
                        },
                        {
                            "position": [
                                6,
                                9
                            ],
                            "name": "flag"
                        },
                        {
                            "position": [
                                7,
                                0
                            ],
                            "name": "robot"
                        },
                        {
                            "position": [
                                7,
                                1
                            ],
                            "name": "fireplace"
                        },
                        {
                            "position": [
                                7,
                                2
                            ],
                            "name": "eraser"
                        },
                        {
                            "position": [
                                7,
                                3
                            ],
                            "name": "cattle"
                        },
                        {
                            "position": [
                                7,
                                4
                            ],
                            "name": "USB"
                        },
                        {
                            "position": [
                                7,
                                5
                            ],
                            "name": "eraser"
                        },
                        {
                            "position": [
                                7,
                                6
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                7,
                                7
                            ],
                            "name": "cave"
                        },
                        {
                            "position": [
                                7,
                                8
                            ],
                            "name": "baby"
                        },
                        {
                            "position": [
                                7,
                                9
                            ],
                            "name": "moth"
                        },
                        {
                            "position": [
                                8,
                                0
                            ],
                            "name": "factory"
                        },
                        {
                            "position": [
                                8,
                                1
                            ],
                            "name": "cleaner"
                        },
                        {
                            "position": [
                                8,
                                2
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                8,
                                3
                            ],
                            "name": "cook"
                        },
                        {
                            "position": [
                                8,
                                4
                            ],
                            "name": "Q45"
                        },
                        {
                            "position": [
                                8,
                                5
                            ],
                            "name": "branch"
                        },
                        {
                            "position": [
                                8,
                                6
                            ],
                            "name": "pigeon"
                        },
                        {
                            "position": [
                                8,
                                7
                            ],
                            "name": "referee"
                        },
                        {
                            "position": [
                                8,
                                8
                            ],
                            "name": "sink"
                        },
                        {
                            "position": [
                                8,
                                9
                            ],
                            "name": "jacket"
                        },
                        {
                            "position": [
                                9,
                                0
                            ],
                            "name": "artist"
                        },
                        {
                            "position": [
                                9,
                                1
                            ],
                            "name": "doctor"
                        },
                        {
                            "position": [
                                9,
                                2
                            ],
                            "name": "peach"
                        },
                        {
                            "position": [
                                9,
                                3
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                9,
                                4
                            ],
                            "name": "wine"
                        },
                        {
                            "position": [
                                9,
                                5
                            ],
                            "name": "dirt"
                        },
                        {
                            "position": [
                                9,
                                6
                            ],
                            "name": "shoe"
                        },
                        {
                            "position": [
                                9,
                                7
                            ],
                            "name": "Q60"
                        },
                        {
                            "position": [
                                9,
                                8
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                9,
                                9
                            ],
                            "name": "plate"
                        }
                    ],
                    "hintList": [
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
                        ]
                    ],
                    "hintWord": []
                },
                {
                    "playerName": "player2",
                    "trapList": [
                        {
                            "position": [
                                0,
                                0
                            ],
                            "name": "bench"
                        },
                        {
                            "position": [
                                0,
                                1
                            ],
                            "name": "pipe"
                        },
                        {
                            "position": [
                                0,
                                2
                            ],
                            "name": "doctor"
                        },
                        {
                            "position": [
                                0,
                                3
                            ],
                            "name": "beetle"
                        },
                        {
                            "position": [
                                0,
                                4
                            ],
                            "name": "soldier"
                        },
                        {
                            "position": [
                                0,
                                5
                            ],
                            "name": "recycling"
                        },
                        {
                            "position": [
                                0,
                                6
                            ],
                            "name": "priest"
                        },
                        {
                            "position": [
                                0,
                                7
                            ],
                            "name": "teacher"
                        },
                        {
                            "position": [
                                0,
                                8
                            ],
                            "name": "doctor"
                        },
                        {
                            "position": [
                                0,
                                9
                            ],
                            "name": "sink"
                        },
                        {
                            "position": [
                                1,
                                0
                            ],
                            "name": "tree"
                        },
                        {
                            "position": [
                                1,
                                1
                            ],
                            "name": "belly"
                        },
                        {
                            "position": [
                                1,
                                2
                            ],
                            "name": "city"
                        },
                        {
                            "position": [
                                1,
                                3
                            ],
                            "name": "nuke_plant"
                        },
                        {
                            "position": [
                                1,
                                4
                            ],
                            "name": "jacket"
                        },
                        {
                            "position": [
                                1,
                                5
                            ],
                            "name": "cart"
                        },
                        {
                            "position": [
                                1,
                                6
                            ],
                            "name": "branch"
                        },
                        {
                            "position": [
                                1,
                                7
                            ],
                            "name": "king"
                        },
                        {
                            "position": [
                                1,
                                8
                            ],
                            "name": "alligator"
                        },
                        {
                            "position": [
                                1,
                                9
                            ],
                            "name": "fireplace"
                        },
                        {
                            "position": [
                                2,
                                0
                            ],
                            "name": "rocks"
                        },
                        {
                            "position": [
                                2,
                                1
                            ],
                            "name": "car"
                        },
                        {
                            "position": [
                                2,
                                2
                            ],
                            "name": "knife"
                        },
                        {
                            "position": [
                                2,
                                3
                            ],
                            "name": "snack"
                        },
                        {
                            "position": [
                                2,
                                4
                            ],
                            "name": "cattle"
                        },
                        {
                            "position": [
                                2,
                                5
                            ],
                            "name": "barrels"
                        },
                        {
                            "position": [
                                2,
                                6
                            ],
                            "name": "nuke_plant"
                        },
                        {
                            "position": [
                                2,
                                7
                            ],
                            "name": "beans"
                        },
                        {
                            "position": [
                                2,
                                8
                            ],
                            "name": "branch"
                        },
                        {
                            "position": [
                                2,
                                9
                            ],
                            "name": "barrels"
                        },
                        {
                            "position": [
                                3,
                                0
                            ],
                            "name": "microbes"
                        },
                        {
                            "position": [
                                3,
                                1
                            ],
                            "name": "sphere"
                        },
                        {
                            "position": [
                                3,
                                2
                            ],
                            "name": "referee"
                        },
                        {
                            "position": [
                                3,
                                3
                            ],
                            "name": "dirt"
                        },
                        {
                            "position": [
                                3,
                                4
                            ],
                            "name": "hen"
                        },
                        {
                            "position": [
                                3,
                                5
                            ],
                            "name": "alligator"
                        },
                        {
                            "position": [
                                3,
                                6
                            ],
                            "name": "kids"
                        },
                        {
                            "position": [
                                3,
                                7
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                3,
                                8
                            ],
                            "name": "canoe"
                        },
                        {
                            "position": [
                                3,
                                9
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                4,
                                0
                            ],
                            "name": "graves"
                        },
                        {
                            "position": [
                                4,
                                1
                            ],
                            "name": "baby"
                        },
                        {
                            "position": [
                                4,
                                2
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                4,
                                3
                            ],
                            "name": "kids"
                        },
                        {
                            "position": [
                                4,
                                4
                            ],
                            "name": "woman"
                        },
                        {
                            "position": [
                                4,
                                5
                            ],
                            "name": "peach"
                        },
                        {
                            "position": [
                                4,
                                6
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                4,
                                7
                            ],
                            "name": "priest"
                        },
                        {
                            "position": [
                                4,
                                8
                            ],
                            "name": "rocks"
                        },
                        {
                            "position": [
                                4,
                                9
                            ],
                            "name": "drugs"
                        },
                        {
                            "position": [
                                5,
                                0
                            ],
                            "name": "bat"
                        },
                        {
                            "position": [
                                5,
                                1
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                5,
                                2
                            ],
                            "name": "people"
                        },
                        {
                            "position": [
                                5,
                                3
                            ],
                            "name": "beach"
                        },
                        {
                            "position": [
                                5,
                                4
                            ],
                            "name": "bee"
                        },
                        {
                            "position": [
                                5,
                                5
                            ],
                            "name": "alligator"
                        },
                        {
                            "position": [
                                5,
                                6
                            ],
                            "name": "cart"
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
                            "name": "Q60"
                        },
                        {
                            "position": [
                                5,
                                9
                            ],
                            "name": "robot"
                        },
                        {
                            "position": [
                                6,
                                0
                            ],
                            "name": "marijuana"
                        },
                        {
                            "position": [
                                6,
                                1
                            ],
                            "name": "parking_spot"
                        },
                        {
                            "position": [
                                6,
                                2
                            ],
                            "name": "tree"
                        },
                        {
                            "position": [
                                6,
                                3
                            ],
                            "name": "rabbit"
                        },
                        {
                            "position": [
                                6,
                                4
                            ],
                            "name": "ocean"
                        },
                        {
                            "position": [
                                6,
                                5
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                6,
                                6
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                6,
                                7
                            ],
                            "name": "tree"
                        },
                        {
                            "position": [
                                6,
                                8
                            ],
                            "name": "computer"
                        },
                        {
                            "position": [
                                6,
                                9
                            ],
                            "name": "violin"
                        },
                        {
                            "position": [
                                7,
                                0
                            ],
                            "name": "house"
                        },
                        {
                            "position": [
                                7,
                                1
                            ],
                            "name": "runners"
                        },
                        {
                            "position": [
                                7,
                                2
                            ],
                            "name": "USB"
                        },
                        {
                            "position": [
                                7,
                                3
                            ],
                            "name": "athlete"
                        },
                        {
                            "position": [
                                7,
                                4
                            ],
                            "name": "programmer"
                        },
                        {
                            "position": [
                                7,
                                5
                            ],
                            "name": "peach"
                        },
                        {
                            "position": [
                                7,
                                6
                            ],
                            "name": "dirt"
                        },
                        {
                            "position": [
                                7,
                                7
                            ],
                            "name": "beans"
                        },
                        {
                            "position": [
                                7,
                                8
                            ],
                            "name": "church"
                        },
                        {
                            "position": [
                                7,
                                9
                            ],
                            "name": "dirt"
                        },
                        {
                            "position": [
                                8,
                                0
                            ],
                            "name": "plate"
                        },
                        {
                            "position": [
                                8,
                                1
                            ],
                            "name": "beans"
                        },
                        {
                            "position": [
                                8,
                                2
                            ],
                            "name": "router"
                        },
                        {
                            "position": [
                                8,
                                3
                            ],
                            "name": "cattle"
                        },
                        {
                            "position": [
                                8,
                                4
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                8,
                                5
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                8,
                                6
                            ],
                            "name": "cook"
                        },
                        {
                            "position": [
                                8,
                                7
                            ],
                            "name": "robot"
                        },
                        {
                            "position": [
                                8,
                                8
                            ],
                            "name": "runners"
                        },
                        {
                            "position": [
                                8,
                                9
                            ],
                            "name": "athlete"
                        },
                        {
                            "position": [
                                9,
                                0
                            ],
                            "name": "man"
                        },
                        {
                            "position": [
                                9,
                                1
                            ],
                            "name": "bee"
                        },
                        {
                            "position": [
                                9,
                                2
                            ],
                            "name": "jacket"
                        },
                        {
                            "position": [
                                9,
                                3
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                9,
                                4
                            ],
                            "name": "beetle"
                        },
                        {
                            "position": [
                                9,
                                5
                            ],
                            "name": "cook"
                        },
                        {
                            "position": [
                                9,
                                6
                            ],
                            "name": "floppy"
                        },
                        {
                            "position": [
                                9,
                                7
                            ],
                            "name": "moth"
                        },
                        {
                            "position": [
                                9,
                                8
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                9,
                                9
                            ],
                            "name": "rave"
                        }
                    ],
                    "hintList": [
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
                        ]
                    ],
                    "hintWord": []
                }
            ]
        },
        "multiPlayerTutorial": {
            "network": [
                {
                    "next": 1,
                    "transmitter": "player1",
                    "receiver": "player2"
                },
                {
                    "next": 0,
                    "transmitter": "player2",
                    "receiver": "player1"
                }
            ],
            "fields": [
                {
                    "playerName": "player1",
                    "trapList": [],
                    "hintList": [],
                    "hintWord": []
                },
                {
                    "playerName": "player2",
                    "trapList": [],
                    "hintList": [],
                    "hintWord": []
                }
            ]
        },
        "multiPlayer": {
            "network": [
                {
                    "next": 1,
                    "transmitter": "player1",
                    "receiver": "player2"
                },
                {
                    "next": 0,
                    "transmitter": "player2",
                    "receiver": "player1"
                }
            ],
            "fields": [
                {
                    "playerName": "player1",
                    "trapList": [
                        {
                            "position": [
                                0,
                                0
                            ],
                            "name": "canoe"
                        },
                        {
                            "position": [
                                0,
                                1
                            ],
                            "name": "alligator"
                        },
                        {
                            "position": [
                                0,
                                2
                            ],
                            "name": "house"
                        },
                        {
                            "position": [
                                0,
                                3
                            ],
                            "name": "sink"
                        },
                        {
                            "position": [
                                0,
                                4
                            ],
                            "name": "axe"
                        },
                        {
                            "position": [
                                0,
                                5
                            ],
                            "name": "drugs"
                        },
                        {
                            "position": [
                                0,
                                6
                            ],
                            "name": "dirt"
                        },
                        {
                            "position": [
                                0,
                                7
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                0,
                                8
                            ],
                            "name": "pigeon"
                        },
                        {
                            "position": [
                                0,
                                9
                            ],
                            "name": "microbes"
                        },
                        {
                            "position": [
                                1,
                                0
                            ],
                            "name": "cleaner"
                        },
                        {
                            "position": [
                                1,
                                1
                            ],
                            "name": "knife"
                        },
                        {
                            "position": [
                                1,
                                2
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                1,
                                3
                            ],
                            "name": "plate"
                        },
                        {
                            "position": [
                                1,
                                4
                            ],
                            "name": "runners"
                        },
                        {
                            "position": [
                                1,
                                5
                            ],
                            "name": "socket"
                        },
                        {
                            "position": [
                                1,
                                6
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                1,
                                7
                            ],
                            "name": "router"
                        },
                        {
                            "position": [
                                1,
                                8
                            ],
                            "name": "dirt"
                        },
                        {
                            "position": [
                                1,
                                9
                            ],
                            "name": "people"
                        },
                        {
                            "position": [
                                2,
                                0
                            ],
                            "name": "violin"
                        },
                        {
                            "position": [
                                2,
                                1
                            ],
                            "name": "belly"
                        },
                        {
                            "position": [
                                2,
                                2
                            ],
                            "name": "knife"
                        },
                        {
                            "position": [
                                2,
                                3
                            ],
                            "name": "knife"
                        },
                        {
                            "position": [
                                2,
                                4
                            ],
                            "name": "car"
                        },
                        {
                            "position": [
                                2,
                                5
                            ],
                            "name": "dog"
                        },
                        {
                            "position": [
                                2,
                                6
                            ],
                            "name": "car"
                        },
                        {
                            "position": [
                                2,
                                7
                            ],
                            "name": "church"
                        },
                        {
                            "position": [
                                2,
                                8
                            ],
                            "name": "graves"
                        },
                        {
                            "position": [
                                2,
                                9
                            ],
                            "name": "canoe"
                        },
                        {
                            "position": [
                                3,
                                0
                            ],
                            "name": "rocks"
                        },
                        {
                            "position": [
                                3,
                                1
                            ],
                            "name": "king"
                        },
                        {
                            "position": [
                                3,
                                2
                            ],
                            "name": "money"
                        },
                        {
                            "position": [
                                3,
                                3
                            ],
                            "name": "branch"
                        },
                        {
                            "position": [
                                3,
                                4
                            ],
                            "name": "sphere"
                        },
                        {
                            "position": [
                                3,
                                5
                            ],
                            "name": "hen"
                        },
                        {
                            "position": [
                                3,
                                6
                            ],
                            "name": "moth"
                        },
                        {
                            "position": [
                                3,
                                7
                            ],
                            "name": "flag"
                        },
                        {
                            "position": [
                                3,
                                8
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                3,
                                9
                            ],
                            "name": "branch"
                        },
                        {
                            "position": [
                                4,
                                0
                            ],
                            "name": "clothes"
                        },
                        {
                            "position": [
                                4,
                                1
                            ],
                            "name": "rabbit"
                        },
                        {
                            "position": [
                                4,
                                2
                            ],
                            "name": "rocks"
                        },
                        {
                            "position": [
                                4,
                                3
                            ],
                            "name": "wine"
                        },
                        {
                            "position": [
                                4,
                                4
                            ],
                            "name": "cattle"
                        },
                        {
                            "position": [
                                4,
                                5
                            ],
                            "name": "car"
                        },
                        {
                            "position": [
                                4,
                                6
                            ],
                            "name": "belly"
                        },
                        {
                            "position": [
                                4,
                                7
                            ],
                            "name": "hen"
                        },
                        {
                            "position": [
                                4,
                                8
                            ],
                            "name": "gun"
                        },
                        {
                            "position": [
                                4,
                                9
                            ],
                            "name": "boot"
                        },
                        {
                            "position": [
                                5,
                                0
                            ],
                            "name": "snake"
                        },
                        {
                            "position": [
                                5,
                                1
                            ],
                            "name": "cup"
                        },
                        {
                            "position": [
                                5,
                                2
                            ],
                            "name": "rave"
                        },
                        {
                            "position": [
                                5,
                                3
                            ],
                            "name": "athlete"
                        },
                        {
                            "position": [
                                5,
                                4
                            ],
                            "name": "soldier"
                        },
                        {
                            "position": [
                                5,
                                5
                            ],
                            "name": "USB"
                        },
                        {
                            "position": [
                                5,
                                6
                            ],
                            "name": "beach"
                        },
                        {
                            "position": [
                                5,
                                7
                            ],
                            "name": "programmer"
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
                            "name": "clothes"
                        },
                        {
                            "position": [
                                6,
                                0
                            ],
                            "name": "cleaner"
                        },
                        {
                            "position": [
                                6,
                                1
                            ],
                            "name": "beach"
                        },
                        {
                            "position": [
                                6,
                                2
                            ],
                            "name": "bat"
                        },
                        {
                            "position": [
                                6,
                                3
                            ],
                            "name": "branch"
                        },
                        {
                            "position": [
                                6,
                                4
                            ],
                            "name": "cleaner"
                        },
                        {
                            "position": [
                                6,
                                5
                            ],
                            "name": "violin"
                        },
                        {
                            "position": [
                                6,
                                6
                            ],
                            "name": "cattle"
                        },
                        {
                            "position": [
                                6,
                                7
                            ],
                            "name": "dog"
                        },
                        {
                            "position": [
                                6,
                                8
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                6,
                                9
                            ],
                            "name": "bee"
                        },
                        {
                            "position": [
                                7,
                                0
                            ],
                            "name": "canoe"
                        },
                        {
                            "position": [
                                7,
                                1
                            ],
                            "name": "hen"
                        },
                        {
                            "position": [
                                7,
                                2
                            ],
                            "name": "people"
                        },
                        {
                            "position": [
                                7,
                                3
                            ],
                            "name": "man"
                        },
                        {
                            "position": [
                                7,
                                4
                            ],
                            "name": "graves"
                        },
                        {
                            "position": [
                                7,
                                5
                            ],
                            "name": "Q60"
                        },
                        {
                            "position": [
                                7,
                                6
                            ],
                            "name": "barrels"
                        },
                        {
                            "position": [
                                7,
                                7
                            ],
                            "name": "violin"
                        },
                        {
                            "position": [
                                7,
                                8
                            ],
                            "name": "belly"
                        },
                        {
                            "position": [
                                7,
                                9
                            ],
                            "name": "alligator"
                        },
                        {
                            "position": [
                                8,
                                0
                            ],
                            "name": "cross"
                        },
                        {
                            "position": [
                                8,
                                1
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                8,
                                2
                            ],
                            "name": "kids"
                        },
                        {
                            "position": [
                                8,
                                3
                            ],
                            "name": "graves"
                        },
                        {
                            "position": [
                                8,
                                4
                            ],
                            "name": "bat"
                        },
                        {
                            "position": [
                                8,
                                5
                            ],
                            "name": "doctor"
                        },
                        {
                            "position": [
                                8,
                                6
                            ],
                            "name": "parking_spot"
                        },
                        {
                            "position": [
                                8,
                                7
                            ],
                            "name": "king"
                        },
                        {
                            "position": [
                                8,
                                8
                            ],
                            "name": "dog"
                        },
                        {
                            "position": [
                                8,
                                9
                            ],
                            "name": "woman"
                        },
                        {
                            "position": [
                                9,
                                0
                            ],
                            "name": "RAM"
                        },
                        {
                            "position": [
                                9,
                                1
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                9,
                                2
                            ],
                            "name": "snake"
                        },
                        {
                            "position": [
                                9,
                                3
                            ],
                            "name": "man"
                        },
                        {
                            "position": [
                                9,
                                4
                            ],
                            "name": "soldier"
                        },
                        {
                            "position": [
                                9,
                                5
                            ],
                            "name": "boot"
                        },
                        {
                            "position": [
                                9,
                                6
                            ],
                            "name": "cave"
                        },
                        {
                            "position": [
                                9,
                                7
                            ],
                            "name": "woman"
                        },
                        {
                            "position": [
                                9,
                                8
                            ],
                            "name": "clothes"
                        },
                        {
                            "position": [
                                9,
                                9
                            ],
                            "name": "ship"
                        }
                    ],
                    "hintList": [
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
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            6,
                            2
                        ],
                        [
                            6,
                            3
                        ],
                        [
                            6,
                            4
                        ],
                        [
                            6,
                            5
                        ],
                        [
                            6,
                            6
                        ],
                        [
                            6,
                            7
                        ],
                        [
                            7,
                            8
                        ],
                        [
                            8,
                            7
                        ],
                        [
                            8,
                            6
                        ],
                        [
                            8,
                            5
                        ],
                        [
                            8,
                            4
                        ],
                        [
                            8,
                            3
                        ],
                        [
                            8,
                            2
                        ],
                        [
                            8,
                            1
                        ],
                        [
                            9,
                            1
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
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            6,
                            2
                        ],
                        [
                            6,
                            3
                        ],
                        [
                            6,
                            4
                        ],
                        [
                            6,
                            5
                        ],
                        [
                            6,
                            6
                        ],
                        [
                            6,
                            7
                        ],
                        [
                            7,
                            8
                        ],
                        [
                            8,
                            7
                        ],
                        [
                            8,
                            6
                        ],
                        [
                            8,
                            5
                        ],
                        [
                            8,
                            4
                        ],
                        [
                            8,
                            3
                        ],
                        [
                            8,
                            2
                        ],
                        [
                            8,
                            1
                        ],
                        [
                            9,
                            1
                        ]
                    ],
                    "hintWord": [
                        [
                            "knife"
                        ],
                        [
                            "belly"
                        ],
                        [
                            "knife"
                        ],
                        [
                            "knife"
                        ],
                        [
                            "car"
                        ],
                        [
                            "dog"
                        ],
                        [
                            "car"
                        ],
                        [
                            "church"
                        ],
                        [
                            "door"
                        ],
                        [
                            "hen"
                        ],
                        [
                            "belly"
                        ],
                        [
                            "car"
                        ],
                        [
                            "cattle"
                        ],
                        [
                            "wine"
                        ],
                        [
                            "rocks"
                        ],
                        [
                            "rabbit"
                        ],
                        [
                            "cup"
                        ],
                        [
                            "beach"
                        ],
                        [
                            "bat"
                        ],
                        [
                            "branch"
                        ],
                        [
                            "cleaner"
                        ],
                        [
                            "violin"
                        ],
                        [
                            "cattle"
                        ],
                        [
                            "dog"
                        ],
                        [
                            "belly"
                        ],
                        [
                            "king"
                        ],
                        [
                            "parking_spot"
                        ],
                        [
                            "doctor"
                        ],
                        [
                            "bat"
                        ],
                        [
                            "graves"
                        ],
                        [
                            "kids"
                        ],
                        [
                            "laptop"
                        ],
                        [
                            "door"
                        ]
                    ]
                },
                {
                    "playerName": "player2",
                    "trapList": [
                        {
                            "position": [
                                0,
                                0
                            ],
                            "name": "rocks"
                        },
                        {
                            "position": [
                                0,
                                1
                            ],
                            "name": "microbes"
                        },
                        {
                            "position": [
                                0,
                                2
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                0,
                                3
                            ],
                            "name": "flag"
                        },
                        {
                            "position": [
                                0,
                                4
                            ],
                            "name": "house"
                        },
                        {
                            "position": [
                                0,
                                5
                            ],
                            "name": "referee"
                        },
                        {
                            "position": [
                                0,
                                6
                            ],
                            "name": "beetle"
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
                            "name": "cart"
                        },
                        {
                            "position": [
                                0,
                                9
                            ],
                            "name": "city"
                        },
                        {
                            "position": [
                                1,
                                0
                            ],
                            "name": "couch"
                        },
                        {
                            "position": [
                                1,
                                1
                            ],
                            "name": "drink"
                        },
                        {
                            "position": [
                                1,
                                2
                            ],
                            "name": "ship"
                        },
                        {
                            "position": [
                                1,
                                3
                            ],
                            "name": "cart"
                        },
                        {
                            "position": [
                                1,
                                4
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                1,
                                5
                            ],
                            "name": "beach"
                        },
                        {
                            "position": [
                                1,
                                6
                            ],
                            "name": "marijuana"
                        },
                        {
                            "position": [
                                1,
                                7
                            ],
                            "name": "dirt"
                        },
                        {
                            "position": [
                                1,
                                8
                            ],
                            "name": "church"
                        },
                        {
                            "position": [
                                1,
                                9
                            ],
                            "name": "flower"
                        },
                        {
                            "position": [
                                2,
                                0
                            ],
                            "name": "floppy"
                        },
                        {
                            "position": [
                                2,
                                1
                            ],
                            "name": "touchpad"
                        },
                        {
                            "position": [
                                2,
                                2
                            ],
                            "name": "knife"
                        },
                        {
                            "position": [
                                2,
                                3
                            ],
                            "name": "snake"
                        },
                        {
                            "position": [
                                2,
                                4
                            ],
                            "name": "cook"
                        },
                        {
                            "position": [
                                2,
                                5
                            ],
                            "name": "floppy"
                        },
                        {
                            "position": [
                                2,
                                6
                            ],
                            "name": "berries"
                        },
                        {
                            "position": [
                                2,
                                7
                            ],
                            "name": "flag"
                        },
                        {
                            "position": [
                                2,
                                8
                            ],
                            "name": "computer"
                        },
                        {
                            "position": [
                                2,
                                9
                            ],
                            "name": "referee"
                        },
                        {
                            "position": [
                                3,
                                0
                            ],
                            "name": "drugs"
                        },
                        {
                            "position": [
                                3,
                                1
                            ],
                            "name": "programmer"
                        },
                        {
                            "position": [
                                3,
                                2
                            ],
                            "name": "floppy"
                        },
                        {
                            "position": [
                                3,
                                3
                            ],
                            "name": "sphere"
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
                            "name": "USB"
                        },
                        {
                            "position": [
                                3,
                                6
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                3,
                                7
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                3,
                                8
                            ],
                            "name": "car"
                        },
                        {
                            "position": [
                                3,
                                9
                            ],
                            "name": "church"
                        },
                        {
                            "position": [
                                4,
                                0
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                4,
                                1
                            ],
                            "name": "snack"
                        },
                        {
                            "position": [
                                4,
                                2
                            ],
                            "name": "flag"
                        },
                        {
                            "position": [
                                4,
                                3
                            ],
                            "name": "belly"
                        },
                        {
                            "position": [
                                4,
                                4
                            ],
                            "name": "rabbit"
                        },
                        {
                            "position": [
                                4,
                                5
                            ],
                            "name": "ship"
                        },
                        {
                            "position": [
                                4,
                                6
                            ],
                            "name": "snack"
                        },
                        {
                            "position": [
                                4,
                                7
                            ],
                            "name": "flower"
                        },
                        {
                            "position": [
                                4,
                                8
                            ],
                            "name": "cup"
                        },
                        {
                            "position": [
                                4,
                                9
                            ],
                            "name": "rocks"
                        },
                        {
                            "position": [
                                5,
                                0
                            ],
                            "name": "drink"
                        },
                        {
                            "position": [
                                5,
                                1
                            ],
                            "name": "snack"
                        },
                        {
                            "position": [
                                5,
                                2
                            ],
                            "name": "fireplace"
                        },
                        {
                            "position": [
                                5,
                                3
                            ],
                            "name": "robot"
                        },
                        {
                            "position": [
                                5,
                                4
                            ],
                            "name": "bee"
                        },
                        {
                            "position": [
                                5,
                                5
                            ],
                            "name": "microbes"
                        },
                        {
                            "position": [
                                5,
                                6
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                5,
                                7
                            ],
                            "name": "violin"
                        },
                        {
                            "position": [
                                5,
                                8
                            ],
                            "name": "jacket"
                        },
                        {
                            "position": [
                                5,
                                9
                            ],
                            "name": "rabbit"
                        },
                        {
                            "position": [
                                6,
                                0
                            ],
                            "name": "man"
                        },
                        {
                            "position": [
                                6,
                                1
                            ],
                            "name": "snack"
                        },
                        {
                            "position": [
                                6,
                                2
                            ],
                            "name": "snake"
                        },
                        {
                            "position": [
                                6,
                                3
                            ],
                            "name": "athlete"
                        },
                        {
                            "position": [
                                6,
                                4
                            ],
                            "name": "axe"
                        },
                        {
                            "position": [
                                6,
                                5
                            ],
                            "name": "barrels"
                        },
                        {
                            "position": [
                                6,
                                6
                            ],
                            "name": "USB"
                        },
                        {
                            "position": [
                                6,
                                7
                            ],
                            "name": "city"
                        },
                        {
                            "position": [
                                6,
                                8
                            ],
                            "name": "robot"
                        },
                        {
                            "position": [
                                6,
                                9
                            ],
                            "name": "rave"
                        },
                        {
                            "position": [
                                7,
                                0
                            ],
                            "name": "cleaner"
                        },
                        {
                            "position": [
                                7,
                                1
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                7,
                                2
                            ],
                            "name": "sphere"
                        },
                        {
                            "position": [
                                7,
                                3
                            ],
                            "name": "cook"
                        },
                        {
                            "position": [
                                7,
                                4
                            ],
                            "name": "priest"
                        },
                        {
                            "position": [
                                7,
                                5
                            ],
                            "name": "boot"
                        },
                        {
                            "position": [
                                7,
                                6
                            ],
                            "name": "factory"
                        },
                        {
                            "position": [
                                7,
                                7
                            ],
                            "name": "programmer"
                        },
                        {
                            "position": [
                                7,
                                8
                            ],
                            "name": "soldier"
                        },
                        {
                            "position": [
                                7,
                                9
                            ],
                            "name": "cross"
                        },
                        {
                            "position": [
                                8,
                                0
                            ],
                            "name": "clothes"
                        },
                        {
                            "position": [
                                8,
                                1
                            ],
                            "name": "dunes"
                        },
                        {
                            "position": [
                                8,
                                2
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                8,
                                3
                            ],
                            "name": "tree"
                        },
                        {
                            "position": [
                                8,
                                4
                            ],
                            "name": "ocean"
                        },
                        {
                            "position": [
                                8,
                                5
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                8,
                                6
                            ],
                            "name": "nuke_plant"
                        },
                        {
                            "position": [
                                8,
                                7
                            ],
                            "name": "plate"
                        },
                        {
                            "position": [
                                8,
                                8
                            ],
                            "name": "drink"
                        },
                        {
                            "position": [
                                8,
                                9
                            ],
                            "name": "RAM"
                        },
                        {
                            "position": [
                                9,
                                0
                            ],
                            "name": "USB"
                        },
                        {
                            "position": [
                                9,
                                1
                            ],
                            "name": "alligator"
                        },
                        {
                            "position": [
                                9,
                                2
                            ],
                            "name": "cop"
                        },
                        {
                            "position": [
                                9,
                                3
                            ],
                            "name": "snake"
                        },
                        {
                            "position": [
                                9,
                                4
                            ],
                            "name": "USB"
                        },
                        {
                            "position": [
                                9,
                                5
                            ],
                            "name": "referee"
                        },
                        {
                            "position": [
                                9,
                                6
                            ],
                            "name": "mouse"
                        },
                        {
                            "position": [
                                9,
                                7
                            ],
                            "name": "ship"
                        },
                        {
                            "position": [
                                9,
                                8
                            ],
                            "name": "shoe"
                        },
                        {
                            "position": [
                                9,
                                9
                            ],
                            "name": "woman"
                        }
                    ],
                    "hintList": [
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
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            6,
                            2
                        ],
                        [
                            6,
                            3
                        ],
                        [
                            6,
                            4
                        ],
                        [
                            6,
                            5
                        ],
                        [
                            6,
                            6
                        ],
                        [
                            6,
                            7
                        ],
                        [
                            7,
                            8
                        ],
                        [
                            8,
                            7
                        ],
                        [
                            8,
                            6
                        ],
                        [
                            8,
                            5
                        ],
                        [
                            8,
                            4
                        ],
                        [
                            8,
                            3
                        ],
                        [
                            8,
                            2
                        ],
                        [
                            8,
                            1
                        ],
                        [
                            9,
                            1
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
                        ],
                        [
                            6,
                            1
                        ],
                        [
                            6,
                            2
                        ],
                        [
                            6,
                            3
                        ],
                        [
                            6,
                            4
                        ],
                        [
                            6,
                            5
                        ],
                        [
                            6,
                            6
                        ],
                        [
                            6,
                            7
                        ],
                        [
                            7,
                            8
                        ],
                        [
                            8,
                            7
                        ],
                        [
                            8,
                            6
                        ],
                        [
                            8,
                            5
                        ],
                        [
                            8,
                            4
                        ],
                        [
                            8,
                            3
                        ],
                        [
                            8,
                            2
                        ],
                        [
                            8,
                            1
                        ],
                        [
                            9,
                            1
                        ]
                    ],
                    "hintWord": [
                        [
                            "drink"
                        ],
                        [
                            "touchpad"
                        ],
                        [
                            "knife"
                        ],
                        [
                            "snake"
                        ],
                        [
                            "cook"
                        ],
                        [
                            "floppy"
                        ],
                        [
                            "berries"
                        ],
                        [
                            "flag"
                        ],
                        [
                            "car"
                        ],
                        [
                            "flower"
                        ],
                        [
                            "snack"
                        ],
                        [
                            "ship"
                        ],
                        [
                            "rabbit"
                        ],
                        [
                            "belly"
                        ],
                        [
                            "flag"
                        ],
                        [
                            "snack"
                        ],
                        [
                            "snack"
                        ],
                        [
                            "snack"
                        ],
                        [
                            "snake"
                        ],
                        [
                            "athlete"
                        ],
                        [
                            "axe"
                        ],
                        [
                            "barrels"
                        ],
                        [
                            "USB"
                        ],
                        [
                            "city"
                        ],
                        [
                            "soldier"
                        ],
                        [
                            "plate"
                        ],
                        [
                            "nuke_plant"
                        ],
                        [
                            "door"
                        ],
                        [
                            "ocean"
                        ],
                        [
                            "tree"
                        ],
                        [
                            "laptop"
                        ],
                        [
                            "dunes"
                        ],
                        [
                            "alligator"
                        ]
                    ]
                }
            ]
        },
        "secSinglePlayer": {
            "network": [
                {
                    "next": 1,
                    "transmitter": "player1",
                    "receiver": "player2"
                },
                {
                    "next": 0,
                    "transmitter": "player2",
                    "receiver": "player1"
                }
            ],
            "fields": [
                {
                    "playerName": "player1",
                    "trapList": [
                        {
                            "position": [
                                0,
                                0
                            ],
                            "name": "socket"
                        },
                        {
                            "position": [
                                0,
                                1
                            ],
                            "name": "dunes"
                        },
                        {
                            "position": [
                                0,
                                2
                            ],
                            "name": "artist"
                        },
                        {
                            "position": [
                                0,
                                3
                            ],
                            "name": "house"
                        },
                        {
                            "position": [
                                0,
                                4
                            ],
                            "name": "rocks"
                        },
                        {
                            "position": [
                                0,
                                5
                            ],
                            "name": "church"
                        },
                        {
                            "position": [
                                0,
                                6
                            ],
                            "name": "snake"
                        },
                        {
                            "position": [
                                0,
                                7
                            ],
                            "name": "cup"
                        },
                        {
                            "position": [
                                0,
                                8
                            ],
                            "name": "jacket"
                        },
                        {
                            "position": [
                                0,
                                9
                            ],
                            "name": "drugs"
                        },
                        {
                            "position": [
                                1,
                                0
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                1,
                                1
                            ],
                            "name": "belly"
                        },
                        {
                            "position": [
                                1,
                                2
                            ],
                            "name": "barrels"
                        },
                        {
                            "position": [
                                1,
                                3
                            ],
                            "name": "dog"
                        },
                        {
                            "position": [
                                1,
                                4
                            ],
                            "name": "clothes"
                        },
                        {
                            "position": [
                                1,
                                5
                            ],
                            "name": "snake"
                        },
                        {
                            "position": [
                                1,
                                6
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                1,
                                7
                            ],
                            "name": "computer"
                        },
                        {
                            "position": [
                                1,
                                8
                            ],
                            "name": "hen"
                        },
                        {
                            "position": [
                                1,
                                9
                            ],
                            "name": "cop"
                        },
                        {
                            "position": [
                                2,
                                0
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                2,
                                1
                            ],
                            "name": "car"
                        },
                        {
                            "position": [
                                2,
                                2
                            ],
                            "name": "knife"
                        },
                        {
                            "position": [
                                2,
                                3
                            ],
                            "name": "snack"
                        },
                        {
                            "position": [
                                2,
                                4
                            ],
                            "name": "road"
                        },
                        {
                            "position": [
                                2,
                                5
                            ],
                            "name": "factory"
                        },
                        {
                            "position": [
                                2,
                                6
                            ],
                            "name": "beans"
                        },
                        {
                            "position": [
                                2,
                                7
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                2,
                                8
                            ],
                            "name": "snake"
                        },
                        {
                            "position": [
                                2,
                                9
                            ],
                            "name": "socket"
                        },
                        {
                            "position": [
                                3,
                                0
                            ],
                            "name": "nuke_plant"
                        },
                        {
                            "position": [
                                3,
                                1
                            ],
                            "name": "floppy"
                        },
                        {
                            "position": [
                                3,
                                2
                            ],
                            "name": "athlete"
                        },
                        {
                            "position": [
                                3,
                                3
                            ],
                            "name": "road"
                        },
                        {
                            "position": [
                                3,
                                4
                            ],
                            "name": "axe"
                        },
                        {
                            "position": [
                                3,
                                5
                            ],
                            "name": "recycling"
                        },
                        {
                            "position": [
                                3,
                                6
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                3,
                                7
                            ],
                            "name": "cart"
                        },
                        {
                            "position": [
                                3,
                                8
                            ],
                            "name": "rave"
                        },
                        {
                            "position": [
                                3,
                                9
                            ],
                            "name": "alligator"
                        },
                        {
                            "position": [
                                4,
                                0
                            ],
                            "name": "house"
                        },
                        {
                            "position": [
                                4,
                                1
                            ],
                            "name": "baby"
                        },
                        {
                            "position": [
                                4,
                                2
                            ],
                            "name": "violin"
                        },
                        {
                            "position": [
                                4,
                                3
                            ],
                            "name": "bee"
                        },
                        {
                            "position": [
                                4,
                                4
                            ],
                            "name": "shoe"
                        },
                        {
                            "position": [
                                4,
                                5
                            ],
                            "name": "flower"
                        },
                        {
                            "position": [
                                4,
                                6
                            ],
                            "name": "runners"
                        },
                        {
                            "position": [
                                4,
                                7
                            ],
                            "name": "cup"
                        },
                        {
                            "position": [
                                4,
                                8
                            ],
                            "name": "touchpad"
                        },
                        {
                            "position": [
                                4,
                                9
                            ],
                            "name": "USB"
                        },
                        {
                            "position": [
                                5,
                                0
                            ],
                            "name": "kids"
                        },
                        {
                            "position": [
                                5,
                                1
                            ],
                            "name": "cattle"
                        },
                        {
                            "position": [
                                5,
                                2
                            ],
                            "name": "pipe"
                        },
                        {
                            "position": [
                                5,
                                3
                            ],
                            "name": "clothes"
                        },
                        {
                            "position": [
                                5,
                                4
                            ],
                            "name": "wine"
                        },
                        {
                            "position": [
                                5,
                                5
                            ],
                            "name": "teacher"
                        },
                        {
                            "position": [
                                5,
                                6
                            ],
                            "name": "jacket"
                        },
                        {
                            "position": [
                                5,
                                7
                            ],
                            "name": "church"
                        },
                        {
                            "position": [
                                5,
                                8
                            ],
                            "name": "house"
                        },
                        {
                            "position": [
                                5,
                                9
                            ],
                            "name": "cart"
                        },
                        {
                            "position": [
                                6,
                                0
                            ],
                            "name": "cross"
                        },
                        {
                            "position": [
                                6,
                                1
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                6,
                                2
                            ],
                            "name": "doctor"
                        },
                        {
                            "position": [
                                6,
                                3
                            ],
                            "name": "cup"
                        },
                        {
                            "position": [
                                6,
                                4
                            ],
                            "name": "floppy"
                        },
                        {
                            "position": [
                                6,
                                5
                            ],
                            "name": "dirt"
                        },
                        {
                            "position": [
                                6,
                                6
                            ],
                            "name": "ship"
                        },
                        {
                            "position": [
                                6,
                                7
                            ],
                            "name": "cattle"
                        },
                        {
                            "position": [
                                6,
                                8
                            ],
                            "name": "peach"
                        },
                        {
                            "position": [
                                6,
                                9
                            ],
                            "name": "flag"
                        },
                        {
                            "position": [
                                7,
                                0
                            ],
                            "name": "robot"
                        },
                        {
                            "position": [
                                7,
                                1
                            ],
                            "name": "fireplace"
                        },
                        {
                            "position": [
                                7,
                                2
                            ],
                            "name": "eraser"
                        },
                        {
                            "position": [
                                7,
                                3
                            ],
                            "name": "cattle"
                        },
                        {
                            "position": [
                                7,
                                4
                            ],
                            "name": "USB"
                        },
                        {
                            "position": [
                                7,
                                5
                            ],
                            "name": "eraser"
                        },
                        {
                            "position": [
                                7,
                                6
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                7,
                                7
                            ],
                            "name": "cave"
                        },
                        {
                            "position": [
                                7,
                                8
                            ],
                            "name": "baby"
                        },
                        {
                            "position": [
                                7,
                                9
                            ],
                            "name": "moth"
                        },
                        {
                            "position": [
                                8,
                                0
                            ],
                            "name": "factory"
                        },
                        {
                            "position": [
                                8,
                                1
                            ],
                            "name": "cleaner"
                        },
                        {
                            "position": [
                                8,
                                2
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                8,
                                3
                            ],
                            "name": "cook"
                        },
                        {
                            "position": [
                                8,
                                4
                            ],
                            "name": "Q45"
                        },
                        {
                            "position": [
                                8,
                                5
                            ],
                            "name": "branch"
                        },
                        {
                            "position": [
                                8,
                                6
                            ],
                            "name": "pigeon"
                        },
                        {
                            "position": [
                                8,
                                7
                            ],
                            "name": "referee"
                        },
                        {
                            "position": [
                                8,
                                8
                            ],
                            "name": "sink"
                        },
                        {
                            "position": [
                                8,
                                9
                            ],
                            "name": "jacket"
                        },
                        {
                            "position": [
                                9,
                                0
                            ],
                            "name": "artist"
                        },
                        {
                            "position": [
                                9,
                                1
                            ],
                            "name": "doctor"
                        },
                        {
                            "position": [
                                9,
                                2
                            ],
                            "name": "peach"
                        },
                        {
                            "position": [
                                9,
                                3
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                9,
                                4
                            ],
                            "name": "wine"
                        },
                        {
                            "position": [
                                9,
                                5
                            ],
                            "name": "dirt"
                        },
                        {
                            "position": [
                                9,
                                6
                            ],
                            "name": "shoe"
                        },
                        {
                            "position": [
                                9,
                                7
                            ],
                            "name": "Q60"
                        },
                        {
                            "position": [
                                9,
                                8
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                9,
                                9
                            ],
                            "name": "plate"
                        }
                    ],
                    "hintList": [
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
                        ]
                    ],
                    "hintWord": [
                        [
                            "belly"
                        ],
                        [
                            "car"
                        ],
                        [
                            "knife"
                        ],
                        [
                            "snack"
                        ]
                    ]
                },
                {
                    "playerName": "player2",
                    "trapList": [
                        {
                            "position": [
                                0,
                                0
                            ],
                            "name": "bench"
                        },
                        {
                            "position": [
                                0,
                                1
                            ],
                            "name": "pipe"
                        },
                        {
                            "position": [
                                0,
                                2
                            ],
                            "name": "doctor"
                        },
                        {
                            "position": [
                                0,
                                3
                            ],
                            "name": "beetle"
                        },
                        {
                            "position": [
                                0,
                                4
                            ],
                            "name": "soldier"
                        },
                        {
                            "position": [
                                0,
                                5
                            ],
                            "name": "recycling"
                        },
                        {
                            "position": [
                                0,
                                6
                            ],
                            "name": "priest"
                        },
                        {
                            "position": [
                                0,
                                7
                            ],
                            "name": "teacher"
                        },
                        {
                            "position": [
                                0,
                                8
                            ],
                            "name": "doctor"
                        },
                        {
                            "position": [
                                0,
                                9
                            ],
                            "name": "sink"
                        },
                        {
                            "position": [
                                1,
                                0
                            ],
                            "name": "tree"
                        },
                        {
                            "position": [
                                1,
                                1
                            ],
                            "name": "belly"
                        },
                        {
                            "position": [
                                1,
                                2
                            ],
                            "name": "city"
                        },
                        {
                            "position": [
                                1,
                                3
                            ],
                            "name": "nuke_plant"
                        },
                        {
                            "position": [
                                1,
                                4
                            ],
                            "name": "jacket"
                        },
                        {
                            "position": [
                                1,
                                5
                            ],
                            "name": "cart"
                        },
                        {
                            "position": [
                                1,
                                6
                            ],
                            "name": "branch"
                        },
                        {
                            "position": [
                                1,
                                7
                            ],
                            "name": "king"
                        },
                        {
                            "position": [
                                1,
                                8
                            ],
                            "name": "alligator"
                        },
                        {
                            "position": [
                                1,
                                9
                            ],
                            "name": "fireplace"
                        },
                        {
                            "position": [
                                2,
                                0
                            ],
                            "name": "rocks"
                        },
                        {
                            "position": [
                                2,
                                1
                            ],
                            "name": "car"
                        },
                        {
                            "position": [
                                2,
                                2
                            ],
                            "name": "knife"
                        },
                        {
                            "position": [
                                2,
                                3
                            ],
                            "name": "snack"
                        },
                        {
                            "position": [
                                2,
                                4
                            ],
                            "name": "cattle"
                        },
                        {
                            "position": [
                                2,
                                5
                            ],
                            "name": "barrels"
                        },
                        {
                            "position": [
                                2,
                                6
                            ],
                            "name": "nuke_plant"
                        },
                        {
                            "position": [
                                2,
                                7
                            ],
                            "name": "beans"
                        },
                        {
                            "position": [
                                2,
                                8
                            ],
                            "name": "branch"
                        },
                        {
                            "position": [
                                2,
                                9
                            ],
                            "name": "barrels"
                        },
                        {
                            "position": [
                                3,
                                0
                            ],
                            "name": "microbes"
                        },
                        {
                            "position": [
                                3,
                                1
                            ],
                            "name": "sphere"
                        },
                        {
                            "position": [
                                3,
                                2
                            ],
                            "name": "referee"
                        },
                        {
                            "position": [
                                3,
                                3
                            ],
                            "name": "dirt"
                        },
                        {
                            "position": [
                                3,
                                4
                            ],
                            "name": "hen"
                        },
                        {
                            "position": [
                                3,
                                5
                            ],
                            "name": "alligator"
                        },
                        {
                            "position": [
                                3,
                                6
                            ],
                            "name": "kids"
                        },
                        {
                            "position": [
                                3,
                                7
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                3,
                                8
                            ],
                            "name": "canoe"
                        },
                        {
                            "position": [
                                3,
                                9
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                4,
                                0
                            ],
                            "name": "graves"
                        },
                        {
                            "position": [
                                4,
                                1
                            ],
                            "name": "baby"
                        },
                        {
                            "position": [
                                4,
                                2
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                4,
                                3
                            ],
                            "name": "kids"
                        },
                        {
                            "position": [
                                4,
                                4
                            ],
                            "name": "woman"
                        },
                        {
                            "position": [
                                4,
                                5
                            ],
                            "name": "peach"
                        },
                        {
                            "position": [
                                4,
                                6
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                4,
                                7
                            ],
                            "name": "priest"
                        },
                        {
                            "position": [
                                4,
                                8
                            ],
                            "name": "rocks"
                        },
                        {
                            "position": [
                                4,
                                9
                            ],
                            "name": "drugs"
                        },
                        {
                            "position": [
                                5,
                                0
                            ],
                            "name": "bat"
                        },
                        {
                            "position": [
                                5,
                                1
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                5,
                                2
                            ],
                            "name": "people"
                        },
                        {
                            "position": [
                                5,
                                3
                            ],
                            "name": "beach"
                        },
                        {
                            "position": [
                                5,
                                4
                            ],
                            "name": "bee"
                        },
                        {
                            "position": [
                                5,
                                5
                            ],
                            "name": "alligator"
                        },
                        {
                            "position": [
                                5,
                                6
                            ],
                            "name": "cart"
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
                            "name": "Q60"
                        },
                        {
                            "position": [
                                5,
                                9
                            ],
                            "name": "robot"
                        },
                        {
                            "position": [
                                6,
                                0
                            ],
                            "name": "marijuana"
                        },
                        {
                            "position": [
                                6,
                                1
                            ],
                            "name": "parking_spot"
                        },
                        {
                            "position": [
                                6,
                                2
                            ],
                            "name": "tree"
                        },
                        {
                            "position": [
                                6,
                                3
                            ],
                            "name": "rabbit"
                        },
                        {
                            "position": [
                                6,
                                4
                            ],
                            "name": "ocean"
                        },
                        {
                            "position": [
                                6,
                                5
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                6,
                                6
                            ],
                            "name": "door"
                        },
                        {
                            "position": [
                                6,
                                7
                            ],
                            "name": "tree"
                        },
                        {
                            "position": [
                                6,
                                8
                            ],
                            "name": "computer"
                        },
                        {
                            "position": [
                                6,
                                9
                            ],
                            "name": "violin"
                        },
                        {
                            "position": [
                                7,
                                0
                            ],
                            "name": "house"
                        },
                        {
                            "position": [
                                7,
                                1
                            ],
                            "name": "runners"
                        },
                        {
                            "position": [
                                7,
                                2
                            ],
                            "name": "USB"
                        },
                        {
                            "position": [
                                7,
                                3
                            ],
                            "name": "athlete"
                        },
                        {
                            "position": [
                                7,
                                4
                            ],
                            "name": "programmer"
                        },
                        {
                            "position": [
                                7,
                                5
                            ],
                            "name": "peach"
                        },
                        {
                            "position": [
                                7,
                                6
                            ],
                            "name": "dirt"
                        },
                        {
                            "position": [
                                7,
                                7
                            ],
                            "name": "beans"
                        },
                        {
                            "position": [
                                7,
                                8
                            ],
                            "name": "church"
                        },
                        {
                            "position": [
                                7,
                                9
                            ],
                            "name": "dirt"
                        },
                        {
                            "position": [
                                8,
                                0
                            ],
                            "name": "plate"
                        },
                        {
                            "position": [
                                8,
                                1
                            ],
                            "name": "beans"
                        },
                        {
                            "position": [
                                8,
                                2
                            ],
                            "name": "router"
                        },
                        {
                            "position": [
                                8,
                                3
                            ],
                            "name": "cattle"
                        },
                        {
                            "position": [
                                8,
                                4
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                8,
                                5
                            ],
                            "name": "videogame"
                        },
                        {
                            "position": [
                                8,
                                6
                            ],
                            "name": "cook"
                        },
                        {
                            "position": [
                                8,
                                7
                            ],
                            "name": "robot"
                        },
                        {
                            "position": [
                                8,
                                8
                            ],
                            "name": "runners"
                        },
                        {
                            "position": [
                                8,
                                9
                            ],
                            "name": "athlete"
                        },
                        {
                            "position": [
                                9,
                                0
                            ],
                            "name": "man"
                        },
                        {
                            "position": [
                                9,
                                1
                            ],
                            "name": "bee"
                        },
                        {
                            "position": [
                                9,
                                2
                            ],
                            "name": "jacket"
                        },
                        {
                            "position": [
                                9,
                                3
                            ],
                            "name": "laptop"
                        },
                        {
                            "position": [
                                9,
                                4
                            ],
                            "name": "beetle"
                        },
                        {
                            "position": [
                                9,
                                5
                            ],
                            "name": "cook"
                        },
                        {
                            "position": [
                                9,
                                6
                            ],
                            "name": "floppy"
                        },
                        {
                            "position": [
                                9,
                                7
                            ],
                            "name": "moth"
                        },
                        {
                            "position": [
                                9,
                                8
                            ],
                            "name": "thief"
                        },
                        {
                            "position": [
                                9,
                                9
                            ],
                            "name": "rave"
                        }
                    ],
                    "hintList": [
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
                        ]
                    ],
                    "hintWord": [
                        [
                            "belly"
                        ],
                        [
                            "car"
                        ],
                        [
                            "knife"
                        ],
                        [
                            "snack"
                        ]
                    ]
                }
            ]
        }
    }
}